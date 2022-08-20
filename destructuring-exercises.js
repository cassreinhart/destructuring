//object destructuring 1
//return 8 & 1846

//object destructuring 2
//return {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1959}

//object destructuring 3
//return "Your name is Alejandro and you like purple"
//return "Your name is Melissa and you like green"
//return "Your name is undefined and you like green"

//array destructuring 1
//return "Maya"
//return "Marisa"
//return "Chi"

//array destructuring 2
//log "Raindrops on roses"
//log "whiskers on kittens"
//log ["bright coppper kettles", "warm woolen mittens", "brown paper packages tied up with strings"]

//array destructuring 3
//print [10, 30, 20]

//ES2015 Object Destructuring
const {a, b} = obj.numbers;

//es2015 array swap
[arr[0], arr[1]] = [arr[1], arr[0]];

function raceResults(array) {
    const [first, second, third, ...rest] = array;
    return {
        first,
        second,
        third,
        rest
    }
}

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest});