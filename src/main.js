import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Calculator from './js/calculator-logic';
function displayResults(x) {
  
  if(x.age < 72){
    $("#personName").text(x.name);
    $("#mercury").text(x.ageOnMercury(x.age) + " years old");
    $("#mercuryLife").text(x.lifeExpectancyMercury(x.age)+" Mercurian years left in your life.");
    $("#venus").text(x.ageOnVenus(x.age) + " years old");
    $("#venusLife").text(x.lifeExpectancyVenus(x.age)+" Venusian years left in your life.");
    $("#mars").text(x.ageOnMars(x.age) + " years old");
    $("#marsLife").text(x.lifeExpectancyMars(x.age)+" Martian years left in your life.");
    $("#jupiter").text(x.ageOnJupiter(x.age) + " years old");
    $("#jupiterLife").text(x.lifeExpectancyJupiter(x.age)+" Jovien years left in your life.");
  } else {
    $("#personName").text(x.name);
    $("#mercury").text(x.ageOnMercury(x.age) + " years old");
    $("#mercuryLife").text(x.lifeExpectancyMercury(x.age)+" Mercurian years over your life Expectancy.");
    $("#venus").text(x.ageOnVenus(x.age) + " years old");
    $("#venusLife").text(x.lifeExpectancyVenus(x.age)+" Venusian years over your life Expectancy.");
    $("#mars").text(x.ageOnMars(x.age) + " years old");
    $("#marsLife").text(x.lifeExpectancyMars(x.age)+" Martian years over your life Expectancy.");
    $("#jupiter").text(x.ageOnJupiter(x.age) + " years old");
    $("#jupiterLife").text(x.lifeExpectancyJupiter(x.age)+" Jovien years over your life Expectancy.");
  }
  


}
$(document).ready(function () {
  $("#person").submit(function (event) {
    event.preventDefault();
    let person = $('#name').val();
    let age = $('#age').val();
    
    let calc = new Calculator(person, age);
    $('#results').show();
    $('#message').hide();
    $('.card1').hide();
    displayResults(calc);

  });
  $("#reset").click(function () {
    location.reload();
  });
});