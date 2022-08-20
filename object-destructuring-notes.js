const teaOrder = {
    variety: 'Oolong',
    teaName: 'Winter Sprout',
    origin: 'taiwan',
    price: 12.99,
    hasCaffeine: true,
    quantity: 3,
    brewTemp: 180
};

//extract values the old way
// const price = teaOrder.price;
// const quantity = teaOrder.quantity;
// const teaName = teaOrder.teaName;

//a better (shorter) way
const { price, quantity, teaName } = teaOrder; 
//price: 12.99
//quantity: 3
//teaName: 'Winter Sprout'

const {origin} = teaOrder;

//with rest
const {variety, ...others} = teaOrder; //will make var called others w/other properties

const newTea = {...teaOrder}; //this is spread, create new obj spreading values into it

//default values
const { brewTemp = 175} = teaOrder; //when brewTemp is undefined, set it to 175

//renaming variables
const {teaName: tea} = teaOrder;
//combine 
const {brewTemp: temp = 175} = teaOrder; //rename brewTemp to temp and set default value

//fn use default val for destructuring
function checkout(tea) {
    const {quantity = 1, price} = tea; //assume that the number is 1 if undefined
    return quantity * price;
}

const order1 = {
    variety: 'green',
    teaName: 'silver needle',
    origin: 'taiwan',
    price: 12.99,
    hasCaffeine: true
};

//array destructuring
//done based off of position, use square brackets
const students = [
    {name: 'Drake', gpa: 4.6},
    {name: 'Henrietta', gpa: 4.4},
    {name: 'Tung', gpa: 4.0},
    {name: 'Harry', gpa: 3.8},
    {name: 'Ant', gpa: 3.2}
];

const [topStudent, secondBest, , fourth] = students; //will store based on order ; skips third (blank comma space), then fourth student
const [first, ...losers] = students;
const fifth = students[4]; //this is occasionally cleaner than skipping a bunch of elements

//destructuring Functions
//most commonly in parameter list
const order2 = {
    variety: 'green',
    teaName: 'silver needle',
    origin: 'taiwan',
    price: 12.99,
    hasCaffeine: true,
    quantity: 4
}

function getTotal({quantity: qty=1, price}) {
    return qty * price;
} //extract inside argument parens instead of within function!

const longJumpResults = ['Tammy', 'Jessica', 'Violet'];
const swimMeetResults = ['Japan', 'France', 'Chile'];

//assume they are in order of place (1,2,3)

function awardMedals([gold, silver, bronze]){
    return {
        gold, silver, bronze
    };
}
//awardMedals(longJumpResults) 
//{gold: 'Tammy', silver: 'Jessica', bronze: 'Violet'}

//nested destructuring
//nest braces inside original destructuring statement
const movie = {
    title: 'Amadeus',
    year: '1984',
    rated: {
        rating: 'R',
        advisory: 'Rated R for brief nudity'
    },
    ratings: [
        {source: 'IMDB', value: '8.3/10'},
        {source: 'Rotten Tomatoes', value: '93%'},
        {source: 'Metacritic', value: '88/100'}
    ],
    versions: [
        {version: 'original release', runtime: 161},
        {version: "director's cut", runtime: 180}
    ]
}
//want to extract rating & advisory
const {rated} = movie;
//rated -> {rating: 'R', advisory: 'Rated R for brief nudity'}
const {rating, advisory} = rated;
//rewrite as:
const {rated: {rating, advisory}} = movie;
//want to extract ratings
const {ratings: [imdb, tomatoes]} = movie;

//to get the value
const {
    ratings: [
        {value: imdbRating}, 
        {value: rtRating}, 
        {value: metaRating}
    ], 
    
    versions: [
        {runtime: originalRunTime},
        {runtime: directorsCutRunTime}
    ]
} = movie;
//metaRating --> '88/100'
//imdbRating --> '8.3/10'
//directorsCutRunTime--> 180

//you can do the same kind of nested destructuring in parameter lists, but not SUPER NESTED!!

//Destructuring Swap, common scenario
//swapping values between multiple variables

let delicious = 'mayonnaise';
let disgusting = 'whipped cream';
//need to 'right' this 'wrong'

let temporary = delicious; //this third variable is only used once to swap something
delicious = disgusting;
disgusting = temp;

//instead: destructure!
let both = [delicious, disgusting];
[disgusting, delicious] = both; //this has the effect of swapping the values

//imagine we are doing this...
let [a, b] = ['mayonnaise', 'whipped cream'];

//more succinct is the swap syntax
[disgusting, delicious] = [delicious, disgusting]; //need to use let already, this basically reassigns them (does not work w/const)