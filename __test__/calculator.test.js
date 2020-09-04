import Calculator from '../src/js/calculator-logic.js';
describe('Calculator', () => {
  let person;
  let person2;

  beforeEach(() => {
    person = new Calculator("steve", 18);
    person2 = new Calculator("steve", 77);
  })

  test('should create a calculator object with name and age', () => {
    expect(person).toEqual(person);
  });
  test("should calculate how old the person's age is in mercury years", () => {
    expect(person.ageOnMercury(person.age)).toEqual(75);
  });
  test("should calculate how old the person's age is in venus years", () => {
    expect(person.ageOnVenus(person.age)).toEqual(29);
  });
  test("should calculate how old the person's age is in Mars years", () => {
    expect(person.ageOnMars(person.age)).toEqual(9);
  });
  test("should calculate how old the person's age is in Jupiter years", () => {
    expect(person.ageOnJupiter(person.age)).toEqual(1);
  });
  test("should calculate how many more years a person who is 18 has left on mercury", () => {
    expect(person.lifeExpectancyMercury(person.age)).toEqual(225);
  });
  test("should calculate how many more years a person who is 18 has left on Venus", () => {
    expect(person.lifeExpectancyVenus(person.age)).toEqual(87);
  });
  test("should calculate how many more years a person who is 18 has left on Mars", () => {
    expect(person.lifeExpectancyMars(person.age)).toEqual(28);
  });
  test("should calculate how many more years a person who is 18 has left on Jupiter", () => {
    expect(person.lifeExpectancyJupiter(person.age)).toEqual(4);
  });
  test("should calculate how many years beyond life span a person is on Mercury", () => {
    expect(person2.lifeExpectancyMercury(person2.age)).toEqual(20);
  });
  test("should calculate how many years beyond life span a person is on Venus", () => {
    expect(person2.lifeExpectancyVenus(person2.age)).toEqual(8);
  });
  test("should calculate how many years beyond life span a person is on mars", () => {
    expect(person2.lifeExpectancyMars(person2.age)).toEqual(2);
  });
  test("should calculate how many years beyond life span a person is on Jupiter", () => {
    expect(person2.lifeExpectancyJupiter(person2.age)).toEqual(.4215851602023609);
  });
});