// 6857 steps
var target = 600851475143,
    divider = 3; // we can skip 2 since target is odd.

while (divider < target) {
    while ((target/divider)%1 === 0){
      target = target/divider;
    }
    divider++
}
console.log(divider)
