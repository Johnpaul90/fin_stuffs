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

spool trxnlist

DECLARE
Ret            VARCHAR2(2000);
Cnt            NUMBER := 1; 
 
rbat           Number(20,4); 


Begin
--Report Heading
	   DBMS_OUTPUT.PUT_LINE('CUSTOMER ID'   ||'|'|| 'ACCT_NO'         ||'|'||
	                        'TRXN DESCRIPTN'||'|'|| 'TIME_OF_TRNSACTN'||'|'||
	                        'REFERENCE'     ||'|'|| 'TRANSACTION_AMT' ||'|'||
							'TELLER ID');
--TBAADM.REFERRAL_DTLS_HIST_TABLE
For x in (Select g.foracid,d.REFERRAL_ID,d.ACCT_NUM,d.TRAN_AMT,to_date(d.RCRE_TIME,'dd-mm-yyyy') vtime,g.cif_id,
                 decode(d.ACTION_STATUS_DESC,null,d.ACTION_REMARKS,d.ACTION_STATUS_DESC) vdesc,d.RCRE_USER_ID
            from tbaadm.gam g,tbaadm.RDH d
            where g.foracid = d.ACCT_NUM 
		     and g.entity_cre_flg='Y'
             and g.acct_cls_flg='N'
             and g.del_flg='N'
		     and g.bank_id='&3'
		     and d.bank_id='&3'
			 and to_date(d.RCRE_TIME,'dd-mm-yyyy') <= '&2'
             and g.sol_id in (select sol_id from tbaadm.sst where set_id=upper('&1') and bank_id='&3')
        ) Loop

								  
Ret:= x.cif_id           ||'|'||
x.foracid                ||'|'||
x.vdesc                  ||'|'||
x.vtime                  ||'|'||
x.REFERRAL_ID            ||'|'||
x.TRAN_AMT               ||'|'||
x.RCRE_USER_ID           ||'|'||
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