// not tested - theoretically 300,425,734,143 steps 
//!\\ Only works if init_nmb is odd.
var init_nmb = 600851475143,
		i;

// LPF is is largest integer (strictly smaller than init_nmb)
//   that satisfies 'init_nmb%LPF===0'.
// Moreover, LPF is odd if bigger than 2. So no need to check even numbers.
// Thus, start with 'init_nmb-2' (biggest odd number that is smaller than
//     init_nmb) and check modulo. If not working, try (init_nmb-2)-2...
for ( i = init_nmb-2 ;
	  init_nmb % i !== 0;
      i -= 2) {
    // only works with odd init_nmb:
        // largest prime factor is odd, thus remove 2 each time
	console.log(i);
    confirm("current i: "+i);
};
