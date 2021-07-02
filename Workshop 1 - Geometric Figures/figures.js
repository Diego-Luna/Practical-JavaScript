// Square code
console.group("Square");

function squarePerimeter(side) {
  return side * 4;
}

function squareArea(side) {
  return side * side;
}

console.groupEnd();

// Triangle code
console.group("Triangle");

function trianglePerimeter(side1, side2, base) {
  return side1 + side2 + base;
}

function triangleArea(base, height) {
  return (base * height) / 2;
}

console.groupEnd();

// Circle code
console.group("Circle");

function diameterCircle(radius) {
  return radius * 2;
}

const pi = Math.PI;
console.log("Pi: " + pi);

function circlePerimeter(radius) {
  const diameter = diameterCircle(radius);
  return diameter * pi;
}

function circleArea(radius) {
  return radius * radius * pi;
}

console.groupEnd();


function calculatePerimeterSquare() {
  const input = document.getElementById("InputSquare");
  const value = input.value;

  const perimeter = squarePerimeter(value);
  alert(perimeter);
}
function calculateAreaSquare() {
  const input = document.getElementById("InputSquare");
  const value = input.value;

  const perimeter = squareArea(value);
  alert(perimeter);
}