class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
}

class Manager extends Employee {
  constructor(name, id, email, salary) {
    super(name, id, email);
    this.salary = salary;
  }
}

const employee1 = new Employee("Jane Doe", 1, "janedoe@gmail.com");
console.log(employee1);
const employee2 = new Manager("Joe Doe", 2, "joe@gmail.com", 100000);
console.log(employee2);
