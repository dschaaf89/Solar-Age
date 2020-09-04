import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
//import Calculator from './js/calculator-logic';

$(document).ready(function () {
  $("#person").submit(function (event) {
    event.preventDefault();
    let person = $('#name').val();
    let age = $('#age').val();
    console.log(person,age);
    //let calc = new Calculator(person,age);
    
  });
});