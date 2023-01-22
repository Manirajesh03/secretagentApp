import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
var name = prompt("Enter your name");
var actor = prompt("Enter your favorite actor");
var lucky = prompt("Enter your lucky number");
var dish = prompt("Enter your favorite dish");

var nameCondition = false;
var actorCondition = false;
var luckyCondition = false;
var dishCondition = false;

if (name[0] == "d") {
  nameCondition = true;
}

if (actor[actor.length - 1] == "r") {
  actorCondition = true;
}

if (lucky == 7) {
  luckyCondition = true;
}

if (dish.length >= 6) {
  dishCondition = true;
}

alert("Thanks for your information");
if (nameCondition && actorCondition && luckyCondition && dishCondition) {
  console.log("Hello Secret Agent, Good Evening");
}
