"use strict";
const account = {
    name: "김밥",
    id: 0,
};
console.log(account);
function showPresidents(name) {
    console.log(name);
}
showPresidents("볶음밥");
const best = "돈까스";
const good = "알밥";
const names = [best, good];
showPresidents(names);
function showPresident(name) {
    console.log(name);
    return name;
}
showPresident("돈까스");
const logPoint = (p) => `${p.x}, ${p.y}`;
const point = { x: 12, y: 26 };
console.log(logPoint(point));
const targetPoint = {
    x: 1, y: 2
};
console.log(logPoint(targetPoint));
