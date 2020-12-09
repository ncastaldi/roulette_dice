// Assignment Code
var generateBtn = document.querySelector("#generate");

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function rollDice() {
  /* VARIABLE DECLATRATIONS */
  const stream_options = [
    "Netflix",
    "Amazon Prime",
    "Disney+",
    "HBO",
    "Hulu",
    "Vudu",
    "Crunchyroll",
    "CBS All Access",
    "Apple TV+",
  ];

  const logo = ["images/netflix.png", "images/prime.png", "images/disney.jpg"];

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

  var rank = -1;
  var typeSelection = -1;
  var categorySelection = -1;
  var randNum = -1;

  /* Spin logo wheel 
  for (var i = 0; i < 200; i++) {
    for (var j = 0; j < 50; j++) {
      for (var k = 0; k < 1; k++) {
        randNum = getRndInteger(0, logo.length);
        document.getElementById("logo_target").src = logo[randNum];
        document.getElementById("logo_target").innerHTML = logo[randNum];
        console.log(randNum);
      }
    }
  }
*/

  /* Select service to stream from */
  randNum = getRndInteger(0, stream_options.length);
  serviceSelection = stream_options[randNum];
  console.log(serviceSelection);

  /* Display service logo */
  document.getElementById("logo_target").src = logo[randNum];

  /* Select type of media to watch */
  /* randNum = getRndInteger(0, type.length); */
  typeSelection = type[getRndInteger(0, type.length)];
  console.log(typeSelection);

  /* Select media category */
  randNum = getRndInteger(0, category.length);
  categorySelection = category[randNum];
  console.log(categorySelection);

  /* Select list item rank */
  randNum = getRndInteger(1, 10);
  rank = randNum;
  console.log(rank);

  /* Convert rank from numbers to words */
  switch (rank) {
    case 1:
      rank = "first";
      break;
    case 2:
      rank = "second";
      break;
    case 3:
      rank = "third";
      break;
    case 4:
      rank = "fourth";
      break;
    case 5:
      rank = "fifth";
      break;
    case 6:
      rank = "sixth";
      break;
    case 7:
      rank = "seventh";
      break;
    case 8:
      rank = "eighth";
      break;
    case 9:
      rank = "ninth";
      break;
    case 10:
      rank = "tenth";
      break;
  }

  /* RETURN THE RESULTS */
  return (
    "Congratulations! You're watching the " +
    rank +
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
