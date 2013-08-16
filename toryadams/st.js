text = "tneutron tneutron tneutron tneutron tneutron tneutron tneutron tneutron tneutron tneutron";
var myName = "tneutron";
var hits = [];

for(var i = 0; i < text.length; i++) {
    if(text[i] === myName[0]) {
        for(var j = i; j < myName.length; j++) {
           hits.push(myName[j]);
        }
    }
}

if(hits.length === 0) {
    console.log("Your name wasn't found!");
} else {
    console.log(hits);
}
