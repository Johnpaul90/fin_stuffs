<!--	This is getting executing on click of submit and validate button -->
function fnValidateData() {
		if (!fnCheckMandatoryFields())
		{
			return false;
		}
		return true;
}

/*
<!-- This function is added for formatting a particular MRH Row -->
function formatRowValue(Obj, colNumber) {
      return Obj;
       }
	   
	   
	   
*/
	   
	   
	   
	   
	   
function fnUpload(p1)
{
         //alert("hi");
        var ObjForm = document.forms[0];
        if(ObjForm != null)
        {
                ObjForm.encoding = "multipart/form-data";
                var qrystr ="";
                for (var i = 0;i < ObjForm.elements.length; i++)
                {
                        var locVal = ObjForm.elements[i].value;
                        if(ObjForm.elements[i].name == "actionCode")
                        {
                                ObjForm.elements[i].value = "upload";
                        }

                        if (locVal != null && locVal.length > 0 && locVal != "" && locVal != " ")
                        {
                                if(ObjForm.elements[i].name == "undefined" || (ObjForm.elements[i].value != null && ObjForm.elements[i].value == "undefined" ))
                                        continue;
                                if(qrystr.length == 0)
                                {
                                        qrystr = ObjForm.elements[i].name + "=" + ObjForm.elements[i].value
                                }
                                else
                                {
                                        qrystr = qrystr + "&" + ObjForm.elements[i].name +"=" + ObjForm.elements[i].value
                                }
                 	}
                }
			
             if(qrystr.indexOf("actionCode")==-1)
             {
				qrystr = qrystr + "&actionCode=upload"
               }
                if(qrystr.indexOf("?")==-1 || qrystr.indexOf("?")!=0)
   {
                        qrystr = "?" + qrystr
                }
                //alert(qrystr);
                ObjForm.action = ObjForm.action + qrystr
                ObjForm.submit();
       }
}

function fnhide(p1)
{
    var ObjForm = document.forms[0];

    document.getElementById('add1').style.visibility = 'hidden';
	document.getElementById('add2').style.visibility = 'hidden';
	document.getElementById('add3').style.visibility = 'hidden';
	document.getElementById('add4').style.visibility = 'hidden';
	document.getElementById('add5').style.visibility = 'hidden';
	document.getElementById('add6').style.visibility = 'hidden';
	document.getElementById('add7').style.visibility = 'hidden';
	document.getElementById('add8').style.visibility = 'hidden';
	
	 
    document.getElementById('mf').style.visibility = 'hidden';
    document.getElementById('file').style.visibility = 'hidden';
    document.getElementById('td1').style.visibility = 'hidden';
    //ObjForm.Upload.disabled=true;
    document.getElementById('Upload').style.visibility = 'hidden';
    document.getElementById('Submit').style.visibility = 'hidden';
}

function fnshow(p1)
{

   var ObjForm = document.forms[0];
   //alert(ObjForm.funcCode.value);
 
    if (ObjForm.funcCode.value == "U") { 
      //alert("test");

        document.getElementById('Upload').style.visibility = 'visible';
        document.getElementById('Submit').style.visibility = 'hidden';
    	document.getElementById('td1').style.visibility = 'hidden';
    	document.getElementById('date_of_deferal').style.visibility = 'hidden';

    	document.getElementById('mf').style.visibility = 'visible';
    	document.getElementById('file').style.visibility = 'visible';
		
		document.getElementById('file').style.visibility = 'visible';
		
		document.getElementById('add1').style.visibility = 'hidden';
		document.getElementById('add2').style.visibility = 'hidden';
		document.getElementById('add3').style.visibility = 'hidden';
		document.getElementById('add4').style.visibility = 'hidden';
		document.getElementById('add5').style.visibility = 'hidden';
		document.getElementById('add6').style.visibility = 'hidden';
		document.getElementById('add7').style.visibility = 'hidden';
		document.getElementById('add8').style.visibility = 'hidden';
		 

    }
	
	if (ObjForm.funcCode.value == "A") { 

    	document.getElementById('td1').style.visibility = 'visible';
    	document.getElementById('date_of_deferal').style.visibility = 'visible';

        document.getElementById('Upload').style.visibility = 'hidden';
        document.getElementById('Submit').style.visibility = 'visible';
    	document.getElementById('mf').style.visibility = 'hidden';
    	document.getElementById('file').style.visibility = 'hidden';
		
		document.getElementById('add1').style.visibility = 'visible';
		document.getElementById('add2').style.visibility = 'visible';
		document.getElementById('add3').style.visibility = 'visible';
		document.getElementById('add4').style.visibility = 'visible';
		document.getElementById('add5').style.visibility = 'visible';
		document.getElementById('add6').style.visibility = 'visible';
		document.getElementById('add7').style.visibility = 'visible';
		document.getElementById('add8').style.visibility = 'visible';
	 
    }
     
    
}

