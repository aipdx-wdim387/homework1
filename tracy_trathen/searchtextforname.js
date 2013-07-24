/*jshint multistr:true */ // can we remove this now?

/* searchtextforname.js - Tracy Trathen */

// why doesn't the example have "var" in front of "text"
// like the example given in the tutorial?
// 'splain Lucy! (I tried it with or without
//doesn't seem to matter)

var text = "This is a bunch of text. I Tracy don't really want \
to write blah blah all over the place Tracy like the example \
because I'm just that kind of ornery Tracy";
// note: I intentionally put in the word "This"
// at the beginning of my text because I wanted 
// to see the results with other things even before 
// the "victory" page said something about that

var myNombre = "Tracy";
var hits = [];

// find "T" in the text var
for(var i = 0; i < text.length; i++) {
	// look for "T" in the "text" var
    if (text[i] == "T") {
        // If we find T, add it and following characters to
        // the hits array till the end of the length of my name
        for(var j = i; j < (myNombre.length + i); j++) {
            hits.push(text[j]); 
            // would be nice to have someone walk me through
            // VISUALLY what this does (like the head first 
            // books do with diagrams and arrows or something)
			// but I think I got it right in my comments?
        }
    }
}

if (hits.length === 0) {
    console.log('Your name was not found');
} else {
    console.log(hits);
}