// Search Text for name

/*jshint multistr:true */

text = "Jace Poirier-Pinto Jace Poirier-Pinto \
        Jace Poirier-Pinto Jace Poirier-Pinto";
var myName = "Jace Poirier-Pinto";
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