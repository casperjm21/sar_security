function static_init() {
   return new Website();
}

class Website {

    static static_init() {
        let web = new Website();
        web.init();
    };

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

            // Check if the user was found
            if (typeof user !== "undefined") {
                // Clear the error message
                document.getElementById("invalid").innerText = "";

                // Check to see if the password matches
                let passwordMatch = user.email === inputEmail && user.password === inputPassword;

                // If it does match, reset the counter
                if (passwordMatch) {
                    attempt = 5;
                }

                return passwordMatch;

                // account name not found
            } else {
                document.getElementById("invalid").innerText = "User " + inputEmail + " not found. ";
                return false
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

        this.init = function (email, password) {
            inputEmail = email;
            inputPassword = password;
            let passwordMatch = verifyUsernamePassword();
            if (passwordMatch) {
                document.location.href = "LoggedIn.html";
                return true;
            } else if (passwordMatch === false) {
                attempt--;
                document.getElementById("attempts").innerText = "You have " + attempt + " attempt(s) left";
                if (attempt === 0) {
                    document.getElementById("email").disabled = true;
                    document.getElementById("password").disabled = true;
                    document.getElementById("button1").disabled = true;
                    sendEmail();
                    return false;
                }
            }
        }
    }
}

module.exports = new Website();

