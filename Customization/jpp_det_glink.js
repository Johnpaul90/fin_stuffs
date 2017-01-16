function printBlock()
{
	writeCustomHeader("jpp_det");
	with (document){
	//write('<input type="hidden" id="toDate" fdt="fdate" mneb1="N" vFldId="toDate_ui" name="' + subGroupName + '.toDate">');
	write('<table border="0" cellspacing="0" cellpadding="0" class="ctable">');
//alert("am in dev 03");
	write('<tr>');
	write('<td>');
	write('<table border="0" cellspacing="0" cellpadding="0">');
	write('<tr>');
	write('<td class="page-heading">BATCH RECORD UPLOAD</td>');
	write('</tr>');
	write('</table>');
	write('<table border="0" cellpadding="0" cellspacing="0" width="100%">');
	write('<tr>');
	write('<td class="textlabel"> </td>');
	write('<td class="textfielddisplaylabel"> </td>');
	write('<td class="columnwidth">&nbsp; </td>');
	write('<td class="textlabel"> </td>');
	write('<td class="textfielddisplaylabel"> </td>');
	write('</tr>');
	write('</table>');
	write('<br />');
	write('<!-- DETAILSBLOCK-BEGIN -->');
	write('<table border="0" cellpadding="0" cellspacing="0" width="100%">');
	write('<tr>');
	write('<td valign="top">');
	write('<table width="100%" border="0" cellpadding="0" cellspacing="0" class="table">');
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
	
      // select drop-down	
		write('<tr>');
        write('<td class="textlabel" style="height: 15px; width: 120px">' + jspResArr.get("FLT027947") + '<script>setMandatory("Y");</script></td>');
        write('<td class="textfield">');
        write('<select name="' + subGroupName + '.funcCode" id="funcCode"'+jppProps.get("funcCode_ENABLED")+' style="width: 116px">');
        write('<option value=""> --  SELECT  -- </option>');
		write('<option value="U"> UPLOAD </option>');
        write('<option value="A"> ADD </option>');
        write('</select>');
        write('</td>');
	
	//upload file
	write('<td id="mf" class="textlabel" style="height: 5px;">' + jspResArr.get("FLT027946") + '</td>');
	write('<td class="textfield">');
	write('<input name="' + subGroupName + '.file" id="file" ' + jppProps.get("file_ENABLED") + '   type="file">');
	write('</td>');
	write('</tr>');
	
	 
		 
	write('<tr>');
	write('<td class="textlabel" style="height: 15px"> </td>');
	write('</tr>');
	// first row
		write('<tr  id="add1">');
		write('<td class="textlabel" style="height: 15px; width: 117px" id="td1">Date of Deferal<script>setMandatory("Y");</script></td>');
		write('<td class="textfield">');
        write('<input type="text" class="textfieldfont" name="'+subGroupName+'.date_of_deferal" id="date_of_deferal" ' + jppProps.get("date_of_deferal_ENABLED")+' size="15" maxlength="15" style="width: 200px">');
        write('</td>');
	
		write('<td class="textlabel" style="height: 15px; width: 117px" id="td1">Branch<script>setMandatory("Y");</script></td>');
		write('<td class="textfield">');
        write('<input type="text" class="textfieldfont" name="'+subGroupName+'.branch" id="branch" ' + jppProps.get("branch_ENABLED")+' size="35" maxlength="35" style="width: 200px">');
        write('</td>');
		write('</tr>');
	
	// second row
	write('<tr   id="add2">');
	write('<td class="textlabel" style="height: 15px; width: 117px" id="td1">Group<script>setMandatory("Y");</script></td>');
	write('<td class="textfield">');
    write('<input type="text" class="textfieldfont" name="'+subGroupName+'.group" id="group" ' + jppProps.get("group_ENABLED")+' size="80" maxlength="80" style="width: 200px">');
    write('</td>');
  
	write('<td class="textlabel" style="height: 15px">Customer Id<script>setMandatory("Y");</script></td>');
	write('<td class="textfield">');
	write('<input hotKeyId="search1" type="text" name="' + subGroupName + '.cifId" id="cifId" ' + jppProps.get("cifId_ENABLED") + ' style="width: 200px">');
    write('<a href="javascript: showCustId(document.forms[0].cifId);" id="sLnk6">');
    write('<img border="0" height="17" hotKeyId="search1" src="../Renderer/images/'+applangcode+'/search_icon.gif" width="16" >');
	write('</a>');
	write('</td>');
	write('</tr>');
	
	// third row
	write('<tr   id="add3">')
	write('<td class="textlabel" style="height: 15px; width: 117px" id="td1">Customer Name<script>setMandatory("Y");</script></td>');
	write('<td class="textfield">');
    write('<input type="text" class="textfieldfont" name="'+subGroupName+'.customer" id="customer" ' + jppProps.get("customer_ENABLED")+' size="80" maxlength="80" style="width: 200px">');
    write('</td>');

	write('<td class="textlabel" style="height: 15px; width: 117px" id="td1">Facility Type<script>setMandatory("Y");</script></td>');
	write('<td class="textfield">');
    write('<input type="text" class="textfieldfont" name="'+subGroupName+'.facility_type" id="facility_type" ' + jppProps.get("facility_type_ENABLED")+' size="80" maxlength="80" style="width: 200px">');
    write('</td>');
	write('</tr>')
	



	//space
	write('<tr>');
	write('<td class="textlabel" style="height: 15px"> </td>');
	write('</tr>');
	write('<tr>');
	write('<td class="textlabel" style="height: 15px"> </td>');
	write('</tr>');
	
	
	//fourth row
	write('<tr   id="add4">')
	write('<td class="textlabel" style="height: 15px; width: 117px" id="td1">Amount<script>setMandatory("Y");</script></td>');
	write('<td class="textfield">');
    write('<input type="text" class="textfieldfont" name="'+subGroupName+'.amount" id="amount" ' + jppProps.get("amount_ENABLED")+' size="35" maxlength="35" style="width: 200px">');
    write('</td>');

	write('<td class="textlabel" style="height: 15px; width: 117px" id="td1">Date of Form3800B<script>setMandatory("Y");</script></td>');
	write('<td class="textfield">');
    write('<input type="text" class="textfieldfont" name="'+subGroupName+'.date_of_form3800B" id="date_of_form3800B" ' + jppProps.get("date_of_form3800B_ENABLED")+' size="15" maxlength="15" style="width: 200px">');
    write('</td>');
	write('</tr>')	
		
	//fifth row
	write('<tr   id="add5">')
	write('<td class="textlabel" style="height: 15px; width: 117px" id="td1">Conditions Defered<script>setMandatory("Y");</script></td>');
	write('<td class="textfield">');
    write('<input type="text" class="textfieldfont" name="'+subGroupName+'.conditions_defered" id="conditions_defered" ' + jppProps.get("conditions_defered_ENABLED")+' size="350" maxlength="350" style="width: 200px">');
    write('</td>');

	write('<td class="textlabel" style="height: 15px; width: 117px" id="td1">Period<script>setMandatory("Y");</script></td>');
	write('<td class="textfield">');
    write('<input type="text" class="textfieldfont" name="'+subGroupName+'.period" id="period" ' + jppProps.get("period_ENABLED")+' size="12" maxlength="12" style="width: 200px">');
    write('</td>');
	write('</tr>')
	
	//sixth row
	write('<tr   id="add6">')
	write('<td class="textlabel" style="height: 15px; width: 117px" id="td1">Expiry Date Of Deferal<script>setMandatory("Y");</script></td>');
	write('<td class="textfield">');
    write('<input type="text" class="textfieldfont" name="'+subGroupName+'.expiryDate_deferal" id="expiryDate_deferal" ' + jppProps.get("expiryDate_deferal_ENABLED")+' size="15" maxlength="15" style="width: 200px">');
    write('</td>');

	write('<td class="textlabel" style="height: 15px; width: 117px" id="td1">Soucrce Of Deferal<script>setMandatory("Y");</script></td>');
	write('<td class="textfield">');
    write('<input type="text" class="textfieldfont" name="'+subGroupName+'.soucrce_of_deferal" id="soucrce_of_deferal" ' + jppProps.get("soucrce_of_deferal_ENABLED")+' size="30" maxlength="30" style="width: 200px">');
    write('</td>');
	write('</tr>')
	
	//space
	write('<tr>');
	write('<td class="textlabel" style="height: 15px"> </td>');
	write('</tr>');
	write('<tr>');
	write('<td class="textlabel" style="height: 15px"> </td>');
	write('</tr>');
	
	//seventh row
	write('<tr   id="add7">')
	write('<td class="textlabel" style="height: 15px; width: 117px" id="td1">Exception<script>setMandatory("Y");</script></td>');
	write('<td class="textfield">');
    write('<input type="text" class="textfieldfont" name="'+subGroupName+'.exception" id="exception" ' + jppProps.get("exception_ENABLED")+' size="70" maxlength="70" style="width: 200px">');
    write('</td>');

	write('<td class="textlabel" style="height: 15px; width: 117px" id="td1">Remarks History<script>setMandatory("Y");</script></td>');
	write('<td class="textfield">');
    write('<input type="text" class="textfieldfont" name="'+subGroupName+'.remarks_history" id="remarks_history" ' + jppProps.get("remarks_history_ENABLED")+' size="350" maxlength="350" style="width: 200px">');
    write('</td>');
	write('</tr>')
	
	//eight row
	write('<tr   id="add8">')
	write('<td class="textlabel" style="height: 15px; width: 117px" id="td1">BM<script>setMandatory("Y");</script></td>');
	write('<td class="textfield">');
    write('<input type="text" class="textfieldfont" name="'+subGroupName+'.bm" id="bm" ' + jppProps.get("bm_ENABLED")+' size="80" maxlength="80" style="width: 200px">');
    write('</td>');

	write('<td class="textlabel" style="height: 15px; width: 117px" id="td1">RM<script>setMandatory("Y");</script></td>');
	write('<td class="textfield">');
    write('<input type="text" class="textfieldfont" name="'+subGroupName+'.rm" id="rm" ' + jppProps.get("rm_ENABLED")+' size="80" maxlength="80" style="width: 200px">');
    write('</td>');
	write('</tr>')
	
	
	 
	
	
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

function printFooterBlock()
{
	with (document) {
	if ((sReferralMode == 'I')||(sReferralMode == 'S')){
	write('<div align="left" class="ctable">');
	if (sReferralMode == 'S'){
	write('<input type="button" class="Button" id="Submit" value=" ' + jspResArr.get("FLT1030546") + '" onClick="javascript:return doRefSubmit(this);" hotKeyId="Submit" >');
	}
	writeRefFooter();
	write('<input type="button" class="Button" id="_BackRef_" value=" ' + jspResArr.get("FLT1030509") + '" onClick="javascript:return doSubmit(this.id);" hotKeyId="Cancel" >');
	write('</div>');
	}else{
	if(funcCode !='I'){
	write('<div class="ctable">');
    write('<input name="show" id="show" type="button" class="button"  onClick="javascript:return fnshow();"" value=" ' + jspResArr.get("FLT1030519") + '">');
	write('<input id="Cancel" name="Cancel" type="button" class="button" value=" ' + jspResArr.get("FLT1030509") + '"	onClick="javascript:return jpp_det_ONCLICK2(this,this.id);"" hotKeyId="Cancel">');
	write('<input id="Upload" name="Upload" type="button" class="button"	onClick="javascript:return jpp_det_ONCLICK1(this,this);"" value=" ' + jspResArr.get("FLT1030520") + '">');
    write('<input id="Submit" name="Submit" type="button" class="button" onClick="javascript:return jpp_det_ONCLICK3(this,this);"" value=" ' + jspResArr.get("FLT1030546") + '" hotKeyId="Submit">');
	
	}else{
	write('<div class="ctable">');
	write('<input class="button" type="button" id="Back" value="OK" onClick="javascript:return doSubmit(this.id)" hotKeyId="Ok">');
	}
	writeFooter();
	write('</div>');
	}
	} //End with()
}//End function

function fnOnLoad()
{
        fnhide();
	var ObjForm = document.forms[0];

	pre_ONLOAD('jpp_det',this);

	var funcName = "this."+"locfnOnLoad";
	if(eval(funcName) != undefined){
		eval(funcName).call(this);
	}

	fnPopulateControlValues();

	if(funcCode =='V' || funcCode =='I' || funcCode =='D' || funcCode =='U' ||  funcCode =='X' || sReferralMode =='I' || sReferralMode =='S'){
		fnDisableFormControls(ObjForm);
	}
	fnPopUpExceptionWindow(ObjForm.actionCode);
	if((typeof(WF_IN_PROGRESS) != "undefined") && (WF_IN_PROGRESS == "PEAS")){
		checkCustErrExecNextStep(Message);
	}

	post_ONLOAD('jpp_det',this);
}

function fnCheckMandatoryFields()
{
	var ObjForm = document.forms[0];

	return true;
}

function fnPopulateControlValues() 
{
	var ObjForm = document.forms[0];


	//ObjForm.toDate.value = toDate;
	ObjForm.funcCode.value = funcCode;
	ObjForm.file.value = file;
	ObjForm.cifId.value = cifId;
	//ObjForm.cifIdx.value = cifIdx;
	//ObjForm.cifIdx.value = cifIdy;
	//ObjForm.cifIdx.value = cifIdz;
	//ObjForm.date_of_deferal.value = date_of_deferal;
	//ObjForm.msg.value = date_of_deferal;
}


function jpp_det_ONCLICK1(obj,p1)
{
		
	var retVal = "";
	if (pre_ONCLICK('jpp_det',obj) == false) { 
		return false;
	}
	if ((retVal =  fnUpload(p1)) == false)
        {
                return false;
        }
	if (post_ONCLICK('jpp_det',obj) == false) { 
		return false;
	}
	return (retVal == undefined) ? true : retVal;
}

function jpp_det_ONCLICK2(obj,p1)
{
	var retVal = "";
	if (pre_ONCLICK('jpp_det',obj) == false) { 
		return false;
	}
	if ((retVal =  doSubmit(p1)) == false) {
		return false;
	}
	if (post_ONCLICK('jpp_det',obj) == false) { 
		return false;
	}
	return (retVal == undefined) ? true : retVal;
}

function jpp_det_ONCLICK3(obj,p1)
{
        var retVal = "";
        if (pre_ONCLICK('jpp_det',obj) == false) {
                return false;
        }
        if ((retVal =  fnValAndSubmit(p1)) == false) {
                return false;
        }
        if (post_ONCLICK('jpp_det',obj) == false) {
                return false;
        }
        return (retVal == undefined) ? true : retVal;
}
