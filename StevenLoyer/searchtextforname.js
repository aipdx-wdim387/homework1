var text = "An old man turned ninety-eight He won the lottery and died the next day, It's a black fly in your Chardonnay, It's a death row pardon two minutes too late Isn't it ironic, don't you think, It's like rain on your wedding day, It's a free ride when you've already paid, It's the good advice that you just didn't take, Who would've thought, Steven it figures"; 

myName = "Steven";
hits = [];

for(var i = 0; i < text.length; i++) {
    if (text[i] == "S") {
		for(var x = i; x < (myName.length + i); x++) {
			hits.push(text[x]);
		}
	}
}

if (hits.length === 0) {
	alert("Your name wasn't found!");
} else {
	alert(hits);
}