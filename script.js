'use strict';

const weekdays = ['mon','tue','wed', 'thu', 'fri', 'sat', 'sun' ];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};


/*
// split and join
console.log('a+very+nice+string'.split('+'));
console.log('Hanson Jeon'.split(' '));

const [firstName, lastName] = 'Hanson Jeon'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ')
console.log(newName);

const capitalizeName = function(name){
  const names = name.split(' ');
  const namesUpper = [];
  for(const n of names){
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()))

  }
  console.log(namesUpper.join(' '))
}

capitalizeName('jessica ann smith davis');
capitalizeName('hanson jeon')

// padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('Hanson'.padStart(25, '+').padEnd(30, '+'));

const maskCreditCard = function(number){
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
}
console.log(maskCreditCard(1234567891234));
console.log(maskCreditCard('12354354514567891234'));

// repeat
const message2 = 'Bad weahter... All departures Delayed... \n';
console.log(message2.repeat(3));

const planesInLine = function(n){
  console.log(`there are ${n} planes in line ${'🛩'.repeat(n)}`);
}
planesInLine(5);
planesInLine(2);
planesInLine(10);
*/

/*
Coding Challenge #4
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure
Should produce this output (5 separate console.log outputs): 
underscoreCase     ✅
firstName          ✅✅
someVariable       ✅✅✅
calculateAge       ✅✅✅✅
delayedDeparture   ✅✅✅✅✅
Hints:
§ Remember which character defines a new line in the textarea 😉
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working 😉
§ This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!
Afterwards, test with your own test data! GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea')); 
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function(){
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for(const [i, row] of rows.entries()){
    const [first, second] = row.toLowerCase().trim().split('_');
    console.log(row, first, second);
    const output = `${first}${second.replace(
      second[0], 
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)} ${'✅'.repeat(i+1)}`);
  }
})



/*
// working with strings 2
const airline = 'TAP Air Portugal';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization
const passenger = 'hAnsoN' // Hanson
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// comparing emails
const email = 'hello@hanson.com';
const loginEmail = ' Hello@hanson.Com \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail)

// replacing
const priceGB = '288,97@'
const priceUS = priceGB.replace('@', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));

console.log(announcement.replace(/door/g, 'gate')); // /g global target

// Booleans 
const plane = 'Airbus A320neo';
console.log(plane.includes('A320')); // true
console.log(plane.includes('Boeing')); // false
console.log(plane.startsWith('Air')); // true

if(plane.startsWith('Airbus') && plane.endsWith('neo')){
  console.log('part of the new airbus family');
}

// practice exercise
const checkBaggage = function(items){
  const baggage = items.toLowerCase();
  if(baggage.includes('knife') || baggage.includes('gun')){
    console.log('You are NOT allowed on board!');
  } else {
    console.log('Welcome aboard!');
  }
}
checkBaggage('I have a laptop, some food and a pocket knife');
checkBaggage('Socks and camera');
checkBaggage('God some snacks and a gun for protection');
*/

/*
// working with strings 1
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log('B737'[0]);
console.log(airline.length);
console.log('B737'.length);

console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4)); // Air Portugal (subString)
console.log(airline.slice(4, 7)); // Air

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));


const checkMiddleSeat = function(seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if(s === 'B' || s === 'E'){
    console.log('You got the middle seat😇');
  } else console.log('you got lucky🤩');

}
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('Hanson'));
console.log(typeof new String('Hanson'));
console.log(typeof new String('Hanson').slice(1));
*/
/*
Coding Challenge #3
Let's continue with our football betting app! This time, we have a map called 'gameEvents' (see below) with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened(no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Computeandlogthefollowingstringtotheconsole:"An event happened,on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over'game Events'and log each element to the console,marking whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽   GOAL GOOD LUCK 😀

*/

/*
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'], 
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'], 
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'], 
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card']
]);

// 1.
console.log(gameEvents.values());
const events = [...new Set(gameEvents.values())];
console.log(events);

//2.
gameEvents.delete(64);

//3.
console.log(`An event happened,on average, every ${90 / gameEvents.size} minutes`);


const time = [...gameEvents.keys()].pop();
console.log(`An event happened,on average, every ${time / gameEvents.size} minutes`);
console.log(time);

//4. 

for(const [min, event] of gameEvents){
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}
*/
/*
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
  
  // ES6 enhanced object literals
  openingHours,

  orderDelivery({
    starterIndex =1,
    mainIndex=0,
    time= '20:00',
    address
  }){
    console.log
    (`order received! ${this.starterMenu[starterIndex]}, 
    and ${this.mainMenu[mainIndex]} will be delivered to 
    ${address} at ${time}`);
  },

  orderPasta(ing1, ing2, ing3){
    console.log(`here is your delicious pasta with ${ing1},${ing2},${ing3} `);
  },

  orderPizza(mainIngredient, ...otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};

const question = new Map([
  ['question', 'what is the best programming in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'correct 🎉'],
  [false, 'Try again!']
]);
console.log(question);

// convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// quiz app
console.log(question.get('question'));
for(const [key, value] of question){
  if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt('your answer'));
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// convert map to array
console.log([...question]);
// console.log(question.entries());
console.log([question.keys()]);
console.log([question.values()]);
*/


/*
// Maps fundamentals
const ordersSet = new Set([
  'Pasta', 
  'Pizza', 
  'Pizza', 
  'Risotto', 
  'Pasta',
  'Pizza'
]);
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
.set('open', 11)
.set('close', 23)
.set(true, 'we are open')
.set(false, 'we are closed');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);

const arr = [1,2]
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');


console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));
*/

/*
// sets
console.log(ordersSet);

console.log(new Set('Hanson'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));

ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
console.log(ordersSet);

for(const order of ordersSet) console.log(order);

// example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);

console.log(new Set('hansonJeon').size);
*/


/*
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days : `;
for(const day of properties){
  openStr += `${day}, `;
}
console.log(openStr);

// property values
const values = Object.values(openingHours)
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

for(const [day, {open, close}] of entries){
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}
*/
/*
if(restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

//with optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon','tue','wed', 'thu', 'fri', 'sat', 'sun' ];
for(const day of days){
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// methods
console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0,1) ?? 'Method does not exist');

// arrays
const users= [
  {name: 'hanson', email: 'hs@gmail.com'}
]
// const users = [];
console.log(users[0]?.name ?? 'User Array empty');

if(users.length>0) console.log(users[0].name);
else console.log('user array empty');
*/
/*
const menu =   [...restaurant.starterMenu, ...restaurant.mainMenu];

for(const item of menu) console.log(item);

for(const [i, el] of menu.entries()) console.log(`${i+1}: ${el}`);

console.log([...menu.entries()]);
*/

/*
restaurant.numGuests =0;
// nullish: null and undefined (NOT - or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);


console.log("-----------OR------------");



// use any data type, return any data type. short-circuiting
console.log(3 || 'Hanson');
console.log("" || 'hanson');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || "" || 'hello' || 23 || null);

restaurant.numGuests =0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 20;
console.log(guests2);
console.log("-----------AND------------");
console.log(0 && 'Hanson');
console.log(7 && 'Hanson');

console.log('hello' && 23 && null && 'Hanson');

if(restaurant.orderPizza){
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/
/*

// spread, because on right side of =
const arr = [1,2, ...[3,4]];
console.log(arr);

// rest, because on left side of =
const [a,b, ...others] = [1,2,3,4,5];
console.log(a,b, others);

const [pizza, ,Risotto, ...otherFood]=[...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, Risotto, otherFood);

//objects
const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);

// functions
const add = function(...numbers){
  let sum = 0;
  for(let i = 0; i<numbers.length; i++){
    sum+=numbers[i];
  }
  console.log(sum);
}
add(2,3);
add(5,3,7,2);
add(8,2,5,1,2,3,4);

const x = [23,5,7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

const arr = [7,8,9];
const badNewArr = [1,2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr= [1,2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Sundaegook'];
console.log(newMenu);

copy array
const mainMeneCopy = [...restaurant.mainMenu];

join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]
console.log(menu);

iterables : arrays, strings, maps, sets. not objects
const str = 'Hanson';
const letters = [...str, '', 'S.'];
console.log(letters);
console.log(...str);
*/

/*
real-world example
const ingredients = [prompt("let's make pasta! Ingredient 1?"),prompt("let's make pasta! Ingredient 2?"),prompt("let's make pasta! Ingredient 3? ")];

console.log(ingredients);
restaurant.orderPasta(ingredients[0],ingredients[1],ingredients[2]);
restaurant.orderPasta(...ingredients);

objects
const newRestaurant = {foundedIn: 1990, ...restaurant, founder: 'Jeon'}
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'seekdang';
console.log(restaurantCopy.name);
console.log(restaurant.name);
restaurant.orderDelivery({
  time: '22:30',
  address: 'via del sole, 21',
  mainIndex:2,
  starterIndex:2,
})

restaurant.orderDelivery({
  address: 'via del sole, 21',
  starterIndex:0,
})

*/

/*

const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const {
    name: restaurantName, 
    openingHours: hours, 
    categories: tags
  } = restaurant;
console.log(restaurantName, hours, tags);

default values
const { menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

mutating variables
let a = 111;
let b = 999;
const obj = {a:23, b:7, c:14};
({a,b} = obj);
console.log(a,b);

nested objects
const {
  fri: {open: o, close:c},
} = openingHours;
console.log(o, c);

const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x,y,z] = arr;
console.log(x,y,z);
console.log(arr);

const [first, ,second] = restaurant.categories;
console.log(first, second); // Italian', 'Vegetarian'

let [main,secondary] = restaurant.categories;
console.log(main, secondary); // Italian', 'Vegetarian'

const temp= main;
main = secondary;
secondary = temp;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2,0);
console.log(starter, mainCourse);

nested destructuring
const nested = [2,4,[5,6]];
const [i, ,j] = nested;
console.log(i,j);
const [i, ,[j, k]] = nested;
console.log(i,j,k);

default values
const [p=1,q=1,r=1]=[8];
console.log(p,q,r);

*/


/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
*/

/*
Coding Challenge #2
Your tasks:
1. Loop over the game.scoredarrayandprinteachplayernametotheconsole, along with the goal number (Example: "Goal 1: Lewandowski")
2. Usealooptocalculatetheaverageoddandlogittotheconsole(Wealready studied how to calculate averages, you can go check if you don't remember)
3. Printthe3oddstotheconsole,butinaniceformattedway,exactlylikethis:
Odd of victory Bayern Munich: 1.33 Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names 😉
4. Bonus:Createanobjectcalled'scorers'whichcontainsthenamesofthe players who scored as properties, and the number of goals as the value. In this game, it will look like this:
     {
       Gnarby: 1,
       Hummels: 1,
       Lewandowski: 2
}
GOOD LUCK 😀

*/
/*
Coding Challenge #1
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game ('game' variable on next page). In this challenge we're gonna work with that data.
Your tasks:
1. Createoneplayerarrayforeachteam(variables'players1'and 'players2')
2. Thefirstplayerinanyplayerarrayisthegoalkeeperandtheothersarefield players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Createanarray'allPlayers'containingallplayersofbothteams(22 players)
4. Duringthegame,BayernMunich(team1)used3substituteplayers.Socreatea new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Basedonthegame.oddsobject,createonevariableforeachodd(called 'team1', 'draw' and 'team2')
6. Writeafunction('printGoals')thatreceivesanarbitrarynumberofplayer names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. Theteamwiththeloweroddismorelikelytowin.Printtotheconsolewhich team is more likely to win, without using an if/else statement or the ternary operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
GOOD LUCK 😀
*/
/*
//1.
for(const [i, player] of game.scored.entries()) console.log(`Goal ${i + 1}: ${player}`);

//2.
const odds = Object.values(game.odds) 
let avg = 0;
for(const odd of odds)
  avg += odd;
  avg /= odds.length
  console.log(avg);

//3.
for(const [team, odd] of Object.entries(game.odds)){
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`
  console.log(`Odd of ${teamStr} ${odd}`);
}
*/

/*

//1. 
const [players1, players2] = game.players;
console.log(players1, players2);

//2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//3. 
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];
console.log(players1Final);

//5. 
const {odds:{team1, x:draw, team2}} = game;
console.log(team1, draw, team2);

//6. 
const printGoals = function(...players){

  console.log(`${players.length} goals were scored`);
}

printGoals('Davies', 'Muller', 'Lewandowski');
printGoals('Davies', 'Muller');

printGoals(...game.scored)

//7.
team1 < team2 && console.log('Team1 is more likely to win');
team1 > team2 && console.log('Team2 is more likely to win');

*/