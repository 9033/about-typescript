// interface (class, object)
interface user {
  name: string;
  id: number;
}

const account: user = {
  name: "김밥",
  id: 0,
};

console.log(account);

// union (enum)
type presidents = "돈까스" | "알밥" | "볶음밥"

function showPresidents (name: presidents | presidents[]) {
  console.log(name);
}

showPresidents("볶음밥");

const best: presidents = "돈까스";
const good: presidents = "알밥";
const names = [best, good];
showPresidents(names);

function showPresident (name: presidents): presidents {
  console.log(name);
  return name;
}
showPresident("돈까스");

// structural type system
interface Point {
  x: number;
  y: number;
}

const logPoint = (p: Point) => `${p.x}, ${p.y}`;
const point = {x: 12, y: 26};
console.log(logPoint(point));

const targetPoint = {
  x: 1, y: 2
};

console.log(logPoint(targetPoint));