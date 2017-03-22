// 996 steps
var sum_multiples = 0;

for (i = 3; i < 1000; i++) {
  if (i % 3 == 0 || i % 5 == 0)
    sum_multiples += i;
}

console.log(sum_multiples)
