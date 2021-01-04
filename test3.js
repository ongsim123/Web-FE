/*function printName(firstname) {
    var myname = "jisu";
    return myname + " ," + firstname;
}

function run(firstname) {
    var firstname = firstname || "Youn";
    var result = printName(firstname);
    console.log(result);
}
run();

const countdown2 = function (n) {
    if (n <= 0) {
        return
    }
    console.log(n)
    countdown2(n - 1);
}
countdown2(3);
function circle(n) {
    let sum = 0;
    for (let i = n; i >= 0; i--) {
        const cal = 3.14 * i * i;
        sum += cal;
    }
    console.log(sum)
}
circle(3);*/

function factorial(x) {
    if (x < 0) return;
    if (x === 0) return 1;
    return x * factorial(x - 1);
}

console.log(factorial(3));

function fibonacci(n) {
    if (n < 2) return n;
    const result = fibonacci(n - 1) + fibonacci(n - 2);
    return result;
}
console.log(fibonacci(10));
/*
//getArea('circle', 10);
>  원의 넓이 값출력

//getArea('rect', 10,15);
>  사각형의 넓이값출력

//getArea('trapezoid', 10,15,12);
>  사다리꼴의 넓이값출력

//getArea('circle', 1, n);
> 반지름이 1부터 n까지 1씩 증가하면서, n개까지의 원의 넓이의 모든 합을 출력. (재귀적인 해결책을 제시한다)*/
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

function circle2(b) {
    if (b < 0) {
        return
    }
    if (b === 0) {
        return 0
    }
    const cal = 3.14 * b * b;
    return cal + circle2(b - 1);
}
console.log(circle2(3))

function count() {

}

function getArea(figure, a, b, c) {
    switch (figure) {
        case "circle":
            circleArea(a);
            count();
            break;
        case "rect":
            rectArea(a, b);
            count();
            break;
        case "trapezoid":
            tzdArea(a, b, c);
            count();
            break;
        case "circle2":
            circle2(a, b);
            count();
            break;
    }
}
getArea("circle2", 1, 3);
