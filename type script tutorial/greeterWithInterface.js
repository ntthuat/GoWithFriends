function greeterWithInterface(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user2 = { firstName: "Thuat", lastName: "Nguyen" };
document.body.innerHTML = greeterWithInterface(user2);
