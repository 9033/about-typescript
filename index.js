"use strict";
var account = {
    name: "김밥",
    id: 0,
};
console.log(account);
function showPresidents(name) {
    console.log(name);
}
showPresidents("볶음밥");
var best = "돈까스";
var good = "알밥";
var names = [best, good];
showPresidents(names);
function showPresident(name) {
    console.log(name);
    return name;
}
showPresident("돈까스");
var logPoint = function (p) { return p.x + ", " + p.y; };
var point = { x: 12, y: 26 };
console.log(logPoint(point));
