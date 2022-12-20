/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  let who = ["Naruto", "Mi abuela", "Mi gatita", "John Cena"];
  let action = [
    "lanzó un razengan",
    "botó a la basura",
    "se comió",
    "le hizo una llave "
  ];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let uno = Math.floor(Math.random() * who.length);
  let dos = Math.floor(Math.random() * action.length);
  let tres = Math.floor(Math.random() * what.length);
  let cuatro = Math.floor(Math.random() * when.length);

  document.querySelector("#excuse").innerHTML =
    who[uno] + " " + action[dos] + " " + what[tres] + " " + when[cuatro];
};
