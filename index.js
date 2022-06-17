// Square code
function squarePerimeter(side) {
    return side * 4;
};

function squareArea(side) {
    return side * side;
};

// Triangle Code

function trianglePerimeter(sideA, sideB, base) {
    return sideA + sideB + base;
};


function triangleArea(base, height) {
    return (base * height) / 2;
};


// Circle code
function circleDiameter(radio) {
    return radio * 2;
};

function circlePerimeter(radio) {
    const diametro = circleDiameter(radio);
    return diametro * Math.PI;
};

function circleArea(radio) {
    return (radio * radio) * Math.PI;
};

/*----------interaction with HTML----------*/

//Square

function calculateSquarePerimeter() {
    const input = document.getElementById('inputSquare');
    const value = input.value;
    const perimeter = squarePerimeter(value);
    const resultP = document.getElementById('perimeterSquare');
    resultP.innerText = `The perimeter of the square is: ${perimeter} cm`
}

function calculateSquareArea() {
    const input = document.getElementById('inputSquare');
    const value = input.value;
    const area = squareArea(value);
    const resultP = document.getElementById('areaSquare');
    resultP.innerText = `The area of the square is: ${area} cm`
}

//Triangle

function calculateTrianglePerimeter() {
    const inputA = document.getElementById('inputTriangleA');
    const inputB = document.getElementById('inputTriangleB');
    const inputC = document.getElementById('inputTriangleC');
    const sideA = Number(inputA.value);
    const sideB = Number(inputB.value);
    const base = Number(inputC.value);
    const perimeter = trianglePerimeter(sideA, sideB, base);
    const resultP = document.getElementById('perimeterTriangle');
    resultP.innerText = `The perimeter of the triangle is: ${perimeter} cm`
};

function calculateTriangleArea() {
    const inputC = document.getElementById('inputTriangleC');
    const inputD = document.getElementById('inputTriangleD');
    const base = Number(inputC.value);
    const height = Number(inputD.value);
    const area = triangleArea(base, height);
    const resultP = document.getElementById('triangleArea');
    resultP.innerText = `The area of the triangle is: ${area} cm`
};

// Isosceles triangle

function isoscelesPerimeter(sides, base) {
    return sides + sides + base;
}

function calculateIsoscelesPerimeter() {
    const inputA = document.getElementById('inputTriangleE');
    const inputB = document.getElementById('inputTriangleF');
    const sides = Number(inputA.value);
    const base = Number(inputB.value);
    const perimeter = isoscelesPerimeter(sides, base);
    const resultP = document.getElementById('isoscelesPerimeter');
    resultP.innerText = `The perimeter of the isosceles triangle is: ${perimeter} cm `

};

function calculateIsoscelesHeight(sides, base) {
    return (Math.sqrt((sides * sides) + (base * base)));
};

function calculateIsoscelesArea() {
    const inputA = document.getElementById('inputTriangleE');
    const inputB = document.getElementById('inputTriangleF');
    const sides = Number(inputA.value);
    const base = Number(inputB.value);
    const height = calculateIsoscelesHeight(sides, base);
    const area = triangleArea(base, height);
    const resultP = document.getElementById('isoscelesArea');
    resultP.innerText = `The height of triangle is: ${height}cm
    The area of the isosceles triangle is: ${area} cm`
};

// Circle



function calculatedPerimeterCircle() {
    const input = document.getElementById('radio');
    const value = input.value;
    const perimeter = circlePerimeter(value);
    resultP = document.getElementById('circlePerimeter');
    resultP.innerText = `The perimeter of the circle is: ${perimeter}cm`
};


function calculatedAreaCircle(){
    const input = document.getElementById('radio');
    const value = input.value;
    const area = circleArea(value);
    const resultP = document.getElementById('circleArea')
    resultP.innerText = `The area of the circle is: ${area}cm`
}


