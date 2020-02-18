class Website{
    constructor() {
        let inputEmail;
        let inputPassword;
        let attempt = 5;
        let getDatabase = function () {
            //just array of user objects with a string username and password
            let user = [
                {
                    email: "singhanga@msoe.edu",
                    password: "password",
                    isValid: true
                },
                {
                    email: "angadriar@gmail.com",
                    password: "password",
                    isValid: true
                },
                {
                    email: "krenzva@msoe.edu",
                    password: "password",
                    isValid: true
                },
                {
                    email: "casperjm@msoe.edu",
                    password: "password",
                    isValid: true
                },
                {
                    email: "kaura@msoe.edu",
                    password: "password",
                    isValid: false
                }
                ]
            return user;
        }

        let verifyUsername = function () {
            let user = getDatabase();
            for(let i=0; i < user.length; i++){
                if(user[i].email == inputEmail){
                    return true;
                }
            }
        }

        let verifyPassword = function () {
            let user = getDatabase();
            for(let i=0; i < user.length; i++){
                if(user[i].password == inputPassword){
                    return true;
                }
            }
        }

        let verifyUsernamePassword = function () {
            let user = getDatabase();
            let passwordMatch = false;
            for(let i = 0; i < user.length; i++) {
                if (user[i].email == inputEmail && user[i].password == inputPassword) {
                    passwordMatch = true;
                    attempt = 5;
                }

            }
            return passwordMatch;
        };

        function sendEmail(){
            Email.send({
                Host: "smtp.mailtrap.io",
                Username: inputEmail,
                Password: inputPassword,
                To: 'softarch20@gmail.com',
                From: "krenzva@msoe.edu",
                Subject: "Test email",
                Body: "You are being notified because someone tried to access your account"
            }).then(
                message => alert(message)
            );
        }

        this.init = function () {
            inputEmail = document.getElementById("email").value;
            inputPassword = document.getElementById("password").value;
            let passwordMatch = verifyUsernamePassword();
            if (passwordMatch) {
                document.location.href = "LoggedIn.html"; true;
            } else if (passwordMatch === false){
                attempt--;
                alert("You have " + attempt + " attempt(s) left");
                if(attempt === 0){
                    document.getElementById("email").disabled = true;
                    document.getElementById("password").disabled = true;
                    document.getElementById("button1").disabled = true;
                    sendEmail();
                }
            }
        }
    }
}
