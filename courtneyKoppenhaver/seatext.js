/*jshint multistr:true */

var text = "blah blah blah courtney blah blah courtney";

var myName = "courtney";

var hits = Array();

for(i = 0; i < text.length; i++) {

     if(text[i] == myName[0]) {
             for(j = i; j < i + myName.length; j++){
                         console.log(text[j]);
                                 hits.push(text[j]);
                                     }
                                      }
}
if(hits.length === 0){
        console.log("Your name wasn't found!");
}
else {
        console.log(hits);
}
}
}
             }
     }
}
