'use strict';

console.log("=== Exercise 1 ===");

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.numberOfpages = pages;
        this.sold = 0;
    }

    get pages() {
        return this.numberOfPages;
    }

    set copiesSold(copies) {
        if (copies < 0) {
          throw new Error("Value can't be negative");
        }

        this.sold = copies;
    }
}

const book = new Book('Who Moved My Cheese?', 'Spencer Johnson', 96);
console.log(book.title); //Who Moved My Cheese
console.log(book.pages); //96
try {
    book.pages = 96;
} catch(ex) {
    console.log(ex.message);
    //Cannot set property pages of #<Book> which has only a getter
}
console.log(book.copiesSold); //0
book.copiesSold = 1;
console.log(book.copiesSold); //1
try {
    book.copiesSold = -2;
} catch(ex) {
    console.log(ex.message);//Value can't be negative
}
console.log(book.copiesSold); //1

console.log("=== Exercise 2 ===");

class Tax {
  static get stateRate() {
      return 0.08;
  }

  static forAmount(amount) {
      return amount * Tax.stateRate;
  }
}

console.log(Tax.stateRate); //0.08
console.log(Tax.forAmount(100)); // 8
const forAmount = Tax.forAmount;
this.stateRate = 0.01;
console.log(forAmount.call(this, 100)); //8

console.log("=== Exercise 3 ===");

const done = "done";
const wip = "work-in-progress";

class Todo {
    constructor() {
        this["learn JavaScript"] = done;
        this["write elegant code"] = wip;
        this["automate tests"] = wip;
    }

    get completedCount() {
        return Object.keys(this)
            .filter(key => this[key] === done)
            .length;
    }
}

const todo = new Todo();
console.log(todo['learn JavaScript']); //'done'
console.log(todo['write elegant code']);//'work-in-progress'
console.log(todo['automate tests']);//'work-in-progress'
console.log(todo.completedCount); //1

console.log("=== Exercise 4 ===");

function createTodo() {
    return new Map([
        ["learn JavaScript", done], 
        ["write elegant code", wip],
        ["automate tests", wip]
    ]);
}

function completedCount(todo) {
    console.log(todo.values());
    return [...todo.values()].filter(value => value === done).length;
}

const todom = createTodo(); //Returns a Map
console.log(todom.get('learn JavaScript')); //'done'
console.log(todom.get('write elegant code'));//'work-in-progress'
console.log(todom.get('automate tests'));//'work-in-progress'
console.log(completedCount(todom)); //1

console.log("=== Exercise 5 ===");

function create(values) {
    return new Set(values.map(value => value.toUpperCase()));
}

function toLowerCase(values) {
    return new Set(values.keys().map(key => key.toLowerCase()));
}

const sports = create(['Soccer', 'Football', 'Cricket', 'Tennis', 'soccer']);
console.log(sports.has('FOOTBALL')); //true
console.log(sports.has('Football')); //false
console.log(sports.size); //4
const inLowerCase = toLowerCase(sports);
console.log(inLowerCase.has('football')); //true
console.log(inLowerCase.size); //4
