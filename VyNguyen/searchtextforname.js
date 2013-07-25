/*jshint multistr:true */

var text = "Milk juice Tea Katie muffin katie pillow Katie abcd Cupcake latte Katie pizza cheese Apples";
var myName = "Katie";
var hits = [];

for (var i = 0; i < text.length; i++) {
    if (text[i] === myName[0]) {
        for (var j = i; j < i+myName.length; j++) {
            hits.push(text[j]);
        }
    }
}

if (hits === 0) {
    console.log("Your name wasn't found");
} else {
    console.log(hits);
}