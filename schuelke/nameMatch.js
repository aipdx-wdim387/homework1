/*jshint multistr:true */
var text = "jfdks jkdfsjkls Peterjds lkdfsa j sjkl al",
    myName = 'Peter',
    hits = [];

for (var i=0; i < text.length; i++){
    if(text[i] == myName[0]){
        // for(var f= i; f < myName.length + i; f++){

        //     hits.push(text[f]);
        // }
        match = text.substring(i, i + myName.length)
        if (match == myName){
            hits.push(match);
        }
    }
}


if(hits.length == 0){
    console.log("Your name wasn't found!")
}else{
    console.log(hits);
}
