const { kitties } = require('./datasets/kitties');
const { clubs } = require('./datasets/clubs');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { nationalParks } = require('./datasets/nationalParks');
const { books } = require('./datasets/books');
const { weather } = require('./datasets/weather');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');






// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangeKittyNames() {
    const nameOfOrangeCats = kitties.reduce((acc,curr) => {
      if (curr.color ==='orange'){
        acc.push(curr.name);
      }
      return acc;
    },[]);
    // Return an array of just the names of kitties who are orange e.g.
    // ['Tiger', 'Snickers']
    const result = nameOfOrangeCats;
    return result;

    // Annotation:
    //reducing the list into a single array with only names if the color of the cat is orange
  },

  sortByAge() {
    // Sort the kitties by their age
    // array of sorted objects as the return value 

    const compare = (a,b) => {
      let comparision = 0; 
      if (a.age < b.age){
        comparision = 1;
      } else if ( a.age > b.age){
        comparision = -1;
      }
      return comparision;
    };

    const result = kitties.sort(compare);
    return result;

    // Annotation:
    // Write your annotation here as a comment
    // comparing the objects based on age. I want larger ages to come before smaller ages
    // if first element is less than second element, put second element in front 
    // if first element is larger than second element, put first in front 
    // ordering question 
  },

  growUp() {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc] 
    const plusTwo = kitties.map((cat)=> {
      cat.age += 2;
      return cat; 
    });
    const result = plusTwo;
    return result;
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs() {
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g.
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }

    const oneLoop = clubs.reduce((acc, curr) => {
      curr.members.map((person) => {
        if (acc[person]){
          acc[person].push(curr.club);
        } else {
          acc[person] = [curr.club];
        }
      });
      return acc;
    },{});

    const result = oneLoop;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};




// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // const studentsPerInstructor = mods.map((mod)=> {
    //   mod.studentsPerInstructor = mod.students/ mod.instructors;
    //   delete mod.students;
    //   delete mod.instructors;
    //   return mod;
    // });
    const studentsPerInstructor = mods.map(({ mod, students, instructors}) => {
      const studentsPerInstructor = students/instructors;
      return {mod,studentsPerInstructor};
    });
    const result = studentsPerInstructor;
    return result;

    // [{'mod': 1, 'studnetPerInstructor': 23}]
    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]

    // just want an array of objects and in each object, only have the flavor and instock keys and values
    // const flavorAndInStock = cakes.reduce((acc,curr)=> {
    //   acc.push({'flavor':curr.cakeFlavor, 'inStock':curr.inStock});
    //   return acc;
    // },[]);

    // option 1
    const flavorAndInStock = cakes.map(({cakeFlavor: flavor, inStock}) => ({ flavor, inStock}));

    // //option 2
    // const flavorAndInStock2 = cakes.map(cake => {
    //   const { cakeFlavor: flavor } = cake;
    //   return { flavor, inStock};
    // });

    // //option three
    // const flavorAndInStock3 = cakes.map(cake => ({ flavor: cake.cakeFlavor, inStock: cake.inStock}));


    const result = flavorAndInStock;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    const hasStock = cakes.filter((cake)=> cake.inStock >= 1);

    const result = hasStock;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    const totalCakes = cakes.reduce((acc, curr) => {
      return acc += curr.inStock;
    },0);

    const result = totalCakes;
    return result;

    // Annotation:
    // Write your annotation here as a comment
    // you need to define an initial value for reduce so i started the value at zero 
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    // iterate through the objects and make one big array 
    let single = [];
    const singleList = cakes.map((cake)=>{
      single = [...single, ...cake.toppings];
    });
    //above function creates a single array with duplicates
    //create an array with only unique ingredients 
    const uniqueToppings = [...new Set(single)];

    const result = uniqueToppings;
    return result;

    // Annotation:
    // Write your annotation here as a comment
    // the set data strucutre in es6 is great for finding unique values 
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // {
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2,
    //    ...etc
    // }

    
    const groceryList = cakes.reduce((acc,curr) => {
      curr.toppings.forEach((topping) => {
        if (acc[topping]){
          acc[topping] += 1;
        } else {
          acc[topping] = 1;
        }
      });

      return acc;
    },{});


    const result = groceryList;
    return result;
    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]
    const fontEndClasses = classrooms.filter(({program})=> program === 'FE');
    const result = fontEndClasses;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // {
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    const totalCapacities = classrooms.reduce((acc,curr)=> {
      if (curr.program === 'FE'){
        if (acc.feCapacity){
          acc.feCapacity += curr.capacity;
        } else {
          acc.feCapacity = curr.capacity;
        }
      }
      if (curr.program === 'BE'){
        if (curr.program === 'BE' && acc.beCapacity){
          acc.beCapacity += curr.capacity;
        } else {
          acc.beCapacity = curr.capacity;
        }
      }
      return acc;
    },{});


    const result = totalCapacities;
    return result;


    // Annotation:
    // Write your annotation here as a comment
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    const leastToGreatest = ((a,b) =>{
      let comparision = 0;
      if (a.capacity > b.capacity){
        comparision = 1;
      } else {
        comparision = -1;
      }
      return comparision;
    });

    const result = classrooms.sort(leastToGreatest) ;
    return result;


    // Annotation:
    // Write your annotation here as a comment
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: books from './datasets/books

const bookPrompts = {
  removeViolence() {
    // return an array of all book titles that are not horror or true crime. Eg:

    //  ['1984', 'The Great Gatsby', 'Lord of the Flies', 'Harry Potter and the Sorcerer\'s Stone',
    //   'The Hitchhiker\'s Guide to the Galaxy', 'Flowers for Algernon', 'Slaughterhouse-Five',
    //   'The Handmaid\'s Tale', 'The Metamorphosis', 'Brave New World', 'Life of Pi',
    //   'The Curious Incident of the Dog in the Night - Time', 'The Bell Jar',
    //   'Catch-22', 'Treasure Island']


    const noViolence = books.reduce((acc,curr) => {
      if (curr.genre !== 'Horror' && curr.genre !== 'True Crime'){
        acc.push(curr.title);
      }
      return acc;
    },[]);

    const result = noViolence;
    return result;


    // Annotation:
    // Write your annotation here as a comment

  },
  getNewBooks() {
    // return an array of objects containing all books that were
    // published in the 90's and 00's. Inlucde the title and the year Eg:

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]
    // const nintiesAndNewerBooks = books.map(({title,published: year}) => {
    //   if (year >= 1990){
    //     return {title,year};
    //   } 
    // });
    // const filterOut = nintiesAndNewerBooks.filter((book)=> book !== undefined);

    const list = [];
    const nintiesAndNewerBooks = books.forEach(({title,published: year}) => {
      if (year >= 1990){
        list.push({title,year});
      } 
    });
  
    // const filterOut = nintiesAndNewerBooks.filter((book)=> book !== undefined);
    const result = list;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }

};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/weather

const weatherPrompts = {
  getAverageTemps() {
    // return an array of all the average temperatures. Eg:
    // [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]

    const average = weather.map(({temperature: {low, high}})=> {
      const averageValue = (low + high)/ 2; 
      return averageValue; 
    });
  
    const result = average;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  findSunnySpots() {
    // Return an array of sentences of the locations that are sunny
    // and mostly sunny. Include the location and weather type. Eg:
    // [ 'Atlanta, Georgia is sunny.',
    // 'New Orleans, Louisiana is sunny.',
    // 'Raleigh, North Carolina is mostly sunny.' ]
    const sunnyAndPartly = [];
    const sentenceBuilding  = weather.forEach(({location,type}) => {
      if (type === 'mostly sunny' || type === 'sunny'){
        sunnyAndPartly.push(`${location} is ${type}.`);
      } 
    });
    const result = sunnyAndPartly;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },


  findHighestHumidity() {
    // Return the location with the highest humidity. Eg:
    // {
    //   location: 'Portland, Oregon',
    //   type: 'cloudy',
    //   humidity: 84,
    //   temperature: { high: 49, low: 38 }
    // }
    let most = 0;
    let locationObj = {};
    const humid = weather.forEach((location) => {
      if (location.humidity > most){
        most = location.humidity;
        locationObj = location;
      }
    });

    const result = locationObj;
    return result;

    // Annotation:
    // Write your annotation here as a comment
    // keep track of most humid locations object and assign the temp to the highest value
    //return the object of the most humid location

  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {
  getParkVisitList() {
    /// Return an object containing the names of which parks I need to visit
    // and the ones I have already visited eg:
    // {
    //   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
    //   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
    //}
    const visitAndNotVisit = nationalParks.reduce((acc,curr) => {
      if (curr.visited === false ){
        acc.parksToVisit.push(curr.name);
      } else {
        acc.parksVisited.push(curr.name);
      }
      return acc; 
    },{'parksToVisit':[],parksVisited:[]});

    const result = visitAndNotVisit;
    return result;
    // Annotation:
    // Write your annotation here as a comment
  },

  getParkInEachState() {
    // Return an array of objects where the key is the state and the value is its National Park
    // eg: [ { Colorado: 'Rocky Mountain' },
    // { Wyoming: 'Yellowstone' },
    // { Montana: 'Glacier' },
    // { Maine: 'Acadia' },
    // { Utah: 'Zion' },
    // { Florida: 'Everglades' } ]
    // const list = []; 
    // const statesAndParks = nationalParks.forEach(({location,name}) => {
    //   list.push({ [location] : name});
    // });
    // console.log(list)
    const stateParks = nationalParks.map(({location,name}) => {
      return { [location] : name};
    });

    const result = stateParks;
    return result;
  },

  getParkActivities() {
    // Return an array of all the activities I can do
    // in a National Park. Make sure to exclude duplicates. eg:
    // [ 'hiking',
    //   'shoeshoing',
    //   'camping',
    //   'fishing',
    //   'boating',
    //   'watching wildlife',
    //   'cross-country skiing',
    //   'swimming',
    //   'bird watching',
    //   'canyoneering',
    //   'backpacking',
    //   'rock climbing' ]

    const combine = nationalParks.map(({activities})=> {
      return activities;
    });
  
    const unique = [... new Set(combine.flat())];

    const result = unique;
    return result;

    // Annotation:

    // iterate through list and combine all of the activities into a single array. 
    //flatten the nested arrays so that they are all elements in the same array
    // then use set to only keep the unique values 
  }
};



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40

    const totalBeers = breweries.reduce((acc,curr)=> {
      const { beers } = curr;
      acc += beers.length;
      return acc;
    },0);
    const result = totalBeers;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    const nameAndBeerCount = breweries.map(({name, beers}) => {
      const beerCount = beers.length;
      return {name,beerCount};
    });

    const result = nameAndBeerCount;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    let highestAlcoholBeer = {};
    let highestAbv= 0;

    const findHighest = breweries.forEach(({beers})=> {
      beers.forEach((beer)=> {
        if (beer.abv > highestAbv){
          highestAbv = beer.abv;
          highestAlcoholBeer = beer;
        }
      });
      return highestAlcoholBeer;
    });
    const result = highestAlcoholBeer;
    return result;
    // use sort instead of this strategy - sort sort sort 

    // Annotation:
    // Write your annotation here as a comment
    // keep track of beer object that has hieghest abv, keep track of abv value 
    //return the abv value that is highest
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g.
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    const teachers = []; 
    const instructorStudnet = instructors.forEach((instructor)=>{
      cohorts.forEach(({module, studentCount}) => {
        if (instructor.module === module){
          teachers.push( {['name']: instructor.name, ['studentCount']:studentCount } );
        }
      });
    });


    const result = teachers;
    return result;
    // Annotation:
    // Write your annotation here as a comment
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // {
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    const mod = {};
    const total = instructors.forEach(({module}) => {
      if (mod[module]){
        mod[module] += 1;
      } else {
        mod[module] = 1;
      }
    });
    const ratio = {}; 
    const match = cohorts.forEach(({cohort, module, studentCount}) => {
      for (const key in mod){
        if (key == module){
          ratio[`cohort${cohort}`] = (studentCount / mod[key]);
        }
      }
    });
    const result = ratio;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },


  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }

    const teachers = instructors.reduce((acc,curr) => {
      let {name} = curr;
      acc[name]= [];
      return acc;
    },{});
    

    //add current module that they are already teaching to array
    // const modNow = instructors.forEach(({module,name}) => {
    //   teachers[name].push(module); 

    // });

    const cohortContent = cohorts.reduce((acc,curr) => {
      const {module, curriculum} = curr; 
      acc[module] = curriculum;
      return acc;
    },{});
    //create data structure where I can compare keys values to instructor teaches values 

    const containsSubject = instructors.map(({name, teaches}) => {
      teaches.map((skill) => {
        // iterate and compare cohort content 
        //if contains is true, add cohort number to teachers data structure 
        for(const key in cohortContent){
          if (cohortContent[parseInt(key)].includes(skill) && !teachers[name].includes(parseInt(key))){
            teachers[name].push(parseInt(key));
          }
        }
      });
    });
    //refactor, first working solution
  
    const result = teachers;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // {
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    //iterate through cohorts then iterate through instructors 
    // create a key if it doesnt exist and see if instructors.teaches.includes(key)
    // if it does add name to the array

    const classes = cohorts.reduce((acc,curr) => {
      const { curriculum } = curr;
      curriculum.map( (subject) => {
        if (!acc[subject]){
          acc[subject] = [];
        }
      });
      return acc;
    },{});
    // in data structure we like 

    // Write your annotation here as a comment

    for (const key in classes){
      instructors.forEach(({name, teaches}) => {
        if (teaches.includes(key)){
          classes[key].push(name);
        }
      });
    }
  


    const result = classes;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------




// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]
    const bossAndLoytalty = [];

    for (const key in bosses){
      bossAndLoytalty.push({['bossName']: bosses[key].name, ['sidekickLoyalty']: 0 });
    }
    // now we have data structure and value 
    const loyalty = sidekicks.forEach((sideKick) => {
      bossAndLoytalty.forEach((boss) => {
        if (sideKick.boss == boss.bossName ){
          boss.sidekickLoyalty += sideKick.loyaltyToBoss;
        }
      });
    });


    const result = bossAndLoytalty;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the stars that appear in any of the constellations
    // listed in the constellations object e.g.
    // [
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' }
    // ]

    let allTheStars = [];
    for (const key in constellations){
    //  console.log(constellations[key].stars);
      allTheStars = [...allTheStars, ...constellations[key].stars];
    }
    // onne large array, iterate and try and match with star names
    const starsIn = [];
    allTheStars.forEach((name) => {
      stars.forEach((star)=>{
        if (star.name === name){
          starsIn.push(star);
        }
      });
    });


    const result = starsIn;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

  
    const colors = stars.reduce((acc,curr) => {
      //if the color key exisits, 
      const { color } = curr;
      if (acc[color]){
        acc[color].push(curr);
        // add the object to the array of objects
      } else {
        // else create the color key and add the object in the values array        
        acc[color] = [curr];
      }
      return acc;
    },{});


    const result = colors;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
  // Annotation:
  // Write your annotation here as a comment


  constellationsStarsExistIn() {
    // Return an array of the names of the constellations that the brightest stars are part of e.g.

    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra",
    //    "Canis Minor",
    //    "The Plow",
    //    "Orion",
    //    "The Little Dipper" ]


    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113
    // iterate through characters weapons list
    // at each weapon, go to the weapon array and get the damage value add to final value
    let total = 0;
    const characterWeapons = characters.map(({weapons: wep }) => {
      wep.forEach((weap)=> {
        for(const key in weapons){
          if (weap === key){
            total += weapons[key].damage;
          }
        }
      });
    });

    const result = total;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object.
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }

    const movieAndDinoCount = movies.reduce((acc,curr)=> {
      const {title, dinos} = curr;
      acc[title] = dinos.length;
      return acc;
    },{});



    const result = movieAndDinoCount;
    return result;


    // Annotation:
    // Write your annotation here as a comment
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      {
        'Steven Spielberg':
          {
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37
          },
        'Joe Johnston':
          {
            'Jurassic Park III': 44
          },
        'Colin Trevorrow':
          {
            'Jurassic World': 56
           },
        'J. A. Bayona':
          {
            'Jurassic World: Fallen Kingdom': 59
          }
      }
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      },
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts
};
