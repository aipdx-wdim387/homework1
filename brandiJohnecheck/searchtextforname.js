/*jshint multistr:true */

var text = 'Blarg blah bleh Brandi merfle I have BEES ina  jar \
and all is well for Brandi. In fact, Brandi dances with a shnorgle!\
And so, everything is a dream. Brandi. Yeah...';
var myName = 'Brandi';
var hits = [];

for (var i=0; i<text.length; i++) {
    if (text[i] == myName[0]) {
        var basket = [];
        for (var j = i; j < (i+myName.length); j++) {
            basket.push(text[j]);
        }
        var checker = basket.join('');
        if (checker == myName) {
            hits.push(checker);
        }
    }
}

if (hits.length == 0) {
    console.log("Your name wasn't found!");
} else {
    console.log(hits);
}