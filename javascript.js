class Website{
    constructor() {
        let inputEmail;
        let inputPassword;
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

        this.init = function () {
            inputEmail = document.getElementById("email").value;
            inputPassword = document.getElementById("password").value;
            verifyPassword();
        }
    }
}