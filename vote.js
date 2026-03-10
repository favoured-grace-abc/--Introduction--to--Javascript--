let age = 16;
let isRegistered = false;

if (age >= 18 && isRegistered) {
    console.log("You may vote.");
}

else  if (age >= 18 && !isRegistered){
    console.log("You are old enough but not registered.");
}
else if (age < 18){
    console.log("You are not old enough to vote.");
}

else{
    console.log("You are not Eligible to vote.");
}