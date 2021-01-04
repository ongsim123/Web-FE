const getname = (name) => `출력 결과 : Park ${name}`;
console.log(getname(`jeonghyeon`));


const hello = (text) => console.log(text);
hello("출력 결과 : Hello World!");

function a() {
    const arr = Array.from(arguments);
    const result = arr.reduce(function add(sum, currValue) {
        return sum + currValue;
    }, 0);
    console.log(`출력 결과 : ${result}`);
}
a(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 45);

const circleArea = (r) => {
    let cal = 3.14 * r * r;
    if (cal !== Number(cal)) {
        console.log("error");
    } else
        console.log(`원의 넓이 = ${cal}`)
};

const rectArea = (v, h) => {
    let cal = v * h;
    if (cal !== Number(cal)) {
        console.log("error");
    } else
        console.log(`사각형의 넓이 = ${cal}`)
};

const tzdArea = (t, b, h) => {
    let cal = (t + b) * h / 2;
    if (cal !== Number(cal)) {
        console.log("error");
    } else
        console.log(`사다리꼴의 넓이 = ${cal}`)
};

const cylinderArea = (r, h) => {
    let cal = (2 * 3.14 * r * r) + (2 * 3.14 * r * h);
    if (cal !== Number(cal)) {
        console.log("error");
    } else
        console.log(`원기둥의 넓이 = ${cal}`)
};

function printArea(figure) {
    switch (figure) {
        case "circle":
            circleArea();
            break;
        case "rect":
            rectArea();
            break;
        case "tzd":
            tzdArea();
            break;
        case "cylinder":
            cylinderArea();
            break;
    }
}
printArea("circle");