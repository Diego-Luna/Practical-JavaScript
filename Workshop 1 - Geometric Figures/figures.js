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
  const Side1 = parseInt(side1);
  const Side2 = parseInt(side2);
  const Base = parseInt(base);

  return Side1 + Side2 + Base;
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

function calculatePerimeterCircle() {
  const input = document.getElementById("InputCircle");
  const value = input.value;

  const perimeter = circlePerimeter(value);
  alert(perimeter);
}
function calculateAreaCircle() {
  const input = document.getElementById("InputCircle");
  const value = input.value;

  const perimeter = circleArea(value);
  alert(perimeter);
}

function calculatePerimeterTriangle() {
  // const input = document.getElementById("InputCircle");
  // const value = input.value;

  const inputTriangleSide1 = document.getElementById("InputTriangleSide1");
  const inputTriangleSide2 = document.getElementById("InputTriangleSide2");
  const inputTriangleBase = document.getElementById("InputTriangleBase");

  const valueTriangleSide1 = inputTriangleSide1.value;
  const valueTriangleSide2 = inputTriangleSide2.value;
  const valueTriangleBase = inputTriangleBase.value;

  const perimeter = trianglePerimeter(
    valueTriangleSide1,
    valueTriangleSide2,
    valueTriangleBase
  );
  alert(perimeter);
}
function calculateAreaTriangle() {
  const inputTriangleHeight = document.getElementById(
    "InputTriangleHeight"
  ).value;
  const inputTriangleBase = document.getElementById("InputTriangleBase").value;

  const area = triangleArea(inputTriangleBase, inputTriangleHeight);
  alert(area);
}
