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

spool odalist

DECLARE
Ret            VARCHAR2(2000);
Cnt            NUMBER := 1; 

srl            NUMBER := 0; 
prefVal        Number(20,4);
vcode          varchar2(5);
tblval         Number(20,4);
vdr_int        Number(20,4);


Begin
--Report Heading
	   DBMS_OUTPUT.PUT_LINE('SERIAL_NO'     ||'|'|| 'ACCT_NO'         ||'|'||
	                        'APPROVED_DATE' ||'|'|| 'EXPIRY DATE'     ||'|'||
	                        'DRAWING LIMIT' ||'|'|| 'APPROVED LIMIT'  ||'|'||
							'INTEREST_RATE' ||'|'|| 'MARGIN RATE');
For x in (Select g.acid,g.foracid,b.APPLICABLE_DATE,b.LIM_EXP_DATE,b.SANCT_LIM,
                 g.acct_crncy_code,g.drwng_power
            from tbaadm.gam g,tbaadm.LHT b
            where g.acid = b.acid 
		     and g.entity_cre_flg='Y'
             and g.acct_cls_flg='N'
             and g.schm_type ='LAA'
             and g.del_flg='N'
		     and g.bank_id='&3'
			 and b.ENTITY_CRE_FLG='Y'
			 and b.del_flg='N'
		     and b.bank_id='&3'
			 and b.STATUS='A'
			 and to_date(b.LIM_SANCT_DATE,'dd-mm-yyyy') <= '&2'
             and g.sol_id in (select sol_id from tbaadm.sst where set_id=upper('&1') and bank_id='&3')
        ) Loop
	  
---## Debit interest rate
      Begin
        Select INT_TBL_CODE,ID_DR_PREF_PCNT into vcode,prefVal from tbaadm.ITC 
        Where entity_id= x.acid 
        and INT_TBL_CODE_SRL_NUM in (select max(INT_TBL_CODE_SRL_NUM) from tbaadm.ITC 
		                             where entity_id= x.acid and entity_cre_flg='Y' and del_flg='N' 
									 and bank_id='&3')
        and bank_id ='&3'
         and entity_cre_flg='Y' and del_flg='N';
      Exception
        when no_data_found then
        vcode :=0;
        prefVal :=0;
      End;

      Begin
        Select nvl(abs(sum(decode(int_slab_dr_cr_flg,'C',nrml_int_pcnt,-nrml_int_pcnt))),0) into tblval
        from tbaadm.ivs
        Where INT_TBL_CODE = vcode
        And   crncy_code = x.acct_crncy_code
        And   INT_TBL_VER_NUM = (select max(INT_TBL_VER_NUM) from tbaadm.ivs 
		                         where INT_TBL_CODE=vcode And crncy_code = x.acct_crncy_code and bank_id='&3')
        And   bank_id ='&3'
        And   INT_SLAB_DR_CR_FLG = 'D';
      Exception
        when no_data_found then
        tblval :=0;
      End;
      vdr_int:= tblval + prefVal;

srl:= srl+1;	  
Ret:= srl                ||'|'||
x.foracid                ||'|'||
x.APPLICABLE_DATE        ||'|'||
x.LIM_EXP_DATE           ||'|'||
x.drwng_power            ||'|'||
x.SANCT_LIM              ||'|'||
vdr_int                  ||'|'||
prefVal                  ||'|'||
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