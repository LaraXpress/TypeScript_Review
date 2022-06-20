import { Player } from './classes/Player.js';

const sakib = new Player('Sakib Al Hasan', 35, 'Bangladesh');
const sujon = new Player('Sumon Hasan', 25, 'Pakistan');
const players : Player[] =[];

players.push(sujon);
players.push(sakib);
console.log(players);
sakib.country = "United States of America (USA)";
sakib.age = 500;
console.log(sakib.country);
console.log(sakib.age);

console.log(sakib);
console.log(sujon);
