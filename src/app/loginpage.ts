class Login_Page

{

    Login()

    {

        var a = 0;

        var txtuname = (<HTMLTextAreaElement>(document.getElementById('txtusername'))).value;

        var txtpwd = (<HTMLTextAreaElement>(document.getElementById('txtpasswrd'))).value;

         var ActiveXObject: (type: string) => void;


        if (txtuname.length != 0 && txtpwd.length != 0) {

            var connection = new ActiveXObject("ADODB.Connection");

            var connectionstring = "Data Source=MCNDESKTOP20;Initial Catalog=EmpDetail;uid=sa;pwd=******;Provider=SQLOLEDB";

            connection.Open(connectionstring);

            var rs = new ActiveXObject("ADODB.Recordset");

            rs.Open("select * from LoginDetail where Username='" + txtuname + "' and Passwrd='" + txtpwd + "'", connection);

            while (!rs.eof) {

                alert("Welcome to " + txtuname + "\n you are successfully login");

                a = 1;

                rs.MoveNext();

            }

            if (a == 0) {

                alert("Invalid UserName and Password");

            }

 

            rs.close();

            connection.close();

        }

        else {

            alert("Please Enter Values in Textbox ");

        }

    }

    Cancel() {

        document.getElementById('txtusername').innerText = "";

        document.getElementById('txtpasswrd').innerText = "";

    }

}

window.onload = () =>

{

    var bttnLogin = document.getElementById('login');

    var bttnCancel = document.getElementById('cancel');

    var obj = new Login_Page();

    bttnLogin.onclick = function ()

    {

        obj.Login();

    }

    bttnCancel.onclick = function ()

    {

        obj.Cancel();

    }  

};
