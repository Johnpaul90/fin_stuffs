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

spool toploan

DECLARE
Ret            VARCHAR2(2000);
Cnt            NUMBER := 1;
srl            NUMBER := 0;

grbal          Number(20,4);
pbal           Number(20,4);
ibal           Number(20,4);
arrbal         Number(20,4);
prefVal        Number(20,4);
tblval         Number(20,4);
vdr_int        Number(20,4);
vcode          varchar2(5);  
arrmnth        Number(20,4);

Begin
--Report Heading
	   DBMS_OUTPUT.PUT_LINE('SERIAL_NO'     ||'|'|| 'ACCT_NO'         ||'|'||
	                        'ACCT_NAME'     ||'|'|| 'PRODUCT CODE'    ||'|'||
	                        'TERM'          ||'|'|| 'INTEREST RATE'   ||'|'||
							'FINANCE AMT'   ||'|'|| 'GROSS BALANCE'   ||'|'||
							'PRINCIPAL BAL' ||'|'|| 'INTEREST BAL'    ||'|'||
	                        'ARREAR AMOUNT' ||'|'|| 'ARREARS MONTH'   ||'|'||
							'APPROVED DATE' ||'|'|| 'COMMENCED DATE'  ||'|'||
							'REALISED');
For x in (Select g.acid,g.foracid,g.acct_name,g.schm_code,decode(b.REP_PERD_MTHS,null,b.REP_PERD_DAYS*30,b.REP_PERD_MTHS) tenor
                 ,g.clr_bal_amt,g.acct_opn_date,b.dis_shdl_date,b.dis_amt,acct_crncy_code
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

--##Outstanding Gross
      Begin
       Select sum(dmd_amt - tot_adj_amt) into grbal from tbaadm.ldt 
        where acid =x.acid
        and dmd_flow_id in ('PIDEM','INDEM')
		and bank_id='&3';
      Exception
        when no_data_found then
        grbal :=0;
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
	  
--##Outstanding Interest
      Begin
       Select sum(dmd_amt - tot_adj_amt) into ibal from tbaadm.ldt 
        where acid =x.acid
        and dmd_flow_id= 'INDEM' 
		and bank_id='&3';
      Exception
        when no_data_found then
        ibal :=0;
      End;
 
--##Arrear amount
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
	  
--##Arrears Months
      Begin
       Select count(unique substr(to_char(to_date(LAST_ADJ_DATE,'dd-mm-yyyy'),'DD-MON-YY'),4,3))
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
	  
srl:= srl + 1;
   
Ret:= srl                ||'|'||
x.foracid                ||'|'||
x.acct_name              ||'|'||
x.schm_code              ||'|'||
x.tenor                  ||'|'||
vdr_int                  ||'|'||
x.clr_bal_amt            ||'|'||
grbal                    ||'|'||
pbal                     ||'|'||
ibal                     ||'|'||
arrbal                   ||'|'||    
arrmnth                  ||'|'||
x.acct_opn_date          ||'|'||
x.dis_shdl_date          ||'|'||
x.dis_amt                ||'|'||
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

