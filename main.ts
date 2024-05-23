                           
//                              ⚡⚡   🅻🅴🆃'🆂  🆂🆃🅰🆁🆃!   ⚡⚡



// 1. Install Node.js, TypeScript and VS Code on your computer.

//    Done!  😀



// 2. Personal Message: Store a person’s name in a variable, and print a message to that person. 
//    Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”


// Use "Template literals"
let Name = "Salman";

console.log(`Hello ${Name}, would you like to learn some Typescript today?`);



// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let newName: string = "Salman";

// Lowercase
console.log("Lowercase:", newName.toLowerCase());

// Uppercase
console.log("Uppercase:", newName.toUpperCase());

// Titlecase
console.log("Titlecase:", newName.charAt(0).toUpperCase() + newName.slice(1).toLowerCase());



// 4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. 
//    Your output should look something like the following, including the quotation marks:
//    Albert Einstein once said, “A person who never made a mistake never tried anything new.”


let author = "William Shakespeare";
let quote = "All that glitters is not gold.";

console.log(`${author} once said, "${quote}" `);



// 5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person.
//    Then compose your message and store it in a new variable called message. Print your message.


let famous_person: string = "Sir Francis Bacon";
let quote2: string = "Knowledge is power.";
let message: string = `${famous_person} once said, "${quote2}"`;

console.log(message);



// 6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
//    Make sure you use each character combination, "\t" and "\n", at least once.
//    Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.


let personName: string = "\t\n   Muhammad Salman    \n\t";

// Print name with whitespace
console.log("Name with whitespace:", personName);

// Strip whitespace
let strippedName: string = personName.trim();

// Print stripped name
console.log("Stripped name:", strippedName);



// 7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. 
//    Be sure to enclose your operations in print statements to see the results.

//    👇👇👇

// 8. You should create four lines that look like this:
//    console.log(5 + 3)
//    Your output should simply be four lines with the number 8 appearing once on each line.


// Addition
console.log("Addition:", 5 + 3);

// Subtraction
console.log("Subtraction:", 10 - 2);

// Multiplication
console.log("Multiplication:", 4 * 2);

// Division
console.log("Division:", 16 / 2);



// 9. Favorite Number: Store your favorite number in a variable. 
//    Then, using that variable, create a message that reveals your favorite number. Print that message.


let favoriteNumber: number = 9;
let messages: string = `My favorite number is ${favoriteNumber}.`;

console.log(messages);



// 10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. 
//     If you don’t have anything specific to write because your programs are too simple at this point, 
//     just add your name and current date at the top of each program file. Then write one sentence describing what the program does.

// Here are two programs:


//     1. My favorite number program:

// Author: Muhammad Salman
// Date: 5/8/2024
// Program: This program demonstrates my favorite number with comments...

let favoritesNumber = 9;
let messages2 = `My favorite number is ${favoriteNumber}.`;

console.log(messages2);


//     2. Number operating program:

// Author: Muhammad Salman
// Date: 5/8/2024
// Program: This program demonstrates addition and subtraction operations.

// Addition
console.log("Addition:", 5 + 3);

// Subtraction
console.log("Subtraction:", 10 - 2);



// 11. Names: Store the names of a few of your friends in a array called names. 
//     Print each person’s name by accessing each element in the list, one at a time.


// Print each person's name one at a time in list. We use ==> forEach()

let names = ["Noman", "Salman", "Ali", "Ahmed"];

names.forEach(function (personnames) {
    console.log(personnames);
});



// 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
//     print a message to them. The text of each message should be the same, 
//     but each message should be personalized with the person’s name.


// Print personalized message to each person

let names2 = ["Noman", "Salman", "Ali", "Ahmed"];

names2.forEach(function (message_names) {
    console.log("Hello" + " " + message_names + "," + " " + "How are you?");
});



// 13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. 
//     Use your list to print a series of statements about these items, 
//     such as “I would like to own a Honda motorcycle.”


let favoriteTransportation: string[] = ["BMX bicycle", "BMW car", "Suzuki motorcycle"];

favoriteTransportation.forEach(function (vehicles) {
    console.log("I would like to own a" + " " + vehicles + ".");
});



// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
//     Make a list that includes at least three people you’d like to invite to dinner. 
//     Then use your list to print a message to each person, inviting them to dinner.


// Define an array of guests to invite to dinner
const guestList: string[] = ["Noman", "Usman", "Rehman"];

// Loop through the array and print a message inviting each guest to dinner
guestList.forEach((guest) => {
    console.log(`Dear ${guest},\n\nI hope this message finds you well. I am writing to extend a heartfelt invitation to join me for dinner. Your contributions to humanity have been profound and inspiring, and it would be an absolute honor to have the opportunity to share a meal and conversation with you.\n\nPlease let me know if you are available to join me.\n\nBest regards,\nSalman`);

});



// 15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.
//     You’ll have to think of someone else to invite.

//   • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//   • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//   • Print a second set of invitation messages, one for each person who is still in your list.


// Define the original guest list
let guestsList: string[] = ["Noman", "Usman", "Rehman"];


// Print the name of the guest who can't make it
let unavailableGuests = "Rehman";
guestsList.pop();

console.log(`Unfortunately, ${unavailableGuests} can't make it to the dinner.`);

// Replace the unavailable guest with a new person to invite
guestsList.push("Suleman");


// Print a second set of invitation messages
guestsList.forEach((guests) => {
    console.log(`Dear ${guests},\n\nI hope this message finds you well. I am writing to extend a heartfelt invitation to join me for dinner. Your contributions to humanity have been profound and inspiring, and it would be an absolute honor to have the opportunity to share a meal and conversation with you.\n\nPlease let me know if you are available to join me.\n\nBest regards,\nSalman`);

});



// 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

//   • Start with your program from Exercise 15. Add a print statement to end of your program informing people that you found a bigger dinner table.
//   • Add one new guest to the beginning of your array.
//   • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
//   • Print a new set of invitation messages, one for each person in your list.


// Define the original guest list now
let guestLists: string[] = ["Noman", "Usman", "Suleman"];


// Add more guests
guestLists.unshift("Imran"); // Add one new guest to the beginning of the array
guestLists.splice(3, 0, "Zeeshan"); // Add one new guest to the middle of the array
guestLists.push("Hassan"); // Add one new guest to the end of the array

// Inform about the bigger dinner table
console.log("Good news! We found a bigger dinner table!");

// Print a new set of invitation messages
guestLists.forEach((guest) => {
    console.log(`Dear ${guest},\n\nI hope this message finds you well. I am writing to extend a heartfelt invitation to join me for dinner. Your contributions to humanity have been profound and inspiring, and it would be an absolute honor to have the opportunity to share a meal and conversation with you.\n\nPlease let me know if you are available to join me.\n\nBest regards,\nSalman`);
    console.log("\n---\n");
});



// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for dinner, and you have space for only two guests.

//   • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//   • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list,
//     print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//   • Print a message to each of the two people still on your list, letting them know they’re still invited.
//   • Remove the last two names from your list, so you have an empty list.
//     Print your list to make sure you actually have an empty list at the end of your program.


// Define the original guest list
let guestsLists: string[] = ["Imran", "Noman", "Usman", "Zeeshan", "Suleman", "Hassan"];

// Inform about the limitation of space
console.log("Unfortunately, the new dinner table won't arrive in time for the dinner, and I can only invite two people.");


// Remove guests until only two names remain
let removedGuest1 = guestsLists.pop(); // Remove the last guest from the list
console.log(`Sorry! ${removedGuest1}, but I can't invite you to dinner.`);

let removedGuest2 = guestsLists.pop(); // Remove the last guest from the list
console.log(`Sorry! ${removedGuest2}, but I can't invite you to dinner.`);

let removedGuest3 = guestsLists.pop(); // Remove the last guest from the list
console.log(`Sorry! ${removedGuest3}, but I can't invite you to dinner.`);

let removedGuest4 = guestsLists.pop(); // Remove the last guest from the list
console.log(`Sorry! ${removedGuest4}, but I can't invite you to dinner.`);


console.log("\n🤗\n") // Just for line changing  🤗🤗🤗

// Print a message to the remaining two people
guestsLists.forEach((guests) => {
    console.log(`Dear ${guests},\n\nI'm happy to inform you that you're still invited to dinner.\n\nBest regards,\nSalman`);
    console.log("\n---\n");
});

// Remove the last two names from the list
guestsLists.splice(0, 2);

// Print the empty list
console.log("After removing the last two names, the guest list is now empty:", guestsLists);



// 18. Seeing the World: Think of at least five places in the world you’d like to visit.

//   • Store the locations in a array. Make sure the array is not in alphabetical order.
//   • Print your array in its original order.
//   • Print your array in alphabetical order without modifying the actual list.
//   • Show that your array is still in its original order by printing it.
//   • Print your array in reverse alphabetical order without changing the order of the original list.
//   • Show that your array is still in its original order by printing it again.
//   • Reverse the order of your list. Print the array to show that its order has changed.
//   • Reverse the order of your list again. Print the list to show it’s back to its original order.
//   • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
//   • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.


// Define an array of places to visit
let placesToVisit: string[] = ["Manora Beach", "Skardu", "Muree", "Gorakh Hill", "Gilgit"];



// Print the array in its original order
console.log("Original order:", placesToVisit);

// Print the array in alphabetical order without modifying the original list
console.log("Alphabetical order:", [...placesToVisit].sort());

// Print the array to show it's still in its original order
console.log("Original order:", placesToVisit);

// Print the array in reverse alphabetical order without changing the original list
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());

// Print the array to show it's still in its original order
console.log("Original order:", placesToVisit);

// Reverse the order of the list
console.log("Reversed order:", placesToVisit.reverse());

// Reverse the order of the list again to get back to the original order
console.log("Back to original order:", placesToVisit.reverse());

// Sort the array in alphabetical order
console.log("Sorted in alphabetical order:", placesToVisit.sort());

// Sort the array in reverse alphabetical order
console.log("Sorted in reverse alphabetical order:", placesToVisit.reverse());



// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18,
//     print a message indicating the number of people you are inviting to dinner.


// Define the original guest list
let guestListss: string[] = ["Noman", "Usman", "Rehman"];

// Print the number of people being invited to dinner
console.log(`You are inviting ${guestListss.length} people to dinner.`);

// Print a message inviting each guest to dinner
guestListss.forEach((guest) => {
    console.log(`Dear ${guest},\n\nI hope this message finds you well. I am writing to extend a heartfelt invitation to join me for dinner. Your contributions to humanity have been profound and inspiring, and it would be an absolute honor to have the opportunity to share a meal and conversation with you.\n\nPlease let me know if you are available to join me.\n\nBest regards,\nSalman`);
    console.log("\n---\n");
});



// 20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages,
//     or anything else you’d like. Write a program that creates a list containing these items.


// Array of fruits
let fruits: string[] = [
    "Apple",
    "Banana",
    "Orange",
    "Strawberry",
    "Pineapple",
    "Mango"
];

// Print the list of fruits
fruits.forEach(function (listFruits) {
    console.log(listFruits);
});


console.log("\n\n"); // just for line changing  🤗🤗🤗


// 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.


// Define TypeScript objects for countries
let countries = [
    {
        name: "USA",
        capital: "Washington, D.C.",
        population: 331000000,
        continent: "North America"
    },
    {
        name: "China",
        capital: "Beijing",
        population: 1441000000,
        continent: "Asia"
    },
    {
        name: "Brazil",
        capital: "Brasília",
        population: 212000000,
        continent: "South America"
    },
    {
        name: "India",
        capital: "New Delhi",
        population: 1380000000,
        continent: "Asia"
    }
];

// Print information about countries
console.log("Information about Countries:");
for (let country of countries) {
    console.log(`Country: ${country.name}`);
    console.log(`Capital: ${country.capital}`);
    console.log(`Population: ${country.population}`);
    console.log(`Continent: ${country.continent}`);
    console.log();
}



// 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. 
//     Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.


// We use above exercise (21)

// Trying to access an index out of bounds intentionally to produce an error
console.log(countries[5]);

// Accessing index 5 which doesn't exist. This will produce an index error or undefined because the countries array has only 4 elements,
// Once we've observed the error, we can correct it by removing or modifying the line that causes it....



// 23. Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. 
//     Your code should look something like this:
//     let car = 'subaru';
//     console.log("Is car == 'subaru'? I predict True.")
//     console.log(car == 'subaru')
//   • Look closely at your results, and make sure you understand why each line evaluates to True or False.
//   • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.


//  =     to store
//  ==    to compare
//  ===   to define data type
//  !=    is not equal to
//  < >   for less than and greater than


let car: string = 'subaru';

// Test 1
console.log("Is car is equal to 'subaru' ?  I predict True.");
console.log(car == 'subaru'); // True

// Test 2
console.log("Is car is not equal to 'subaru' ?  I predict False.");
console.log(car != 'subaru'); // False

// Test 3
console.log("'subaru' is car ?  I predict True.");
console.log(car === 'subaru'); // True

// Test 4
console.log("Is car is equal to 'ford' ?  I predict False.");
console.log(car == 'ford'); // False

// Test 5
console.log("Is car is not 'honda' ?  I predict True.");
console.log(car != 'honda'); // True

// Test 7
console.log("If car is a 'bus' ?  I predict False.");
console.log(car == 'bus'); // False

// Test 8
console.log("Is car starts with 'su' ?  I predict True.");
console.log(car.startsWith('su')); // True

// Test 8
console.log("Is car includes 'cd' ?  I predict False.");
console.log(car.includes('cd')); // False

// Test 9
console.log("Is car is in lower case ?  I predict True.");
console.log(car.toLowerCase() === 'subaru'); // True

// Test 10
console.log("Is car is in upper case ?  I predict False.");
console.log(car.toUpperCase() === 'subaru'); // False



// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests.
//     Have at least one True and one False result for each of the following:
//   • Tests for equality and inequality with strings
//   • Tests using the lower case function
//   • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//   • Tests using "and" and "or" operators
//   • Test whether an item is in a array
//   • Test whether an item is not in a array


let string1: string = 'hello';
let string2: string = 'world';
let number1: number = 5;
let number2: number = 10;
let array: number[] = [1, 2, 3, 4, 5];


// Tests for equality and inequality with strings
console.log("Is string1 is equal to 'hello' ? I predict True.");
console.log(string1 == 'hello'); // True

console.log("Is string1 is not equal to string2 ? I predict True.");
console.log(string1 != string2); // True

console.log("Is string1 is equal(data types) to 'Hello' ? I predict False.");
console.log(string1 === 'Hello'); // False


// Tests using the lower case function
console.log("Is string1 is in lower case ? I predict True.");
console.log(string1.toLowerCase() === 'hello'); // True

console.log("Is string2 is in lower case and not equal to 'WORLD' ? I predict True.");
console.log(string2.toLowerCase() !== 'WORLD'); // True


// Numerical tests
console.log("Is 5 > 10 ? I predict False.");
console.log(number1 > number2); // False

console.log("Is 5 < 10 ? I predict True.");
console.log(number1 < number2); // True

console.log("Is 5 is greater than or eqaul to 5 ? I predict True.");
console.log(number1 >= 5); // True

console.log("Is number2 <= 10? I predict True.");
console.log(number2 <= 10); // True


// Tests using "and" and "or" operators
console.log("Is 5 < 10 and 10 > 5 ? I predict True.");
console.log(number1 < 10 && number2 > 5); // True

console.log("Is 5 < 10 or 10 < 5 ? I predict True.");
console.log(number1 < 10 || number2 < 5); // True


// Test whether an item is in an array
console.log("Is 3 in the array ? I predict True.");
console.log(array.includes(3)); // True

console.log("Is 9 in the array ? I predict False.");
console.log(array.includes(9)); // False


// Test whether an item is not in an array
console.log("Is 6 not in the array ? I predict True.");
console.log(!array.includes(6)); // True

console.log("Is 1 not in the array ? I predict False.");
console.log(!array.includes(1)); // False



// 25. Alien Colors #1: 
//     Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
//   • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
//   • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)


let aliencolor: string = 'green';

if (aliencolor === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
else {
    console.log()
};


// This block won't execute because the condition is false
let aliencolors: string = 'red';

if (aliencolors === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
else {
    console.log()
};
// since the alien_color is 'red', the condition alien_color === 'green' evaluates to false, 
// so the console.log statement inside the if block is not executed.



// 26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//   • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
//   • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
//   • Write one version of this program that runs the if block and another that runs the else block.


// If alien is green
let alienColor2: string = 'green';

if (alienColor2 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");  // Runs if block
}
else {
    console.log("Player just earned 10 points")
};


// If the alien’s color isn’t green
let alienColors2: string = 'green';

if (alienColors2 === 'red') {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
}
else {
    console.log("Player just earned 10 points");  // Runs else block
};



// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//   • If the alien is green, print a message that the player earned 5 points.
//   • If the alien is yellow, print a message that the player earned 10 points.
//   • If the alien is red, print a message that the player earned 15 points.
//   • Write three versions of this program, making sure each message is printed for the appropriate color alien.


// If Alien is green
let alienColor: string = 'green';

if (alienColor === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else if (alienColor === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
}
else if (alienColor === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}


// If Alien is yellow
let aliencolor2: string = 'yellow';

if (aliencolor2 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else if (aliencolor2 === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
}
else if (aliencolor2 === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}


// If Alien is red
let alienColor3: string = 'red';

if (alienColor3 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else if (alienColor3 === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
}
else if (alienColor3 === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}



// 28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
//   • If the person is less than 2 years old, print a message that the person is a baby.
//   • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
//   • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
//   • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
//   • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
//   • If the person is age 65 or older, print a message that the person is an elder.


let age: number = 30;  // We suppose randomly age. If you want different results change value of age...

if (age < 2) {
    console.log("The person is a baby.");
} 
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
} 
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
} 
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
} 
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
} 
else {
    console.log("The person is an elder.");
}



// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//    • Make a array of your three favorite fruits and call it favorite_fruits.
//    • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, 
//      the if block should print a statement, such as You really like bananas!


let favoriteFruits: string[] = ['banana', 'apple', 'strawberry'];

if (favoriteFruits.includes('banana')) {
    console.log("You really like bananas!");
}

if (favoriteFruits.includes('apple')) {
    console.log("You really like apples!");
}

if (favoriteFruits.includes('strawberry')) {
    console.log("You really like strawberries!");
}

if (favoriteFruits.includes('orange')) {
    console.log("You really like oranges!");
}

if (favoriteFruits.includes('grape')) {
    console.log("You really like grapes!");
}



// 30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting 
//     to each user after they log in to a website. Loop through the array, and print a greeting to each user:
//   • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
//   • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.


let usernames: string[] = ['admin', 'Noman', 'Usman', 'Imran', 'Salman'];

for (let username of usernames) {
    if (username == 'admin') {
        console.log("Hello admin, would you like to see a status report ?");
    } 
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}



// 31. No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
//   • If the list is empty, print the message We need to find some users!
//   • Remove all of the usernames from your array, and make sure the correct message is printed.


let userNames: string[] = [];  // If the list is empty

if (userNames.length === 0) {
    console.log('We need to find some users!')
}
else {
    for (let username of userNames) {
        if (username == 'admin') {
            console.log("Hello admin, wWould you like to see a status report ?");
        }
        else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}



// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//   • Make a list of five or more usernames called current_users.
//   • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
//   • Loop through the new_users list to see if each new username has already been used.
//     If it has, print a message that the person will need to enter a new username. If a username has not been used,
//     print a message saying that the username is available.
//   • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.


let currentUsers: string[] = ['Salman', 'Ahmed', 'Aima', 'Sarah', 'Noman'];
let new_users: string[] = ['Suleman', 'Aila', 'salman', 'Aima', 'Usman'];

for (let newUser of new_users) {
    let isUsernameTaken = currentUsers.some((user) => user.toLowerCase() === newUser.toLowerCase());
    if (isUsernameTaken) {
        console.log(`Sorry, the username "${newUser}" is already taken. Please enter a new username.`);
    } 
    else {
        console.log(`Congratulations! The username "${newUser}" is available.`);
    }
}



// 33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
//   • Store the numbers 1 through 9 in a array.
//   • Loop through the array.
//   • Use an if-else chain inside the loop to print the proper ordinal ending for each number. 
//     Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.


let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i++) {
    let ordinalEnding: string;

    if (i === 0) {
        ordinalEnding = "st";
    } 
    else if (i === 1) {
        ordinalEnding = "nd";
    } 
    else if (i === 2) {
        ordinalEnding = "rd";
    } 
    else {
        ordinalEnding = "th";
    }

    console.log(`${numbers[i]}${ordinalEnding}`);
}


// 34. Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, 
//     and then use a for loop to print the name of each pizza.
//   • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. 
//     For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
//   • Add a line at the end of your program, outside the for loop, that states how much you like pizza. 
//     The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!


let favoritePizzas: string[] = ["Margherita", "Pepperoni", "Vegetarian"];

for (let i = 0; i < favoritePizzas.length; i++) {
    console.log(`I like ${favoritePizzas[i]} pizza!`);
}

console.log("I really love pizza!");



// 35. Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list,
//     and then use a for loop to print out the name of each animal. 
//     • Modify your program to print a statement about each animal, such as A dog would make a great pet. 
//     • Add a line at the end of your program stating what these animals have in common.
//     You could print a sentence such as Any of these animals would make a great pet!


let animals: string[] = ["Dog", "Cat", "Rabbit"];

for (let animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

console.log("Any of these animals would make a great pet!");



// 36. T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. 
//     The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.


function make_shirt(size: string, message: string): void {
    console.log(`You've ordered a ${size} shirt, with the message: ${message}.`);
}

// Calling the function
make_shirt("large", "Hello, World!");



// 37.Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
//    Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.


function make_shirts(size: string = "large", message: string = "I love TypeScript"): void {
    console.log(`You've ordered a ${size} shirt with the message: "${message}".`);
}

// Making a large shirt with the default message
make_shirts();

// Making a medium shirt with the default message
make_shirts("medium");

// Making a small shirt with a custom message
make_shirts("small", "Hello, OpenAI!");



// 38. Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, 
//     such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, 
//     at least one of which is not in the default country.


function describe_city(city: string, country: string = "Unknown"): void {
    console.log(`${city} is in ${country}.`);
}

// Calling the function for different cities
describe_city("Karachi", "Pakistan");
describe_city("New York", "USA");
describe_city("Tokyo"); // Using default country



// 39. City Names: Write a function called city_country() that takes in the name of a city and its country. 
//     The function should return a string formatted like this:

//     "Lahore, Pakistan"
//     Call your function with at least three city-country pairs, and print the value that’s returned.


function city_country(city: string, country: string) {
    return `${city}, ${country}`;
}

// Calling the function with different city-country pairs
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Paris", "France"));
console.log(city_country("Sydney", "Australia"));



// 40. Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name 
//     and an album title, and it should return a Object containing these two pieces of information. 
//     Use the function to make three dictionaries representing different albums.     
//     Print each return value to show that Objects are storing the album information correctly. 
//     Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
//     If the calling line includes a value for the number of tracks, add that value to the album’s Object. 
//     Make at least one new function call that includes the number of tracks on an album.


type Album = {
    artist: string,
    title: string,
    tracks?: number
}

function make_album(artist: string, title: string, tracks?: number): Album {
    let album: Album = {
        artist: artist,
        title: title
    }
    if (tracks) {
        album.tracks = tracks
    }
    return album;

}

// Printing each return value
console.log(make_album("Artist1", "Album1"));
console.log(make_album("Artist2", "Album2", 12));   // Including the numbers of tracks...
console.log(make_album("Artist3", "Album3"));



// 41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
//     which prints the name of each magician in the array.


let magicians: string[] = ["Merlin", "Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

show_magicians(magicians);

function show_magicians(magicians: string[]) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}



// 42. Great Magicians: Start with a copy of your program from above Exercise. Write a function called make_great() that modifies the array of magicians
//     by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.


make_great(magicians);

function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}

console.log(magicians);



// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names.
//     Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array
//     to show that you have one array of the original names and one array with the Great added to each magician’s name.


function make_greats(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
    return magicians
}


// // Original array of magicians
let magicianss: string[] = ["Alice", "Bob", "Charlie"];

// // Make a copy of the original array
let originalMagicians: string[] = [...magicianss];

// // Call makeGreat with a copy of the original array
let greatMagicians: string[] = make_greats([...originalMagicians]);


// // Show original array
console.log("\nOriginal Magicians:");
magicianss.forEach((originalMag) => console.log(originalMag))


// Show modified array
console.log("\nGreat Magicians:");
greatMagicians.forEach((greatMag) => console.log(greatMag))



// 44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter
//     that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered.
//     Call the function three times, using a different number of arguments each time.


function makeSandwich(...items: string[]): void {
    console.log("\nSandwich Summary:");
    if (items.length === 0) {
        console.log("No items selected. You ordered an empty sandwich!");
    } 
    else {
        console.log("You ordered a sandwich with:");
        items.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
    }
    console.log("Enjoy your sandwich!");
}

// Call the function with different number of arguments
makeSandwich("Ham", "Cheese", "Lettuce", "Tomato");
makeSandwich("Peanut Butter", "Jelly");
makeSandwich();



// 45. Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name.
//     It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs,
//     such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.


type Car = {
    manufacturer: string;
    model: string;
    [key: string]: any; // Allow arbitrary key-value pairs
}

function carInfo(manufacturer: string, model: string, ...extras: [string, any][]): Car {
    let car: Car = {
        manufacturer: manufacturer,
        model: model
    };

    // Adding extra information
    extras.forEach(([key, value]) => {
        car[key] = value;
    });

    return car;
}

// Calling the function with required information and additional details
let myCar = carInfo("Toyota", "Corolla", ["color", "blue"], ["year", 2024]);

// Printing the returned object
console.log(myCar);


//                                              ❄️  🅴🅽🅳  ❄️

//                                   ★  ℳ𝓊𝒽𝒶𝓂𝓂𝒶𝒹 𝒮𝒶𝓁𝓂𝒶𝓃 𝒦𝒽𝒶𝓁𝒾𝒹  ★