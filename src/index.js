import foods from './foods';
import {choice, remove} from './helpers';

let fruit = choice(foods)

console.log(`i'd like one ${fruit}, please`);
console.log(`here you go: ${fruit}`)
console.log(`delicious! may i have another`)
let remaining = remove(fruit, foods)

console.log(`i'm sorry, we're all out. we have ${remaining.length} left.`)