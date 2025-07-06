// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

const data = [
  { id: 1, values: [1, 2, 3] },
  { id: 2, values: [4, 5, 6] },
  { id: 3, values: [7, 8, 9] },
];
const result = data.flatMap(item => item.values);
console.log(result);

const getData = [
  { id: 1, values: [1, 2, 3] },
  { id: 2, values: [4, 5, 6] },
  { id: 3, values: [7, 8, 9] },
];

function collectValues(arr) {
  return arr.flatMap(item => item.values);
}
const getResult = collectValues(data);
console.log(result);

//  Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];
const people = [
  { name: 'John', age: 27 },
  { name: 'Jane', age: 31 },
  { name: 'Bob', age: 19 },
];

const isUnder20 = people.some(person => person.age < 20);

console.log(isUnder20);

const getPeople = [
  { name: 'John', age: 27 },
  { name: 'Jane', age: 31 },
  { name: 'Bob', age: 19 },
];

function checkIfAnyUnder20(arr) {
  return arr.some(person => person.age < 20);
}

const hasUnder20 = checkIfAnyUnder20(people);

console.log(hasUnder20);

// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

// const numbers = [2, 4, 6, 8, 10];
// const isEven = num => num % 2 === 0;
// const allEven = numbers.every(isEven);
// console.log(allEven);

// const getNumbers = [2, 4, 6, 8, 10];
// function checkAllEven(arr) {
//   return arr.every(num => num % 2 === 0);
// }
// const getAllEven = checkAllEven(numbers);

// console.log(getAllEven);

// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];

const numbers = [2, 1, 6, 8, 9, 10, 12];
const isOdd = num => num % 2 !== 0;
const firstOdd = numbers.find(isOdd);
console.log(firstOdd);

const getNumbers = [2, 1, 6, 8, 9, 10, 12];

function findFirstOdd(arr) {
  return arr.find(num => num % 2 !== 0);
}

const getFirstOdd = findFirstOdd(numbers);

console.log(getFirstOdd);

// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];
const numbersArray = [4, 2, 5, 1, 3];
const sortedArray = numbersArray.toSorted((a, b) => a - b);
console.log(sortedArray);

// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];

const stringArray = ['banana', 'orange', 'apple', 'pear'];
const sortedStrings = stringArray.toSorted((a, b) => a.localeCompare(b));
console.log(sortedStrings);

//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

//const users = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];
const users = [
  { name: 'John', age: 27 },
  { name: 'Jane', age: 31 },
  { name: 'Bob', age: 19 },
];
const sortedUsers = users.toSorted((a, b) => a.age - b.age);
console.log(sortedUsers);

// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

//const user = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ]

const user = [
  { name: 'John', age: 27 },
  { name: 'Jane', age: 31 },
  { name: 'Bob', age: 19 },
];

const getFilteredUsers = user.filter(person => person.age > 20);
console.log(getFilteredUsers);

function filterUsersByAge(users) {
  return users.filter(user => user.age > 20);
}

const getUser = [
  { name: 'John', age: 27 },
  { name: 'Jane', age: 31 },
  { name: 'Bob', age: 19 },
];
const filteredUsers = filterUsersByAge(getUser);
console.log(filteredUsers);

// 10. Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];
const giveNumbers = [1, 2, 3, 4, 5];

const sum = giveNumbers.reduce(
  (accumulator, current) => accumulator + current,
  0
);
console.log(sum);

// function sumArray(arr) {
//   return arr.reduce((accumulator, current) => accumulator + current, 0);
// }
// const giveNumbers = [1, 2, 3, 4, 5];
// const sum = sumArray(giveNumbers);
// console.log(sum);

// 11. Розроби клас Calculator, який дозволяє виконувати арифметичні
//  операції над числом за допомогою методів класу, підтримуючи
// ланцюжковий виклик (method chaining).
//
// Вимоги до класу Calculator
// - Метод number(value)
// Встановлює початкове значення для наступних обчислень.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод getResult, Повертає поточний результат усіх операцій.
// Не змінює значення, просто повертає його.

// - метод add - Додає value до поточного значення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод substruct - Віднімає value від поточного значення. Повертає this.

// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод multiply -Множить поточне значення на value. Повертає this.

// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка

// Приклад використання:
// const calc = new Calculator();

// const result = calc
//   .number(10)   // Встановлюємо початкове значення 10
//   .add(5)       // Додаємо 5 (10 + 5 = 15)
//   .subtract(3)  // Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4)  // Множимо на 4 (12 * 4 = 48)
//   .divide(2)    // Ділимо на 2 (48 / 2 = 24)
//   .getResult(); // Отримуємо результат: 24

//   console.log(result); // 24
class Calculator {
  constructor() {
    this.value = 0;
  }
  number(value) {
    this.value = value;
    return this;
  }
  getResult() {
    return this.value;
  }
  add(value) {
    this.value += value;
    return this;
  }
  substract(value) {
    this.value -= value;
    return this;
  }
  divide(value) {
    if (value === 0) {
      console.error(`not divide to zero!`);
    } else {
      this.value /= value;
    }
    return this;
  }
  multiply(value) {
    this.value *= value;
    return this;
  }
}
const calc = new Calculator();
console.log(
  calc.number(35).divide(5).multiply(100).divide(0).add(12).getResult()
);

// 12.Напиши клас Client який створює об'єкт з властивостями login email.
// Оголоси приватні властивості #login #email, доступ до яких зроби
// через геттер та сеттер login email
class Client {
  #login;
  #email;

  constructor(login, email) {
    this.#login = login;
    this.#email = email;
  }

  get login() {
    return this.#login;
  }

  set login(newLogin) {
    this.#login = newLogin;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }
}
const client = new Client('fhfhfhf', 'cagfgfgf@gmail.com');
console.log(client.login);
client.email = 'skkfkf@gmail.com';
console.log(client.email);

//  13.Наслідування у класах!
// Cтворіть клас `Person`, який містить наступні властивості:
//  - `name` - ім'я людини;
//  - `age`- вік людини;
//  - `gender` - стать людини;
//  - `email`- електронна пошта людини.

// Крім того, клас `Person` має мати метод `getDetails()`,
// який повертає об'єкт з ім'ям, віком, статтю
//та електронною поштою людини.

//
// Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
//  - salary - зарплата співробітника;
//  - department - відділ, в якому працює співробітник.
// Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.

class Person {
  constructor(name, age, gender, email) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.email = email;
  }

  getDetails() {
    return {
      name: this.name,
      age: this.age,
      gender: this.gender,
      email: this.email,
    };
  }
}

class Employee extends Person {
  constructor(name, age, gender, email, salary, department) {
    super(name, age, gender, email);
    this.salary = salary;
    this.department = department;
  }

  getEmployeeDetails() {
    return {
      salary: this.salary,
      department: this.department,
    };
  }
}

const employee1 = new Employee(
  'Іван',
  30,
  'чоловік',
  'ivan@example.com',
  50000,
  'IT'
);

console.log(employee1.getDetails());
console.log(employee1.getEmployeeDetails());
