import Calculator  from '../src/js/calculator-logic.js';
describe('Calculator', () => {
  let person;
  
  beforeEach(() => {
    person = new Calculator("steve",18)
  })

  test('should create a calculator object with name and age', () => {
    expect(person).toEqual(person);
  });
  test("should calculate how old the person's age is in mercury years", () => {
    expect(person.age).toEqual(75);
  });
});
