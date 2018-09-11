class Student {
    fullName: string;

    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

function greeterWithClass(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user3 = new Student("Jane", "M", "User3");

document.body.innerHTML = greeterWithClass(user3);

