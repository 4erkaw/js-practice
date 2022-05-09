//   function creatObject(object){}
//   const object = {};

// const friends = ["Mango", "Kiwi", "Poly", "Ajax"];
// console.table(friends);

// friends[3] = 123;
// console.table(friends);

// const a = [1, 2, 3];

// for(let elem of a){
//   console.log(elem)
// }

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];

// const total = function (arr) {
//   let sum = 0;
//   for(const elem of arr){
//      sum += elem;
//   }
//   return sum
// }
// console.log(total([1, 2, 3]))
// console.log(total([5, 10, 15, 20]))
// console.log(total([100, 200, 300]))
// for (let elem of cart){
// sum += elem;
// }

// for(let i = 0; i < cart.length; i += 1){
//   sum += cart[i];
//   console.log(sum)
// }
// console.log(sum)

// сумма всех чётных чисел в массиве
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let total = 0;
// // for(let value of numbers){
// //   if(value % 2 === 0){
// //     total += value;
// //   }

// // }

// for(let i = 0; i < numbers.length; i += 1){
//   if(numbers[i] % 2 === 0){
//     total += numbers[i]
//   }
// }

// console.log(total);

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'awfgdsgsags1']
// const loginToFind = 'poly1scute';

// const message = logins.includes(loginToFind) ? console.log(`User found`) : console.log(`User not found`);

// const findLogin = function (allLogins,loginToFind) {
// for(const login of allLogins){
//   if(allLogins.includes(loginToFind)){
//  return `User ${loginToFind} found`
// }
// return `User ${loginToFind} not found`;
// return allLogins.includes(loginToFind) ? `User ${loginToFind} found` : `User ${loginToFind} not found`;

// console.log(findLogin(logins,'poly1scute'));
// console.log(findLogin(logins,'k1widab3st'));
// console.log(findLogin(logins,'jamal'));
// for(let i = 0; i < logins.length; i += 1){
//   if(logins[i] !== loginToFind){
//     console.log(`User ${logins[i]} not found`);
//     continue;
//   }
//   console.log(`User ${logins[i]} found`)
// }

// for(const login of logins){
//   if(login !== loginToFind){
//     console.log(`User ${login} not found`);
//     continue
//   }
//   console.log(`User ${login} found`)
//   break
// }

// for(const login of logins){
//   if (!login.includes(loginToFind)){
//   console.log(`User ${login} not found`)
//   continue
// }
// console.log(`User ${login} found`)
// }

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let biggestValue = numbers[0];
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < lowestValue) {
//     lowestValue = numbers[i];
//   }
// }

// for(const number of numbers){
//   if(number > biggestValue)
//   biggestValue = number;
// }

// console.log(biggestValue);
// let stringFriends = '';
// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// for(const friend of friends){
//   stringFriends += friend+',';
// }
// stringFriends = stringFriends.slice(0, stringFriends.length - 1)
// console.log(stringFriends)
// const string = friends.join()
// console.log(string)

// const string = 'JavaScript';
// const arr = string.split('')
// let invert = '';

// for(const elem of arr){
//   const isEqual = elem === elem.toLowerCase()
// invert += isEqual ? elem.toUpperCase() : elem.toLowerCase()
// }
// for(const elem of arr){
//   if(elem === elem.toLowerCase()){
//   invert += elem.toUpperCase();
//   continue;
// }
//   invert += elem.toLowerCase();
// }

// console.log(invert)

// const title = 'Top 10 benefits of React Framefork';
// const titleLowCase = title.toLowerCase();
// const titleSplit = titleLowCase.split(' ');
// const result = titleSplit.join('-')
// const slug = title.toLowerCase().split(' ').join('-')
// console.log(slug);

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;
// const numbers = array1.concat(array2)
// for(const elem of numbers){
//   total += elem;
// }
// console.log(total)

// const cards = ['Card-1', 'Card-2', 'Card-3', 'Card-4', 'Card-5']
// const splice = cards.splice(2, 1, 'Card-6');
// console.log(cards)

// const logItems = function (items) {
//   for(const item of items){
//     console.log(item)
//   }
// }

// logItems(['Mango', 'Kiwi', 'Poly', 'Ajax'])
// logItems([1, 2, 3, 4, 5])
// logItems(['Keyboard', 'Headphones', 'Clock'])

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };

//   for (const key in book) {
//     // Если это собственное свойство - выполняем тело if
//     if (book.hasOwnProperty(key)) {
//       console.log(key);
//       console.log(book[key]);
//     }

//     // Если это не собственное свойство - ничего не делаем
//   }

// const feedback = {
//     good: 5,
//     neutral: 10,
//     bad: 3,
// };
// const keys = Object.keys(feedback);
// const values = Object.values(feedback);
// let totalFeedback = 0;

// console.log(keys)
// console.log(values)

// const friends = [
//   { name: "Mango", online: false },
//   { name: "Kiwi", online: true },
//   { name: "Poly", online: true },
//   { name: "Ajax", online: false },
// ];

// const getFriendsByOnlineStatus = function (allFriends) {
//     const stats = {
//         online: [],
//         offline: [],
//     };

//     for(const friend of friends){
//         if(friend.online){
//             stats.online.push(friend)
//             continue
//         }
//         stats.offline.push(friend)
//     }

//     return stats;
// }

// console.log(getFriendsByOnlineStatus(friends))
// const names = []
// const getAllNames = function (allFriends) {
//     for(const friend of allFriends){
//         if(!friend.online)
//         names.push(friend)
//     }
//     return names
// }
// console.log(names)
// console.log(getAllNames(friends));

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];

//   const hexColors = [];
//   const rgbColors = [];
//   // Change code below this line
//   for(const color of colors){
//     console.log(color)
//   hexColors.push(color.hex)
//   rgbColors.push(color.rgb)
//   }
//   console.log(hexColors)
//   console.log(rgbColors)

// const users = [
//   { name: 'Poly', age: 7, mood: 'happy' },
//   { name: 'Mango', age: 4, mood: 'blissful'},
//   { name: 'Ajax', age: 3, mood: 'tired' }
// ];

// function getAllPropValues(arr, prop) {
//   for ( let i = 0; i < users.length; i += 1 ) {
//     let arr = Object.entries(users[i]);

//     users[i] = arr;

//     const index = users[i][0].indexOf(prop);
//     let newArr = [];

//     newArr.push(users[i][0][1]);

//     console.log(newArr);
//   }

//   return newArr;
// }

// // Вызовы функции для проверки
// console.log(
//   getAllPropValues(users, 'name')
// ); // ['Poly', 'Mango', 'Ajax']

// console.log(
//   getAllPropValues(users, 'mood')
// ); // ['happy', 'blissful', 'tired']

// console.log(
//   getAllPropValues(users, 'active')
// ); // []

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
// let total = 0
// for(const product of products){
//   if(product.name === productName){
//     total = product.price * product.quantity
//     console.log(total)
//     return total;
//   }
// }

// return 0
//   // Пиши код выше этой строки
// }

// calculateTotalPrice('Radar');


// const cart = {
//   items:[],
//   getItems(){
//     return this.items;
//   },
//   add(product){
//     const {items} = this;

//     for(const item of items){
//       if(item.name === product.name){
//         item.quantity +=1;
//         return;
//       }
//     } 
//     const newProduct ={
//       ...product,
//       quantity: 1,
//     }
//     this.items.push(newProduct);
//   },
//   remove(productName){
//     const {items} = this;
//     for (let i = 0; i < items.length; i += 1){
//  const {name} = items[i]
//       if(productName === name){
//         items.splice(i, 1)
//       }
//     }
    
//   },
//   clear(){
//     this.items = [];
//   },
//   countTotalPrice(){
//     const {items} = this
//     let total = 0
//     for(const {price, quantity} of items){
//       total += price * quantity;
//     }
    
//     return total
//   },
//   increaseQuantity(){
//     const {items} = this
//     console.log(items)
// for(const item of items){
//   if(item.quantity !== 0){
//     item.quantity += 1
//   }
//   }
// },
//   decreaseQuantity(){},
// };

// cart.add({name: '1', price:50});
// cart.add({name: '2', price:60});
// cart.add({name: '3', price:60});
// cart.add({name: '3', price:60});
// cart.add({name: '3', price:60});
// cart.add({name: '4', price:110});

// // console.table(cart.getItems())

// // cart.remove('2')

// console.log(cart.getItems());

// console.log(cart.countTotalPrice());

// cart.clear()
// console.log(cart.increaseQuantity())


// function findMatches(numbers,...args) {
//   const matches = []; // Don't change this line
// for(let i = 0; i < numbers.lenght; i += 1){
//     if(numbers[i].includes(...args)){
//     matches.push(numbers[i])
//   }
//   }


//   return matches;
// }

// console.log(findMatches(([1, 2, 3, 4, 5], 1, 8, 2, 7)));

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
// for(const potion of this.potions){
// if (potion.name.includes(newPotion.name)) {
//       return `Error! Potion ${newPotion} is already in your inventory!`;
  
//     }
// }   
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     // const index = this.potions.indexOf(potionName)
   
//     for(const potion of this.potions){
//       const index = potion.name.indexOf(potionName)
//       console.log(index)
//     if (potion.name.includes(potionName)) {
//       return `Potion ${potionName} is not in inventory!`;
  
//     }
//     return `blabla`
//     // this.potions.splice(potionIndex, 1);
//   }
// },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
// };

// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }))
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.removePotion({ name: "Speed potion", price: 460 }));

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//  addPotion(newPotion) {
// for(const potion of this.potions){
// if (potion.name.includes(newPotion.name)) {
//       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     }
// }   
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
// for(let i = 0; i < this.potions.length; i += 1){
//     if (potionName === this.potions[i].name) {
//       this.potions.splice(i,1)
//       return this.potions
//       }
// }
//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     for(const potion of this.potions){
//     if (oldName === potion.name) {
//       potion.name = newName;
//       return this.potions
// }
  
//   }
//   return `Potion ${oldName} is not in inventory!`;
//   // Change code above this line
// },
// };

// console.log(atTheOldToad.removePotion('Dragon breath'))
// console.log(atTheOldToad.updatePotionName(('Stone skin', 'Invulnerability potion')))

// // containsValue([2, 5, 8], 2)  // returns true
// // containsValue([12, 4, 6], 5)  // returns false

// const containsValue = (arr, value) => arr.forEach(item => console.log(item === value));

// const pizzaPalace = {
//     pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//     order(pizzaName,callback1,callback2) {
//       if(!this.pizzas.includes(pizzaName)){
//         return callback2(pizzaName)
//       }
//       return callback1(pizzaName)
//     },
//   };
//   // Change code above this line
  
//   // Callback for onSuccess
//   function makePizza(pizzaName) {
//     return `Your order is accepted. Cooking pizza ${pizzaName}.`;
//   }
  
//   // Callback for onError
//   function onOrderError(error) {
//     return `There is no pizza with a name ${error} in the assortment.`;
//   }
  
//   // Method calls with callbacks
//   console.log(pizzaPalace.order('Smoked', makePizza, onOrderError))
//   console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
//   console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
//   console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));

// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
//     // Change code below this line
  
//    orderedItems.forEach(number => totalPrice += number)
  
//     // Change code above this line
//     return totalPrice;
//   }
//   console.log(calculateTotalPrice([12, 85, 37, 4]))
  
// function filterArray(numbers, value) {
//     const filteredNumbers = [];
  
//     numbers.forEach((number) => {
//         if(number > value){
//             filteredNumbers.push(number)
//         }
//       });
//     return filteredNumbers;
//   }
//   console.log(filterArray([1, 2, 3, 4, 5], 3))

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];

//   firstArray.forEach(number => {
// if(secondArray.includes(number))
// commonElements.push(number)
//   })

//   return commonElements;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]))

// const calculateTotalPrice = orderedItems => {
  
//   let totalPrice = 0;
//   orderedItems.forEach(item => totalPrice += item)

// return totalPrice
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]))

// function changeEven(numbers, value) {
//   const newArr = [];
//  numbers.forEach((number,index) => {
// if(number % 2 === 0){
//   number += value
// }
// newArr.push(number)
//  })
//   return newArr
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10))

// const getUserNames = users => {
    
//   users.map(item => item.name);
//   return users.map(item => item.name);
//     };




// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((avarage, player) => avarage + player.playtime / player.gamesPlayed, 0);
// console.log(totalAveragePlaytimePerGame)

// const users = [{
//   name: "Moore Hensley",
//   email: "moorehensley@indexia.com",
//   eyeColor: "blue",
//   friends: ["Sharron Pace"],
//   isActive: false,
//   balance: 2811,
//   skills: ["ipsum", "lorem"],
//   gender: "male",
//   age: 37,
// },
// {
//   name: "Sharlene Bush",
//   email: "sharlenebush@tubesys.com",
//   eyeColor: "blue",
//   friends: ["Briana Decker", "Sharron Pace"],
//   isActive: true,
//   balance: 3821,
//   skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//   gender: "female",
//   age: 34,
// },
// {
//   name: "Ross Vazquez",
//   email: "rossvazquez@xinware.com",
//   eyeColor: "green",
//   friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//   isActive: false,
//   balance: 3793,
//   skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//   gender: "male",
//   age: 24,
// },
// {
//   name: "Elma Head",
//   email: "elmahead@omatom.com",
//   eyeColor: "green",
//   friends: ["Goldie Gentry", "Aisha Tran"],
//   isActive: true,
//   balance: 2278,
//   skills: ["adipisicing", "irure", "velit"],
//   gender: "female",
//   age: 21,
// },
// {
//   name: "Carey Barr",
//   email: "careybarr@nurali.com",
//   eyeColor: "blue",
//   friends: ["Jordan Sampson", "Eddie Strong"],
//   isActive: true,
//   balance: 3951,
//   skills: ["ex", "culpa", "nostrud"],
//   gender: "male",
//   age: 27,
// },
// {
//   name: "Blackburn Dotson",
//   email: "blackburndotson@furnigeer.com",
//   eyeColor: "brown",
//   friends: ["Jacklyn Lucas", "Linda Chapman"],
//   isActive: false,
//   balance: 1498,
//   skills: ["non", "amet", "ipsum"],
//   gender: "male",
//   age: 38,
// },
// {
//   name: "Sheree Anthony",
//   email: "shereeanthony@kog.com",
//   eyeColor: "brown",
//   friends: ["Goldie Gentry", "Briana Decker"],
//   isActive: true,
//   balance: 2764,
//   skills: ["lorem", "veniam", "culpa"],
//   gender: "female",
//   age: 39,
// }]

// const getTotalBalanceByGender = (users, gender) => users.reduce((total,user) => user.gender === gender ? total + user.balance : total, 0)
// console.log(getTotalBalanceByGender(users, `male`));

// const getTotalBalanceByGender = (users, gender) => users.filter(users => users.gender === gender);
// console.log(getTotalBalanceByGender(users, `male`));
// const getTotalFriendCount = users => users.reduce((total,user) => total += user.friends.length, 0);

// console.log(getTotalFriendCount)

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = books.sort((a,b) => a.title.localeCompare(b.title))
// console.log(sortedByAuthorName)



// class Storage{
//   constructor(items){
//    console.log(this)
//   this.items = items
//   }
//   getItems(){
//     return this.items;
//   }
//   addItem(newItem){
//    this.items.push(newItem);
//   }
//   removeItem(itemToRemove){
//     const index = this.items.indexOf(itemToRemove)
//     this.items.splice(index,1)
//   }
// }
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage)
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// class StringBuilder{
//   constructor(initialValue){
//       this.value = initialValue;
//   }
//   getValue(){
//       return this.value
//   }
//   padEnd(str){
//     this.value = this.value + str
//   }
//   padStart(str){
//     this.value = str + this.value 
//   }
//   padBoth(str){
//     this.value = str +this.value + str;
//   }
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// class Car {
//   static MAX_PRICE = 20000;
 
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if(newPrice < this.MAX_PRICE){
//     this.#price = newPrice
//   }
//   return this.#price
// }

// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//     this.blacklistedEmails = [];
//   }
// blacklist(email){
//   this.blacklistedEmails.push(email)
// }
// isBlacklisted(email){
//   if(this.blacklistedEmails.includes(email)){
//     return true
//   }
//   return false
// }
//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true
