
//1
const prepareTea = () => 'greenTea';
const getTea1 = (numOfCups) => {
  const teaCups = [];
  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};
// Only change code below this line
const tea4TeamFCC = getTea1(40);
// Only change code above this line



//2 
const prepareGreenTea = () => 'greenTea';
const prepareBlackTea = () => 'blackTea';
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];
  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};
// Only change code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// Only change code above this line
console.log(tea4GreenTeamFCC, tea4BlackTeamFCC);



//3 
const Window = function(tabs) {
    this.tabs = tabs; // We keep a record of the array inside the object
  };
  Window.prototype.join = function(otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
  };
  Window.prototype.tabOpen = function(tab) {
    this.tabs.push('new tab'); // Let's open a new tab for now
    return this;
  };
  Window.prototype.tabClose = function(index) {
  // Only change code below this line
  const tabsBeforeIndex = this.tabs.slice(0, index); // Get the tabs before the tab
  const tabsAfterIndex = this.tabs.slice(index + 1); // Get the tabs after the tab
   this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together
  // Only change code above this line
  return this;
   };
  const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
  const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
  const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites
   // Now perform the tab opening, closing, and other operations
  const finalTabs = socialWindow
    .tabOpen() // Open a new tab for cat memes
    .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
    .join(workWindow.tabClose(1).tabOpen());
  console.log(finalTabs.tabs);




//4 
let fixedValue = 4;
function incrementer() {
  // Only change code below this line
  return fixedValue + 1;
 // Only change code above this line
}




//5 
let fixedValue1 = 4;
// Only change code below this line
function incrementer(number) {
  return number + 1;
// Only change code above this line
}




//6 
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];
// Change code below this line
function add(arr, bookName) {
  let newArr = [...arr];
  newArr.push(bookName); 
  return newArr;
}
// Change code above this line
// Change code below this line
function remove(arr, bookName) {
  let newArr = [...arr]; 
  if (newArr.indexOf(bookName) >= 0) {
    newArr.splice(newArr.indexOf(bookName), 1); 
    return newArr;
  }
}
var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');
console.log(bookList);
    // Change code above this line




//7 
// Only change code below this line
const ratings = watchList.map(getsData);
function getsData(element) {
   return {
    title: element['Title'],
    rating:element['imdbRating']
};
}
console.log(ratings);
// Only change code above this line




//8 
// Only change code below this line
for (let i = 0; i < this.length; i++) {
  newArray.push(callback(this[i], i, this));
}
// Only change code above this line



//9 
// Only change code below this line
function rating(titles) {
  return titles.imdbRating >= 8.0;
}
function titleRatings(element) {
  return { title: element.Title, 
          rating: element.imdbRating 
  };
}
const filteredList = watchList.filter(rating).map(titleRatings);
// Only change code above this line
console.log(filteredList);




//10 
Array.prototype.myFilter = function(callback) {
  const newArray = [];
  // Only change code below this line
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this) == true) {
      newArray.push(this[i]);
    }
  }
  // Only change code above this line
  return newArray;
};




//11 
function sliceArray(anim, beginSlice, endSlice) {
  // Only change code below this line
return anim.slice(beginSlice, endSlice);
  // Only change code above this line
}
const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);




//12 
function nonMutatingSplice(cities) {
    return cities.slice(0,3);
}




//13 
function nonMutatingConcat(original, attach) {
  // Only change code below this line
  return first.concat(second);
  // Only change code above this line
}
const first = [1, 2, 3];
const second = [4, 5];
nonMutatingConcat(first, second);



//14 
 function nonMutatingPush(original, newItem) {
  // Only change code below this line
   return original.concat(newItem);
   // Only change code above this line
 }
 const first = [1, 2, 3];
 const second = [4, 5];
 nonMutatingPush(first, second);



//15 
function getRating(watchList) {
  // Only change code below this line
  let a = watchList.filter((ele) => {
    return ele.Director === "Christopher Nolan";
  });
  let b = a.map((ele) => {
    return Number(ele.imdbRating);
  });

  let c=b.reduce((acc,ele) => {
    return acc+ele;
  });
  let getRating= c / a.length;
  return getRating;
// Only change code above this line
}
console.log(getRating(watchList));



//16 
const squareList = arr => {
  // Only change code below this line
  let a = arr.filter((ele) => {
    return (ele % 1 ===0 && ele > 0); 
  })
  let b = a.map((ele) => {
    return ele*ele;
  })
  return b;
  // Only change code above this line
};
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);



//17 
function alphabeticalOrder(arr) {
  // Only change code below this line
  arr.sort();
  return arr
  // Only change code above this line
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);



//18 
const globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line
return[...arr].sort((a,b) => a-b);
  // Only change code above this line
}
nonMutatingSort(globalArray);



//19 
function splitify(str) {
  // Only change code below this line
return str.split(/[\s,. -]+/);
 // Only change code above this line
}
splitify("Hello World,I-am code");



//20 
function sentensify(str) {
  // Only change code below this line
return str.split(/[\s,. -]+/).join(" ");
  // Only change code above this line
}
sentensify("May-the-force-be-with-you");



//21 
var globalTitle = "Winter Is Coming";
// Add your code below this line
function urlSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .join("-");
}
// Add your code above this line
var winterComing = urlSlug(globalTitle); 



//22 
function checkPositive(arr) {
  // Only change code below this line
return arr.every(val => val > 0);
  // Only change code above this line
}
checkPositive([1, 2, 3, -4, 5]);



//23
function checkPositive(arr) {
  // Only change code below this line
return arr.some(elem => elem > 0);
  // Only change code above this line
}
checkPositive([1, 2, 3, -4, 5]);



//24
function add(x) {
  // Only change code below this line
return function(y) {
    return function(z) {
      return x + y + z;
    };
  };
  // Only change code above this line
}
add(10)(20)(30);

