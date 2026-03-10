
let hasTicket = true;
let age = 15;
let isVIP = false;
let isChaperoned = true;

if (
  isVIP ||
  (age >= 18 && hasTicket) ||
  (age >= 16 && hasTicket && isChaperoned)
) {
  console.log("Access Granted: Welcome to the show!");
} else {
  console.log("Access Denied: You do not meet the entry requirements.");
}