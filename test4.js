const myFriend = { key: "value" };
myFriend.age = 34;
myFriend.addition = "good";

console.log(myFriend.addition[1].age);

console.log(Object.keys(myFriend["addition"]));

/*Object.keys(myFriend).forEach(function (v) {
    console.log(myFriend[v]);
});*/

for (key in myFriend) {
    console.log(myFriend[key])
}
const data = {
    "debug": "on",
    "window": {
        "title": "Sample Konfabulator Widget",
        "name": "main_window",
        "width": 500,
        "height": 500
    },
    "image": {
        "src": "Images/Sun.png",
        "name": "sun1",
        "hOffset": 250,
        "vOffset": 250,
        "alignment": "center"
    },
    "text": {
        "data": "Click Here",
        "size": 36,
        "style": "bold",
        "name": "text1",
        "hOffset": 250,
        "vOffset": 100,
        "alignment": "center",
        "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
    }
}

for (key in data) {
    console.log(typeof data.text.data)
}