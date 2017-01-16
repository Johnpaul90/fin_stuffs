--#Alpha - Plus Technologies & Services Ltd --##
--### Louis C. --#
Set serveroutput on size 1000000
set numformat 9999999999999.99
set head off
set verify off
set feedback off
set echo off
set wrap off
set trims on
set newp none
set termout off
set lines 800
set space 0
set colsep |
set pages 0

spool aging

DECLARE
Ret            VARCHAR2(2000);
Cnt            NUMBER := 1; 
 
pbal           Number(20,4); 
arrbal         Number(20,4);
prefVal        Number(20,4);
tblval         Number(20,4);
vdr_int        Number(20,4);
vcode          varchar2(5);  
arrmnth        Number(20,4);
vsector        varchar(10);
vSectDesc      varchar(50);
nxtDate        Date;
vinst          Number(20,4);
vacctStat      varchar(10);

Begin
--Report Heading
	   DBMS_OUTPUT.PUT_LINE('ACCT_NAME'     ||'|'|| 'ACCT_STATUS'     ||'|'||
	                        'ACCT_NUMBER'   ||'|'|| 'BAL OUTSTANDING' ||'|'||
	                        'APPROVED_AMT'  ||'|'|| 'DISBURSED_AMT'   ||'|'||
							'DISBURSED_DATE'||'|'|| 'EXPIRY DATE'     ||'|'||
							'TENOR DAYS'    ||'|'|| 'INTEREST RATE'   ||'|'||
							'CUSTOMER ID'   ||'|'|| 'CURRENCY CODE'   ||'|'||
							'INSTALLMNT_AMT'||'|'|| 'INTREST DUE_DATE'||'|'||
	                        'OVER_DUE_AMT'  ||'|'|| 'DAYS_IN_ARREAS'  ||'|'||
							'DESCRIPTION');
For x in (Select g.acid,g.foracid,g.acct_name,g.schm_code,decode(b.REP_PERD_MTHS,null,b.REP_PERD_DAYS*30,b.REP_PERD_MTHS) tenor
                 ,g.clr_bal_amt,g.acct_opn_date,b.dis_shdl_date,b.dis_amt,g.cif_id,g.acct_crncy_code
				 ,add_months(g.acct_opn_date,decode(b.REP_PERD_MTHS,null,b.REP_PERD_DAYS*30,b.REP_PERD_MTHS)) vexp
            from tbaadm.gam g,tbaadm.lam b
            where g.acid = b.acid 
		     and g.entity_cre_flg='Y'
             and g.acct_cls_flg='N'
             and g.schm_type ='LAA'
             and g.del_flg='N'
		     and g.bank_id='&3'
		     and b.bank_id='&3'
             and g.sol_id in (select sol_id from tbaadm.sst where set_id=upper('&1') and bank_id='&3')
        ) Loop

--##Account Status
      Begin
       Select ACCT_STATUS into vacctStat from tbaadm.CAM
        where acid =x.acid
        and bank_id='&3';
      Exception
        when no_data_found then
        vacctStat :=null;
      End;
	  
--##Outstanding Principal
      Begin
       Select sum(dmd_amt - tot_adj_amt) into pbal from tbaadm.ldt 
        where acid =x.acid
        and dmd_flow_id ='PIDEM'
		and bank_id='&3';
      Exception
        when no_data_found then
        pbal :=0;
      End;
	  
--##Installment amount
      Begin
       Select sum(dmd_amt) into vinst from tbaadm.ldt 
        where acid =x.acid
        and dmd_flow_id in ('PIDEM','INDEM')
		and DMD_EFF_DATE is not null
		and to_date(DMD_EFF_DATE,'dd-mm-yyyy') = to_date('&2','dd-mm-yyyy')
		and bank_id='&3';
      Exception
        when no_data_found then
        vinst:=0;
      End;

--##Next Interest Date
      Begin
       Select add_months(DMD_EFF_DATE,1) into nxtDate from tbaadm.ldt 
        where acid =x.acid
        and dmd_flow_id in ('PIDEM','INDEM')
		and DMD_EFF_DATE is not null
		and to_date(DMD_EFF_DATE,'dd-mm-yyyy') = to_date('&2','dd-mm-yyyy')
		and bank_id='&3';
      Exception
        when no_data_found then
        nxtDate:=null;
      End;
	  
--##Overdue amount
      Begin
       Select sum(dmd_amt - tot_adj_amt) into arrbal from tbaadm.ldt 
        where acid =x.acid
        and dmd_flow_id in ('PIDEM','INDEM')
		and LAST_ADJ_DATE is null
		and to_date(LAST_ADJ_DATE,'dd-mm-yyyy') <= to_date('&2','dd-mm-yyyy')
		and bank_id='&3';
      Exception
        when no_data_found then
        arrbal :=0;
      End;
	  
--##Arrears Days
      Begin
       Select count(unique to_date(LAST_ADJ_DATE,'dd-mm-yyyy'))
        into arrmnth from tbaadm.ldt 
        where acid =x.acid
        and dmd_flow_id in ('PIDEM','INDEM')
		and LAST_ADJ_DATE is not null
		and to_date(LAST_ADJ_DATE,'dd-mm-yyyy') <= to_date('&2','dd-mm-yyyy')
		and bank_id='&3';
      Exception
        when no_data_found then
        arrmnth :=null;
      End;

---## Debit interest rate
      Begin
        Select INT_TBL_CODE,ID_DR_PREF_PCNT into vcode,prefVal from tbaadm.ITC 
        Where entity_id= x.acid 
        and INT_TBL_CODE_SRL_NUM in (select max(INT_TBL_CODE_SRL_NUM) from tbaadm.ITC 
		                             where entity_id= x.acid and entity_cre_flg='Y' and del_flg='N' and bank_id ='&3')
        And bank_id ='&3'
        and entity_cre_flg='Y' and del_flg='N';
      Exception
        when no_data_found then
        vcode :=0;
        prefVal :=0;
      End;

      Begin
        Select nvl(abs(sum(decode(int_slab_dr_cr_flg,'C',nrml_int_pcnt,-nrml_int_pcnt))),0) into tblval
        from tbaadm.lavs
        Where INT_TBL_CODE = vcode
        And   crncy_code = x.acct_crncy_code
        And   INT_TBL_VER_NUM = (select max(INT_TBL_VER_NUM) from tbaadm.lavs 
		                         where INT_TBL_CODE=vcode And crncy_code = x.acct_crncy_code and bank_id ='&3')
        And   bank_id ='&3'
        And   INT_SLAB_DR_CR_FLG = 'D';
      Exception
        when no_data_found then
        tblval :=0;
      End;
      vdr_int:= tblval + prefVal;

 -- SECTOR CODE and Description
    Begin
    select sector_code  into vsector from tbaadm.gac 
      where acid = x.acid
	  And   bank_id ='&3';
    exception
      when no_data_found then
      null;
    End; 
    
    Begin
    select ref_desc into vSectDesc from tbaadm.rct 
      where ref_code = vsector and bank_id ='&3' and ref_rec_type='22';
    exception
      when no_data_found then
      vSectDesc:=null;
    End; 
	
Ret:= x.acct_name        ||'|'||
vacctStat                ||'|'||
x.foracid                ||'|'||
pbal                     ||'|'||
x.clr_bal_amt            ||'|'||
x.dis_amt                ||'|'||
x.dis_shdl_date          ||'|'||
x.vexp                   ||'|'||
x.tenor                  ||'|'||
vdr_int                  ||'|'||
x.cif_id                 ||'|'||
x.acct_crncy_code        ||'|'||
vinst                    ||'|'||
nxtDate                  ||'|'||
arrbal                   ||'|'||  
arrmnth                  ||'|'||
vSectDesc                ||'|'||
'&1'                     ||'|'||
'&2';

    INSERT INTO fbnmult_dbms(Line_No, Text)
    VALUES(Cnt, Ret);

 End Loop;
    
END;
/
select text from fbnmult_dbms;
spo off

exit