export default class Calculator {
  constructor(name,age){
    this.name= name;
    this.age= age;
  }
  ageOnMercury(age){
    let ageOnMercury= (Math.floor(age/.24));
    return ageOnMercury;
  }
}