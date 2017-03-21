var fib_1 = 1;
var fib_2 = 2;

var fib_3;
var sum_even_valued_terms = fib_2;

do {
	fib_3 = fib_1 + fib_2;
  if (fib_3 % 2 === 0) {
    sum_even_valued_terms += fib_3;
  };
  fib_1 = fib_2;
  fib_2 = fib_3;
}
while (fib_3 < 4000000);

console.log(sum_even_valued_terms);
