/*jshint multistr:true */

var text = "Zachary Zachary Zachary";
var myName = "Zachary";
var hits = [];

for (var i = 0; i < text.length; i++){
    if (text[i] === 'Z') {
        for (var j = i; j<(i+myName.length); j++) {
            if (text[j] === myName [j-i])
            hits.push(text[j]);
        }
    }
}

if (hits.length === 0) {
    console.log("Your name wasn't found.");
} else {
    console.log(hits);
}