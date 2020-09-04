import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function () {
  $("#person").submit(function (event) {
    event.preventDefault();
    let name = $('#name').val();
    let age = $('#age').val();
    console.log(name);
    console.log(age);
  });
});