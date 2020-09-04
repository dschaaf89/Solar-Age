import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Calculator from './js/calculator-logic';
function displayResults(x) {
  if(x.age < 72){
    $("#personName").text(x.name);
    $("#mercury").text(x.ageOnMercury(x.age) + " years old");
    $("#mercuryLife").text(x.lifeExpectancyMercury(x.age)+" years left in your life.");
    $("#venus").text(x.ageOnVenus(x.age) + " years old");
    $("#mars").text(x.ageOnMars(x.age) + " years old");
    $("#jupiter").text(x.ageOnJupiter(x.age) + " years old");
  }
  


}
$(document).ready(function () {
  $("#person").submit(function (event) {
    event.preventDefault();
    let person = $('#name').val();
    let age = $('#age').val();
    
    let calc = new Calculator(person, age);
    $('#results').show();
    displayResults(calc);

  });
});