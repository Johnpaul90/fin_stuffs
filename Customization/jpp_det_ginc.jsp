<%--
//Generated by Customization WB Generator
//Do not edit this file directly.
//Instead, modify the properties in the tool and regenerate.
--%>

<%@ page import="applcommon.ParseValue" %>
<%@ page import="com.infy.bbu.jsputil.*"%>
<%@ page import="FABCommon.SecurityInfo70"%>
<%@ taglib uri="taglib.tld" prefix="arjsp"%>
<arjsp:init groupName="Customize" isEntryPoint="false" />

<%
	String sProfileId = ProfilesManager.getProfileInSession(session);
	String sSubGrpName = (String)ARJspCurr.getInput("subGroupName","");
	String sGrpName = ARJspCurr.getCurrentGroup();
	String sPopUpExceptionWindow = (String)ARJspCurr.getInput(sGrpName+".PopUpExceptionWindow" ,"false");
	String sReferralMode = (String)ARJspCurr.getInput("refSubMode" ,"");
	ARJspCurr.setInput(sGrpName+".PopUpExceptionWindow","false");

%>
<script>

	var sPopUpExceptionWindow = '<%=sPopUpExceptionWindow%>';
	var sReferralMode = '<%=sReferralMode%>' ;

	var subGroupName = '<%=ParseValue.checkString(ARJspCurr.getInput("subGroupName",""))%>';
	var file = '<%=ParseValue.checkString(ARJspCurr.getInput(sSubGrpName+".file",""))%>';
	var funcCode = '<%=ParseValue.checkString(ARJspCurr.getInput(sSubGrpName+".funcCode",""))%>';
	var result = '<%=ParseValue.checkString(ARJspCurr.getInput(sSubGrpName+".result",""))%>';
	var msg = '<%=ParseValue.checkString(ARJspCurr.getInput(sSubGrpName+".msg",""))%>';


	var date_of_deferal = '<%=ParseValue.checkString(ARJspCurr.getInput(sSubGrpName+".date_of_deferal",""))%>';
	var branch = '<%=ParseValue.checkString(ARJspCurr.getInput(sSubGrpName+".branch",""))%>';
	var group = '<%=ParseValue.checkString(ARJspCurr.getInput(sSubGrpName+".group",""))%>';
	var cifId = '<%=ParseValue.checkString(ARJspCurr.getInput(sSubGrpName+".cifId",""))%>';
	var cifIdx = '<%=ParseValue.checkString(ARJspCurr.getInput(sSubGrpName+".cifIdx",""))%>';
	var cifIdy = '<%=ParseValue.checkString(ARJspCurr.getInput(sSubGrpName+".cifIdy",""))%>';
	var cifIdz = '<%=ParseValue.checkString(ARJspCurr.getInput(sSubGrpName+".cifIdz",""))%>';
	var customer = '<%=ParseValue.checkString(ARJspCurr.getInput(sSubGrpName+".customer",""))%>';
	var facility_type = '<%=ParseValue.checkString(ARJspCurr.getInput(sSubGrpName+".facility_type",""))%>';
	var amount = '<%=ParseValue.checkString(ARJspCurr.getInput(sSubGrpName+".amount",""))%>';
	var date_of_form3800B = '<%=ParseValue.checkString(ARJspCurr.getInput(sSubGrpName+".date_of_form3800B",""))%>';
	var conditions_defered = '<%=ParseValue.checkString(ARJspCurr.getInput(sSubGrpName+".conditions_defered",""))%>';
	var period = '<%=ParseValue.checkString(ARJspCurr.getInput(sSubGrpName+".period",""))%>';
	var expiryDate_deferal  ='<%=ParseValue.checkString(ARJspCurr.getInput(sSubGrpName+".expiryDate_deferal",""))%>';
	var soucrce_of_deferal = '<%=ParseValue.checkString(ARJspCurr.getInput(sSubGrpName+".soucrce_of_deferal",""))%>';
	var exception = '<%=ParseValue.checkString(ARJspCurr.getInput(sSubGrpName+".exception",""))%>';
	var remarks_history = '<%=ParseValue.checkString(ARJspCurr.getInput(sSubGrpName+".remarks_history",""))%>';
	var bm = '<%=ParseValue.checkString(ARJspCurr.getInput(sSubGrpName+".bm",""))%>';
	var rm = '<%=ParseValue.checkString(ARJspCurr.getInput(sSubGrpName+".rm",""))%>';

</script>


<script language="javascript" src="../Renderer/javascripts/lists/<%=VRPKeys.getFile("showCustId.js",sProfileId)%>"></script>
<script language="javascript" src="../Renderer/javascripts/lists/<%=VRPKeys.getFile("showCurrency.js",sProfileId)%>"></script>
<script language="javascript" src="../Renderer/javascripts/lists/<%=VRPKeys.getFile("showAcctLblCodes.js",sProfileId)%>"></script>
<script language="javascript" src="../Renderer/javascripts/lists/<%=VRPKeys.getFile("showAgentList.js",sProfileId)%>"></script>
<script language="javascript" src="../Renderer/javascripts/lists/<%=VRPKeys.getFile("showExpOrderNumber.js",sProfileId)%>"></script>
<script language="javascript" src="../Renderer/javascripts/lists/<%=VRPKeys.getFile("showInwDCList.js",sProfileId)%>"></script>
<script language="javascript" src="../Renderer/javascripts/lists/<%=VRPKeys.getFile("showRefCode.js",sProfileId)%>"></script>
<script language="javascript" src="../Renderer/javascripts/lists/<%=VRPKeys.getFile("showSolId.js",sProfileId)%>"></script>
<script language="javascript" src="../Renderer/javascripts/lists/<%=VRPKeys.getFile("showMRTFileList.js",sProfileId)%>"></script>
<script language="javascript" src="../Renderer/javascripts/lists/<%=VRPKeys.getFile("showSearcher.js",sProfileId)%>"></script>
<script language="javascript" src="../Renderer/javascripts/lists/<%=VRPKeys.getFile("showSchemeType.js",sProfileId)%>"></script>
<script language="javascript" src="../Renderer/javascripts/<%=VRPKeys.getFile("explode_functions.js",sProfileId)%>" > </script>
<script language="javascript" src="../Renderer/javascripts/<%=VRPKeys.getFile("expldhndl.js",sProfileId)%>" > </script>
<script language="javascript" src="../Renderer/javascripts/<%=VRPKeys.getFile("common_functions.js",sProfileId)%>" > </script>

<script language="javascript" src="../Renderer/custom/javascripts/<%=VRPKeys.getFile("cust_evt.js",sProfileId)%>" > </script>
<script language="javascript" src="../Renderer/custom/javascripts/<%=VRPKeys.getFile("cust_pre_evt.js",sProfileId)%>" > </script>
<script language="javascript" src="../Renderer/custom/javascripts/<%=VRPKeys.getFile("cust_post_evt.js",sProfileId)%>" > </script>
<script language="javascript" src="../Renderer/custom/javascripts/<%=VRPKeys.getFile("loc_evt.js",sProfileId)%>" > </script>
<script language="javascript" src="../Renderer/javascripts/<%=VRPKeys.getFile("core_banking.js",sProfileId)%>" > </script>
<script language="javascript" src="../Renderer/javascripts/<%=VRPKeys.getFile("resource_functions.js",sProfileId)%>" > </script>
<script language="javascript" src="../Renderer/javascripts/<%=VRPKeys.getFile("cust_functions.js",sProfileId)%>" > </script>
<script language="javascript" src="../Renderer/javascripts/<%=VRPKeys.getFile("exchanger.js",sProfileId)%>" > </script>
<script language="javascript" src="../Renderer/javascripts/<%=VRPKeys.getFile("menuLayer.js",sProfileId)%>" > </script>


<script language="JavaScript">
	printBlock();
	printFooterBlock();
</script>

