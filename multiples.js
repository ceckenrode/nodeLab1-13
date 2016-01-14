var num1 = process.argv[2];
var num2 = process.argv[3];

if (num1 % 7 === 0 && num2 % 7 === 0) {
  console.log("true");
  return true;
} else{
  console.log("false");
  return false;
}