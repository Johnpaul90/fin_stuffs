<%--
//Generated by Customization WB Generator
//Do not edit this file directly.
//Instead, modify the properties in the tool and regenerate.
--%>

<%@ page import="applcommon.ParseValue" %>
<%@ page import="com.infy.bbu.jsputil.*"%>
<%@ taglib uri="taglib.tld" prefix="arjsp"%>
<arjsp:init groupName="Customize" isEntryPoint="false" />

<%
	String sProfileId = ProfilesManager.getProfileInSession(session);
	String sSubGrpName = (String)ARJspCurr.getInput("subGroupName","");
%>
<script>

	var Message = '<%=ParseValue.checkLimitedString(ARJspCurr.getInputWithGroup("RESULT_MSG",""))%>';

</script>

<script language="javascript" src="../Renderer/custom/javascripts/<%=VRPKeys.getCustomFile("cust_post_evt.js",sProfileId)%>"></script>
<script language="javascript" src="../Renderer/custom/javascripts/<%=VRPKeys.getCustomFile("cust_pre_evt.js",sProfileId)%>"></script>
<script language="javascript" src="../Renderer/custom/javascripts/<%=VRPKeys.getCustomFile("cust_evt.js",sProfileId)%>"></script>


<script language="JavaScript">
	printBlock();
	printFooterBlock();
</script>

