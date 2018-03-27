<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login_Page.aspx.cs" Inherits="Login_Page.Login_Page" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">

<head runat="server">

    <title></title>

    <script src="loginpage.js"></script>

</head>

<body>

    <form id="form1" runat="server">

    <div>

     <fieldset style="font-size: medium; color: #000000;">

        <legend style="background-color:#CCCCFF; font-size: larger;font-weight:bold">Login Page in TypeScript</legend>

        <br />

        <b>UserName</b>

        <input id="txtusername" type="text" /><br />

        <br />

        <b>Password</b>&nbsp;&nbsp;

           <input id="txtpasswrd" type="password"  /><br />

        <br />

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <input id="login" type="button" value="Login" />&nbsp;&nbsp;&nbsp;&nbsp;

            <input id="cancel" type="button" value="Cancel" />

    </fieldset>

    </div>

    </form>

</body>

</html>
