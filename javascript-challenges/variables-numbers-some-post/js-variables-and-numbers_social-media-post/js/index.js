console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

// --v-- write your code here --v--

const title = "My First Post";
const text = "This is a simple post on social media!";
let likes = 100;
const user = "Christina";
const isReported = false;

// --^-- write your code here --^--

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/

// --v-- write your code here --v--

// Log alle Variablen
console.log("Title:", title);
console.log("Text:", text);
console.log("Likes:", likes);
console.log("User:", user);
console.log("Is Reported:", isReported);

// Erhöhe die Anzahl der Likes um 1
likes += 1;

// Log die Anzahl der Likes erneut
console.log("Updated Likes:", likes);

// --^-- write your code here --^--
