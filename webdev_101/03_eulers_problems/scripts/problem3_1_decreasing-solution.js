// not tested - theoretically 600,851,468,286 steps 
var init_nmb = 600851475143,
		i;

// LPF is is largest integer (strictly smaller than init_nmb)
//   that satisfies 'init_nmb%LPF===0'.
// Thus, start with 'init_nmb-1' and check modulo. If not working, try
//   (init_nmb-1)-1...
for ( i = init_nmb-1 ;
	  init_nmb % i !== 0;
      i -= 1) {
	console.log(i);
};
