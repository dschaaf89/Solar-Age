export default class Calculator {
  constructor(name,age){
    this.name= name;
    this.age= age;
  }
  ageOnMercury(age){
    let ageOnMercury= (Math.floor(age/.24));
    return ageOnMercury;
  }
  ageOnVenus(age){
    let ageOnVenus= (Math.floor(age/.62));
    return ageOnVenus;
  }
  ageOnMars(age){
    let ageOnMars= (Math.floor(age/1.88));
    return ageOnMars;
  }
}