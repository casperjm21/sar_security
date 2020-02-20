let Website = require("./javascript.js");
const $ = require("jquery");

jest.mock(Website.init());

describe("Good email", () => {
    test("can be logged in ", () => {
        // log in with a valid email account
        let isValid = Website.init("casperjm@msoe.edu", "password");

        // init returns tru if a user gets signed in
        expect(isValid).toEqual(true);
    })
});

describe("Invalid email", () => {
    test("does not get signed in with password", () => {
        // asdf is not a user account, test that the are not successfully logged in
        let isValid = Website.init("asdf", "password");

        expect(isValid).toEqual(false);
    });

    test("does not get signed in without password", () => {
        // Check that a user is not signed in with a valid account name bu no password
        let isValid = Website.init("casperjm@msoe.edu", "");

        expect(isValid).toEqual(false);
    })
});

describe("Invalid attempts", () => {
    test("Gets locked out after 5 attempts", () => {

        // Check that the elements are blocked after 5 unsuccessful attempts
        Website.init("casperjm@msoe.edu", "qwerty");
        Website.init("casperjm@msoe.edu", "asdf");
        Website.init("casperjm@msoe.edu", "12345");
        Website.init("casperjm@msoe.edu", "!@#$");
        let isValid = Website.init("casperjm@msoe.edu", "zxcv");

        expect(document.getElementById("email").disabled).toBe(true);
        expect(document.getElementById("password").disabled).toBe(true);
        expect(document.getElementById("button1").disabled).toBe(true);

        // check that the user is not logged in
        expect(isValid).toEqual(false);
    });

    test("Invalid counter is updated after each attempt", () => {
        Website.init("asdf", "");

        Website.init("casperjm@msoe.edu", "qwerty");
        // check that the attempts tag is displaying 4 attempts
        expect(document.getElementById("attempts").innerText).toEqual("You have 4 attempt(s) left");

        Website.init("casperjm@msoe.edu", "asdf");
        // check that the attempts tag is displaying 3 attempts
        expect(document.getElementById("attempts").innerText).toEqual("You have 3 attempt(s) left");

        Website.init("casperjm@msoe.edu", "12345");
        // check that the attempts tag is displaying 2 attempts
        expect(document.getElementById("attempts").innerText).toEqual("You have 2 attempt(s) left");

        Website.init("casperjm@msoe.edu", "!@#$");
        // check that the attempts tag is displaying 1 attempts
        expect(document.getElementById("attempts").innerText).toEqual("You have 1 attempt(s) left");

        let isValid = Website.init("casperjm@msoe.edu", "zxcv");
        // check that the attempts tag is displaying 0 attempts
        expect(document.getElementById("attempts").innerText).toEqual("You have 0 attempt(s) left");

        expect(isValid).toEqual(false);
    });

});




