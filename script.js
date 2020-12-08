// Assignment Code
var generateBtn = document.querySelector("#generate");

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function rollDice() {
  /* VARIABLE DECLATRATIONS */
  const yourService = ["Disney+", "Hulu", "Amazon Prime"];
  const type = ["movie", "tv show"];
  const category = [
    "Action & Adventure",
    "Children & Family",
    "Classic",
    "Comedies",
    "Documentaries",
    "Dramas",
    "Horror",
    "Music",
    "Romantic",
    "Sci-fi & Fantasy",
    "Sports",
    "Thrillers",
  ];
  var rank = ["1", "2", "3", "4", "5", "6"];
  var serviceSelection = -1;
  var typeSelection = -1;
  var categorySelection = -1;
  var rankSelection = -1;
  var randNum = -1;

  /* MAKE SELECTIONS */
  randNum = getRndInteger(0, yourService.length);
  serviceSelection = yourService[randNum];
  console.log(serviceSelection);

  randNum = getRndInteger(0, type.length);
  typeSelection = type[randNum];
  console.log(typeSelection);

  randNum = getRndInteger(0, category.length);
  categorySelection = category[randNum];
  console.log(categorySelection);

  randNum = getRndInteger(0, rank.length);
  rankSelection = rank[randNum];
  console.log(rankSelection);

  switch (rankSelection) {
    case "1":
      rankSelection = "first";
      break;
    case "2":
      rankSelection = "second";
      break;
    case "3":
      rankSelection = "third";
      break;
    case "4":
      rankSelection = "fourth";
      break;
    case "5":
      rankSelection = "fifth";
      break;
    case "6":
      rankSelection = "sixth";
      break;
  }

  /* RETURN THE RESULTS */
/*   alert(
    "Congratulations! You're watching the " +
      rankSelection +
      " " +
      typeSelection +
      " in " +
      serviceSelection +
      "'s " +
      categorySelection +
      " category."
  ); */

  return (
    "Congratulations! You're watching the " +
    rankSelection +
    " " +
    typeSelection +
    " in " +
    serviceSelection +
    "'s '" +
    categorySelection +
    "' category."
  );
}

// Write password to the #password input
function writePassword() {
  var password = rollDice();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
