var headCount = 4;
var total = 345;
var gst = 8;

var totalwithgst = total + (gst / 100) * total;
console.log(`Total amount with gst - ${totalwithgst}`);

var split = totalwithgst / headCount;
console.log(`Split amount - ${split}`);

var tipAmount = 25;

var totalAmount = totalwithgst +tipAmount;
console.log(`totalamount spended -${totalAmount}`);

var split = totalAmount/headCount;
console.log(`current split ${split}`);

