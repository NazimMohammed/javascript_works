var text = "amanaplanacanalpanama"

var result = ""

var stringLength = text.length-1;//text-index lenght


for(let i = stringLength; i>=0; i--){//textlength to 0
    result=result+text[i]
}

console.log(result==text?"Palindrome":"Not Palindrome");
