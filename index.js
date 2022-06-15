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

function calculateSquarePerimeter(){
    const input = document.getElementById('inputSquare');
    const value = input.value;
    const perimeter = squarePerimeter(value);
    alert(`The perimeter of the square is: ${perimeter} cm`);
}

function calculateSquareArea(){
    const input = document.getElementById('inputSquare');
    const value = input.value;
    const area = squareArea(value);
    alert(`The area of the square is: ${area} cm`);
}

//Triangle

function calculateTrianglePerimeter(){
    const inputA = document.getElementById('inputTriangleA');
    const inputB = document.getElementById('inputTriangleB');
    const inputC = document.getElementById('inputTriangleC');
    const sideA = Number(inputA.value);
    const sideB = Number(inputB.value);
    const base = Number(inputC.value);
    const perimeter = trianglePerimeter(sideA, sideB, base);
    alert(`The perimeter of the triangle is: ${perimeter} cm`);
}

function calculateTriangleArea(){
    const inputC = document.getElementById('inputTriangleC');
    const inputD = document.getElementById('inputTriangleD');
    const base = Number(inputC.value);
    const height = Number(inputD.value);
    const area = triangleArea(base, height);
    alert(`The area of the triangle is: ${area} cm`);
}