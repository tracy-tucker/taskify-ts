import React from "react";

// assigning basic string, number and boolean
let name: string;
let age: number;
let isStudent: boolean;
// assigning an array
let hobbies: string[];
// assign a tuple --> a fixed amount of values with types within an array
let role: [number, string];
// What if type is unknown?
// any | void | unknown | never
// Using any is not recommended!
// void --> returns 'undefined'
let personName: void;
// unknown --> don't know what type it will be
let personName2: unknown;
// never --> doesn't return anything at all
let personName3: never;

// 2 ways to define an object
let person1: object; // NOT the best way assign types to an object
// The best way to assign types to an object
// 1. assign the types
type Person = {
  name: string;
  // ? --> makes the age property optional
  age?: number;
};
// 2. use the types
let person: Person = {
  name: "Tracy",
  age: 39,
};

// How to create an array of objects
// This uses the Person object & assigns it to an array type
let lotsOfPeople: Person[];

// How to create a Union --> more than one type
let unionVar: number | string;

// How to define a function
// Basic way:
let printFunc: Function;
// Function with parameter:
let printFunc2: (name: string) => string;
// Function that doesn't return anything
let printFunc3: (name: string) => void;

function printName(name: string): void {
  console.log(name);
}

// Type vs Interface
// Type and interface work the same way

// Type
type X = {
  a: string;
  b: number;
};
// Adding the & tells Y to contain all of X's properties as well
type Y = X & {
  c: string;
  d: number;
};
// So y MUST be written with all 4 properties:
let y: Y = {
  a: "string",
  b: 39,
  c: "string 2",
  d: 51,
};

// Interface
interface Guy {
  profession: string;
}
// Adding additional properties:
// extending to a type
interface Gal extends Person {
  profession: string;
}

const Notes = () => {
  return <div>Notes</div>;
};

export default Notes;
