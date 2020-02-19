class Website {

    constructor() {

        let db = [
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
        ];

        let inputEmail;
        let inputPassword;
        let attempt = 5;
        let getUser = function (username) {

            let retUser;

            // Go through the db and look for a username match, return the user object if found and undefined otherwise
            for (let i = 0; i < db.length; i++) {
                if (db[i].email === username) {
                    retUser = db[i]
                }
            }
            return retUser;
        };

        let verifyUsernamePassword = function () {
            let user = getUser(inputEmail);

            if (typeof user !== "undefined") {
                let passwordMatch = false;
                    if (user.email === inputEmail && user.password === inputPassword) {
                        passwordMatch = true;
                        attempt = 5;
                    }
                return passwordMatch;
            } else {
                alert("User not found!");
            }
        };

        function sendEmail() {
            Email.send({
                Host: "smtp.mailtrap.io",
                Username: "bade588938ef43",
                Password: "b4490b667a6d9c",
                To: 'softarch20@gmail.com',
                From: "krenzva@msoe.edu",
                Subject: "Test email",
                Body: "We noticed a login attempt to your account that seemed suspicious. If you did not make this unusual attempt, please reset your password or disregard this email."
            })
        }

        this.init = function () {
            inputEmail = document.getElementById("email").value;
            inputPassword = document.getElementById("password").value;
            let passwordMatch = verifyUsernamePassword();
            if (passwordMatch) {
                document.location.href = "LoggedIn.html";
            } else if (passwordMatch === false) {
                attempt--;
                alert("You have " + attempt + " attempt(s) left");
                if (attempt === 0) {
                    document.getElementById("email").disabled = true;
                    document.getElementById("password").disabled = true;
                    document.getElementById("button1").disabled = true;
                    sendEmail();
                }
            }
        }
    }
}
