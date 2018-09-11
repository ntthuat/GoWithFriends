interface Person {
    firstName: string;
    lastName: string;
}

function greeterWithInterface(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user2 = {firstName: "Thuat", lastName: "Nguyen"};

document.body.innerHTML = greeterWithInterface(user2);