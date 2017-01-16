<!--	This is getting executing on click of submit and validate button -->
<!--    This is getting executing on click of submit and validate button -->
function fnValidateData() {
                if (!fnCheckMandatoryFields())
                {
                        return false;
                }
                return true;
}



<!-- This function is added for formatting a particular MRH Row -->

function formatRowValue(Obj, colNumber) {

      return Obj;

       }

<!-- This function is added for formatting a particular MRH Row -->

function validateRpt()
{
  var frm = document.forms[0];
  if(frm.funcCode.value =="A")
  {
    document.getElementById('hid').style.visibility = 'visible';
    //document.getElementById('hide').style.visibility = 'visible';
    document.getElementById('tamt').style.visibility = 'visible';
    frm.acctNum.disabled=false;
    frm.tamt.disabled=false;
    hideImage("hide");
    //showImage("hid");
    frm.hide.disabled=true;
  }else
  if(frm.funcCode.value =="M"){
    //document.getElementById('hid').style.visibility = 'hidden';
    document.getElementById('hide').style.visibility = 'visible';
    document.getElementById('tamt').style.visibility = 'visible';
    //frm.acctNum.disabled=true;
    hideImage("hid");
    //showImage("hide");
    frm.hid.disabled=true;
  }else
  if(frm.funcCode.value =="V"){ 
    //document.getElementById('hid').style.visibility = 'hidden';
    document.getElementById('hide').style.visibility = 'visible';
    document.getElementById('tamt').style.visibility = 'visible';
    frm.acctNum.disabled=true;
    frm.tamt.disabled=true;
    hideImage("hid");
    //showImage("hide");
    frm.hid.disabled=true;
  }else
  if(frm.funcCode.value =="D") { 
    //document.getElementById('hid').style.visibility = 'hidden';
    document.getElementById('hide').style.visibility = 'visible';
    document.getElementById('tamt').style.visibility = 'hidden';
    //document.getElementById('tdv1').style.visibility = 'hidden';
    //frm.acctNum.disabled=true;
    hideImage("hid");
    //showImage("hide");
    frm.hid.disabled=true;
  }else
  if(frm.funcCode.value =="I") { 
    document.getElementById('hide').style.visibility = 'visible';
    document.getElementById('tamt').style.visibility = 'hidden';
    //document.getElementById('tdv1').style.visibility = 'hidden';
    //frm.acctNum.disabled=true;
    hideImage("hid");
    //showImage("hide");
    frm.hid.disabled=true;
  }else
  if(frm.funcCode.value =="X"){
    document.getElementById('hide').style.visibility = 'visible';
    document.getElementById('tamt').style.visibility = 'visible';
    //frm.acctNum.disabled=true;
    hideImage("hid");
    //showImage("hide");
    frm.hid.disabled=true;
  }

  return true;
}

function dispAcct(obj)
{
        var frm = document.forms[0];
        var inputNameValues ="funcCode|"+frm.funcCode.value;
        var outputNames = "acctNum|tamt";
        var scrName     = "cotconAcctList.scr";
      if(frm.funcCode.value !="V") {
        var title       = "List of Setup Account Numbers ";
      }else{
        var title       = "List of Unverified Account ";
      }
        var literalNames= "Account Number|Limit Amount";
        var hyperLnks   = "1";
        var retVal = fnExecuteScriptForList(inputNameValues,outputNames, scrName,title, literalNames, hyperLnks, true);
}

