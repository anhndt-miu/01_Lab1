// "use strict"
let str = "Greetings, ";
let user = {
    firstName: "John",
    lastname: "Smith",
    display: function () {
        console.log(str, this.firstName);
        show("hi");
    }
};

user.display();

function show(msg) {
    // For use strict
    // console.log(msg + " " + this?.lastname);
    console.log(msg + " " + this.lastname);
}

show.call(user, "hello");