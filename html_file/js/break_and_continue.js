(function(){
    "use strict";

var response = "";

while (response === "" || response % 2 === 0 || response >= 50 || response < 1) {
    response = prompt("Please enter an odd number that falls between 1 and 50");
}

for (var y = 1; y < 50; y++) {
    if (y % 2 === 0) {
        continue;
    }
    if (y === Number(response)) {
        console.log(`Yikes! Skipping number: ${y}`);    //("Yikes! Skipping number: " + y);
    } else {
        console.log(`Here is an odd number: ${y}`);     //("Here is an odd number: " + y);
    }
}

})();