function printBlock()
{
	writeCustomHeader("cotcon_det");
	with (document){
	write('<table border="0" cellspacing="0" cellpadding="0" class="ctable">');
	write('<tr>');
	write('<td>');
	write('<table border="0" cellspacing="0" cellpadding="0">');
	write('<tr>');
	write('<td class="page-heading">' + jspResArr.get("FLT031581") + '</td>');
	write('</tr>');
	write('</table>');
	write('<!-- DETAILSBLOCK-BEGIN -->');
	write('<table border="0" cellpadding="0" cellspacing="0" width="100%">');
	write('<tr>');
	write('<td valign="top">');
	write('<table width="100%" border="0" cellpadding="0" cellspacing="0" class="tableborder">');
	write('<tr>');
	write('<td>');
	write('<table width="100%" border="0" cellpadding="0" cellspacing="0" class="innertable">');
	write('<tr>');
	write('<td>');
	write('<table width="100%" border="0" cellpadding="0" cellspacing="0" class="innertabletop1">');
	write('<tr>');
	write('<td height="25" colspan="5" align="right">');
	write('<table border="0" cellspacing="0" cellpadding="0">');
        write('<tr>');
        write('<td align="right">');
        write('<a href="javascript:showHelpFile(\'det_help.htm\');" id="sLnk1">');
        write('<img  hotKeyId="finHelp" src="../Renderer/images/'+applangcode+'/help.gif" width="17" height="17" vspace="1" border="0" />');
        write('</a>');
        write('</td>');
        write('</tr>');
        write('</table>');
        write('</td>');
        write('</tr>');

        write('<tr>');
        write('<td class="textlabel" style="height: 15px; width: 117px">Function Code</td>');
        write('<td class="textfield">');
        write('<select name="' + subGroupName + '.funcCode" id="funcCode"'+cotconProps.get("funcCode_ENABLED")+'style="width:145px" onChange="javascript:return validateRpt(this);">');
        write('<option value="">--SELECT--</option>');
        write('<option value="A">Add</option>');
        write('<option value="I">Inquire</option>');
        write('<option value="M">Modify</option>');
        write('<option value="X">Cancel</option>');
        write('<option value="V">Verify</option>');
        write('<option value="D">Delete</option>');
        write('</select>');
        write('</td>');
        write('</tr>');

	write('<tr>');
	write('<td class="textlabel" style="height: 15px">' + jspResArr.get("FLT031580") + '</td>');
	write('<td class="textfield">');
	write('<input onChange="javascript:return fnShowAcctName();" hotKeyId="search1" type="text" name="' + subGroupName +'.acctNum" id="acctNum"'+cotconProps.get("acctNum_ENABLED") + '>');
        write('<a href="javascript:dispAcct(document.forms[0].acctNum);">');
        write('<img id="hide" src="../Renderer/images/search_icon.gif" width="16" height="17" border="0" id="sLnk2"> </a>');

        write('<a href="javascript:showAccountIdList(document.forms[0].acctNum);" id="sLnk1" >');
        write('<img id="hid" border="0" height="17" hotKeyId="search1" src="../Renderer/images/'+applangcode+'/search_icon.gif" width="16">');
        write('</a>');
        write('<input class="label" id="acctName" name="' + subGroupName + '.acctName" size="25" maxlength="15" disabled>');

	write('</td>');
	write('<td class="columnwidth"> </td>');
	write('<td class="textlabel"> </td>');
	write('<td class="textfield"> </td>');
	write('</tr>');

        write('<tr>');
        write('<td class="textlabel" style="height: 15px">' + jspResArr.get("FLT027830") + '</td>');
        write('<td class="textfield">');
        write('<input type="text" name="' + subGroupName + '.tamt" id="tamt" ' + cotconProps.get("tamt_ENABLED") + '>');
        write('</td>');
        write('<td class="columnwidth"> </td>');
        write('<td class="textlabel"> </td>');
        write('<td class="textfield"> </td>');
        write('</tr>');
        write('<tr>');
        write('<td class="textlabel" style="height: 15px"> </td>');
        write('<td class="textfield"> </td>');
        write('<td class="columnwidth"> </td>');
        write('<td class="textlabel"> </td>');
        write('<td class="textfield"> </td>');
        write('</tr>');

	write('</table>');
	write('</td>');
	write('</tr>');
	write('</table>');
	write('</td>');
	write('</tr>');
	write('</table>');
	write('</td>');
	write('</tr>');
	write('</table>');
	write('<!-- DETAILSBLOCK-END -->');
	write('</td>');
	write('</tr>');
	write('</table>');
	} //End with()
} //End function

function fnShowAcctName()
{

                if(document.forms[0].acctNum.value != "")
        {

                        var inputNameValues             = "acctNum|" + document.forms[0].acctNum.value;
                        var outputNames                 = "acctName";
                        var scrName                     = "cotconFetchAcctName.scr";
                        var retVal                      = appFnExecuteScript(inputNameValues, outputNames, scrName, false);
                        var retArray                    = retVal.split("|");
                        var succOrFail                                  = retArray[1];
                        if(succOrFail == "N")
                        {
                                alert(retArray[3]);
                                document.forms[0].acctNum.focus();
                                return false;
                        }
                        else
                        {
                                document.forms[0].acctName.value = retArray[3].toUpperCase();
                        }

                }
                else
                {
                        alert("Please Enter Account Id");
                        document.forms[0].acctNum.focus();
                        return false;
                }

}


function printFooterBlock()
{
	with (document) {
	if ((sReferralMode == 'I')||(sReferralMode == 'S')){
	write('<div align="left" class="ctable">');
	if (sReferralMode == 'S'){
	write('<input type="button" class="Button" id="Submit" value="SUBMIT" onClick="javascript:return doRefSubmit(this);" hotKeyId="Submit" >');
	}
	writeRefFooter();
	write('<input type="button" class="Button" id="_BackRef_" value="CANCEL" onClick="javascript:return doSubmit(this.id);" hotKeyId="Cancel" >');
	write('</div>');
	}else{
	write('<div class="ctable">');
	write('<input id="Submit" name="Submit" type="button" class="button"	onClick="javascript:return cotcon_det_ONCLICK1(this,this);"" value="Submit" hotKeyId="Submit" >');
	write('<input id="Clear" name="Clear" type="button" class="button" value="Clear"	onClick="javascript:return cotcon_det_ONCLICK2(this);"">');
	writeFooter();
	write('</div>');
	}
	} //End with()
}//End function

function fnOnLoad()
{
	var ObjForm = document.forms[0];
        document.getElementById('hide').style.visibility = 'hidden';

	pre_ONLOAD('cotcon_det',this);

	var funcName = "this."+"locfnOnLoad";
	if(eval(funcName) != undefined){
		eval(funcName).call(this);
	}

	fnPopulateControlValues();

	fnPopUpExceptionWindow(ObjForm.actionCode);
	if((typeof(WF_IN_PROGRESS) != "undefined") && (WF_IN_PROGRESS == "PEAS")){
		checkCustErrExecNextStep(Message);
	}

	post_ONLOAD('cotcon_det',this);
}

function fnCheckMandatoryFields()
{
	var ObjForm = document.forms[0];

	return true;
}

function fnPopulateControlValues() 
{
	var ObjForm = document.forms[0];

	ObjForm.funcCode.value = funcCode;
	ObjForm.acctNum.value = acctNum;
	ObjForm.tamt.value = tamt;
}


function cotcon_det_ONCLICK1(obj,p1)
{
	var retVal = "";
	if (pre_ONCLICK('cotcon_det',obj) == false) { 
		return false;
	}
	if ((retVal =  fnValAndSubmit(p1)) == false) {
		return false;
	}
	if (post_ONCLICK('cotcon_det',obj) == false) { 
		return false;
	}
	return (retVal == undefined) ? true : retVal;
}

function cotcon_det_ONCLICK2(obj)
{
	var retVal = "";
	if (pre_ONCLICK('cotcon_det',obj) == false) { 
		return false;
	}
	if ((retVal =  fnClearFields()) == false) {
		return false;
	}
	if (post_ONCLICK('cotcon_det',obj) == false) { 
		return false;
	}
	return (retVal == undefined) ? true : retVal;
}
