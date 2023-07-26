function scuberGreetingForFeet(distance){
  // Write your code here!
  if (distance <= 400) return "This one is on me!";
  if (distance > 2000 && distance < 2500) return "I will gladly take your thirty bucks.";
  if (distance > 2500) return "No can do.";
}

function ternaryCheckCity(city){
  // Write your code here!
  let textToReturn;
  city === "NYC" ? textToReturn = "Ok, sounds good." : textToReturn = "No go.";
  return textToReturn;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case "generous":
      return "Thank you so much.";

    case "not as generous":
      return "Thank you.";

    default:
      return "Bye.";
  }
}