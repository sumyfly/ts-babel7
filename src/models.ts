export interface Person {
  name: string;
  age: number;
}

export const speak = (person: Person) => {
  console.warn(`${person.name} sepak: my age is ${person.age}.`)
}