export default class Calculator {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  ageOnMercury() {
    let ageOnMercury = (Math.floor(this.age / .24));
    return ageOnMercury;
  }
  ageOnVenus() {
    let ageOnVenus = (Math.floor(this.age / .62));
    return ageOnVenus;
  }
  ageOnMars() {
    let ageOnMars = (Math.floor(this.age / 1.88));
    return ageOnMars;
  }
  ageOnJupiter() {
    let ageOnJupiter = (Math.floor(this.age / 11.86));
    return ageOnJupiter;
  }
  lifeExpectancyMercury() {
    if (this.age < 72) {
      let yearsLeft = 72 - this.age;
      let lifeExpectancyMercury = (Math.floor(yearsLeft / .24));
      return lifeExpectancyMercury;

    } else {
      let ageOver = this.age - 72;
      let lifeExpectancyMercury = (Math.floor(ageOver / .24));
      return lifeExpectancyMercury;
    }

  }

  lifeExpectancyVenus() {
    if (this.age < 72) {
      let yearsLeft = 72 - this.age;
      let lifeExpectancyVenus = (Math.floor(yearsLeft / .62));
      return lifeExpectancyVenus;
    } else {
      let ageOver = this.age - 72;
      let lifeExpectancyVenus = (Math.floor(ageOver / .62));
      return lifeExpectancyVenus;
    }


  }
  lifeExpectancyMars() {
    if (this.age < 72) {
      let yearsLeft = 72 - this.age;
      let lifeExpectancyMars = (Math.floor(yearsLeft / 1.88));
      return lifeExpectancyMars;
    } else {
      let ageOver = this.age - 72;
      let lifeExpectancyMars = (Math.floor(ageOver / 1.88));
      return lifeExpectancyMars;
    }
  }
  lifeExpectancyJupiter() {
    if (this.age < 72) {
      let yearsLeft = 72 - this.age;
      let lifeExpectancyJupiter = (Math.floor(yearsLeft / 11.86));
      return lifeExpectancyJupiter;
    } else {
      let ageOver = this.age - 72;
      let lifeExpectancyJupiter = ageOver / 11.86;
      if (lifeExpectancyJupiter > 1) {

        return Math.floor(lifeExpectancyJupiter);
      }
      else {
        return lifeExpectancyJupiter;
      }

    }
  }

}

// lifeExpectancy(planet){
//   const mercury = 0.24;
//   const venus = 0.62;
//   const mars = 1.88;
//   const jupiter = 11.86;
//   if (this.age < 72) {
//     let yearsLeft = 72 - this.age;
//     return yearsLeft / planet

//   } else {
//     let ageOver = this.age - 72 ;
//     return Math.floor (ageOver / planet) ;

//   }
// }

    
