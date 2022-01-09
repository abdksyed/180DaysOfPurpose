function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
 
// Assignment 1

function increment(var1, var2, var3){
	var1 = var1*2;
	var2 += 5;
	var3 += 1;

	return [var1, var2, var3];
}

function main() {
	var var1 = 1;
	var var2 = 1;
	var var3 = 1;
	
	while (true){
    console.log(`Variables Changes: Var1 is ${var1}, Var2 is ${var2}, Var3 is ${var3}`);
    sleep(500);
		[var1, var2, var3] = increment(var1, var2, var3);
		if (var1 >= 100 || var2 >= 100 || var3 >= 100) {
      console.log(`Variables Changes: Var1 is ${var1}, Var2 is ${var2}, Var3 is ${var3}`);
			var1 = 1;
			var2 = 1;
			var3 = 1;
			console.log(`All variables reseted to 1`);
      break
		}
	}

}

main()


// ----------------------------
// Assignment 2

function arithmetic(a,b,c,d){

  console.log(`a is ${a}, b is ${b}, c is ${c}, d is ${d}`);

  let sum, sub, mult, div, mod, pow;
  // addition
  sum = a+b;

  // subtraction
  if (c>d) sub = c-d;
  else sub = d-c;

  // multiplication
  mult = a*b*c*d;

  // division
  if (d>0) div = a/d;
  else div = 'd is Zero, division not possible';

  // modulus
  mod = a%b;

  // power
  pow = Math.pow(a,b);

  console.log(`\
  Sum a+b: ${sum}
  Subtraction |c-d|: ${sub}
  Multiplication a*b*c*d: ${mult}
  Division a/d: ${div}
  Modulus a%b: ${mod}
  Power a^b: ${pow}`);
}

arithmetic(3,5,7,0)