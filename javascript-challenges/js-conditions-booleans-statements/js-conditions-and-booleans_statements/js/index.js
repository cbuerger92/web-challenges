console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";
let receivedPassword = "passwort1234";

if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd

let number = 225;

if (number % 2 === 0) {
  console.log(number + " is even");
} else {
  console.log(number + " is not even");
}

// Part 3: Hotdogs

let numberOfHotdogs = 1000000;

if (numberOfHotdogs <= 4) {
  console.log("2 Euro pro Hotdog");
} else if (numberOfHotdogs <= 99) {
  console.log("1.50 Euro pro Hotdog");
} else if (numberOfHotdogs <= 999999) {
  console.log("1 Euro pro Hotdog");
} else if (numberOfHotdogs <= 1000000) {
  console.log("0.10 Euro pro Hotdog");
} else {
  console.log("Gib Nummer an");
}

// Part 4: Daytime

const currentHour = 18;

const statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";

console.log(statement);

// ChatGPT Aufgabe

const temprature = 19;

const message = temprature < 20 ? "Its cold outside" : "The weather is nice";

console.log(message);

// Part 5: Greeting

const name = "Roland";

const greeting = "Hello " + (name === "Roland" ? "Coach" : name) + "!";

console.log(greeting);

// ChatGPT Aufgabe

// 1
const role = "User";

const welcomeMessage = "Welcome, " + (role === "Admin" ? "Admin!" : "User!");

console.log(welcomeMessage);

// 2

const age = 20;

const ageMessage = age < 18 ? "You are a minor." : "You are an adult.";

console.log(ageMessage);

// 3

const sunnyWeather = true;

const weatherMessage = sunnyWeather
  ? "It's a beautiful day!"
  : "Don't forget your umbrella!";

console.log(weatherMessage);

// 4

const score = 49;

const scoreMessage =
  score >= 50
    ? "Congratulations! You passed!"
    : "Sorry, you need to try again.";

console.log(scoreMessage);
