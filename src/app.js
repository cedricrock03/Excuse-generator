import "./style.css";

window.onload = () => {
  //write your code here
  document.querySelector("#excuse").innerHTML= generateExcuse();
  document.querySelector("#button").addEventListener("click", generateExcuse);
};
function generateExcuse() {
  let who = [" Dog ", " Cat", " Turtle", " bird"];
  let action = [" ate", " burned", " ripped the", " threw", " broke"];
  let what = [" homework", " keys", " car", " my toy"];
  let when = [" before the class", " right on time", " during lunch"];

  let whoIndx = Math.floor(Math.random() * who.length);
  let actionIndx = Math.floor(Math.random() * action.length);
  let whatIndx = Math.floor(Math.random() * what.length);
  let whenIndx = Math.floor(Math.random() * when.length);
  console.log("clicked button");

  let newphrase =
    who[whoIndx] +
    "" +
    action[actionIndx] +
    "" +
    what[whatIndx] +
    "" +
    when[whenIndx];
  document.querySelector("#excuse").innerHTML = newphrase;
}
