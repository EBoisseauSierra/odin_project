// Not tested - theoretically 100,141,909,095 steps
//!\\ Only works if init_nmb is odd.
var init_nmb = 600851475143,
		i;

// LPF is is largest integer (strictly smaller than init_nmb)
//   that satisfies 'init_nmb%LPF===0'.
// Moreover, LPF is odd if bigger than 2. So no need to check even numbers.
// Moreover, since init_nmb is odd, 2 is no prime factor, thus the smallest
//   prime factor is bigger than 3, thus LPF smaller than init_nmb/3.
// Thus, start with the first odd number below 'init_nmb/3' and check modulo.
//   If not working, try (init_nmb-2)-2...
for ( i = init_nmb-2 ;
	  init_nmb % i !== 0;
      i -= 2) {
    // only works with odd init_nmb:
        // largest prime factor is odd, thus remove 2 each time
	console.log(i);
    confirm("current i: "+i);
};

for ( if(Math.floor(init_nmb/3) %2 ===1){
        i = Math.floor(init_nmb/3);
      }
      else {
        i = Math.floor(init_nmb/3)-1;
      };
	  init_nmb % i !== 0;
      i -= 2) {
	console.log(i);
    confirm("current i: "+i);
};
