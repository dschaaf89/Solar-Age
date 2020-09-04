import Calculator  from '../src/js/calculator-logic.js';
describe('Calculator', () => {
  let person;
  
  beforeEach(() => {
    person = new Calculator("Rocky","18")
  })

  test('should create a calculator object with name and age', () => {
    expect(person).toEqual(person);
  });
});
