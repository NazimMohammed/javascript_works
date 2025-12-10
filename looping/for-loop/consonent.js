var text = "pneumonoul-tramicroscopicsilicovolcanoconiosis"

var vcount = 0;
var conCount=0
for (let ch of text) {
    if (ch == "a" || ch == "e" || ch =="i" || ch=="o" || ch=="u" || ch == "A" || ch =="E" || ch=="I" || ch=="O" || ch=="U") {
        vcount++
    }
    else if(ch!=" "){
        conCount++
    }
}
console.log(`vowel-${vcount}`);
console.log(`Consonent-${conCount}`);
