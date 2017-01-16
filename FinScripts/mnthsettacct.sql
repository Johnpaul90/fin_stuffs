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

spool mnthsettacct

DECLARE
Ret            VARCHAR2(2000);
Cnt            NUMBER := 1; 
 
rbat           Number(20,4); 


Begin

For x in (Select g.acid,g.foracid,g.acct_name,decode(b.REP_PERD_MTHS,null,b.REP_PERD_DAYS*30,b.REP_PERD_MTHS) tenor
                 ,g.clr_bal_amt,g.acct_opn_date,g.cif_id,b.dis_shdl_date 
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

	  
--##Waived amount during loan payoff if available
      Begin
       Select sum(WAIVED_AMT) into rbat from tbaadm.ldt 
        where acid =x.acid
        and dmd_flow_id in ('PIDEM','INDEM')
		and bank_id='&3';
      Exception
        when no_data_found then
        rbat :=0;
      End;
	
Ret:= x.cif_id           ||'|'||
x.foracid                ||'|'||
x.acct_name              ||'|'||
x.dis_shdl_date          ||'|'||
x.tenor                  ||'|'||
x.vexp                   ||'|'||
rbat                     ||'|'||
'&1'                     ||'|'||
'&2';

    INSERT INTO fbnmult_dbms(Line_No, Text)
    VALUES(Cnt, Ret);
--Report Heading
	   DBMS_OUTPUT.PUT_LINE('CUSTOMER ID'   ||'|'|| 'ACCT_NO'         ||'|'||
	                        'CUSTOMER NAME' ||'|'|| 'COMENCEMENT_DATE'||'|'||
	                        'TERM'          ||'|'|| 'SETTLED DATE'    ||'|'||
							'REBATE');
 End Loop;
    
END;
/
select text from fbnmult_dbms;
spo off

exit