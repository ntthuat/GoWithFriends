var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeterWithClass(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user3 = new Student("Jane", "M", "User3");
document.body.innerHTML = greeterWithClass(user3);
