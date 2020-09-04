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
  ageOnJupiter(age){
    let ageOnJupiter= (Math.floor(age/11.86));
    return ageOnJupiter;
  }
  lifeExpectancyMercury(age){
    let yearsLeft= 72-age
    let lifeExpectancyMercury= (Math.floor(yearsLeft/.24));
    return lifeExpectancyMercury;
  }
  lifeExpectancyVenus(age){
    let yearsLeft= 72-age
    let lifeExpectancyVenus= (Math.floor(yearsLeft/.62));
    return lifeExpectancyVenus;
  }
}

