let Website = require("./javascript.js");
const $ = require("jquery");

jest.mock(Website.init());

describe("Good email", () => {
    test("can be logged in ", () => {
        // document.innerHTML = "<p id='invalid'></p>";
        // $('.invalid').text("");

        let isValid = Website.init("casperjm@msoe.edu", "password");

        expect(isValid).toEqual(true);
    })
});

describe("Invalid email", () => {
    test("does not get signed in with password", () => {
        let isValid = Website.init("asdf", "password");

        expect(isValid).toEqual(false);
    });

    test("does not get signed in without password", () => {
        let isValid = Website.init("asdf", "");

        expect(isValid).toEqual(false);
    })
});

describe("Invalid attempts", () => {
    test("Gets locked out after 5 attempts", () => {

        Website.init("casperjm@msoe.edu", "qwerty");
        Website.init("casperjm@msoe.edu", "asdf");
        Website.init("casperjm@msoe.edu", "12345");
        Website.init("casperjm@msoe.edu", "!@#$");
        isValid = Website.init("casperjm@msoe.edu", "zxcv");
        // todo check html that elements are disabled

        expect(isValid).toEqual(false);
    });

    test("Invalid counter is updated after each attempt", () => {
        let isValid = Website.init("asdf", "");

        Website.init("casperjm@msoe.edu", "qwerty");
        // check that the attempts tag is displaying 4 attempts

        Website.init("casperjm@msoe.edu", "asdf");
        // check that the attempts tag is displaying 3 attempts

        Website.init("casperjm@msoe.edu", "12345");
        // check that the attempts tag is displaying 2 attempts

        Website.init("casperjm@msoe.edu", "!@#$");
        // check that the attempts tag is displaying 1 attempts

        isValid = Website.init("casperjm@msoe.edu", "zxcv");
        // check that the attempts tag is displaying 0 attempts

        expect(isValid).toEqual(false);
    });

    test("Invalid counter is updated after each attempt", () => {
        Website.init("casperjm@msoe.edu", "qwerty");
        Website.init("casperjm@msoe.edu", "asdf");
        Website.init("casperjm@msoe.edu", "12345");
        Website.init("casperjm@msoe.edu", "!@#$");
        Website.init("casperjm@msoe.edu", "zxcv");

        //using a mock, check that the sendEmail method was called
    });
});




