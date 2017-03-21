var sum_multiples = 0;

for (i = 1; i < 1001; i++) {
  if (i % 3 == 0 || i % 5 == 0)
    sum_multiples += i;
}

console.log(sum_multiples)
