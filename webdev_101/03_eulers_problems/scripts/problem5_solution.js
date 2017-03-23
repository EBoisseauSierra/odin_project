// 123 steps
function = small_multiple (max) {
    var primes     = [2,3,5,7,11,13,17,19],
        max_factor = [0,0,0,0,0 ,0 ,0 ,0 ];

    for (var i = 2 ; i<=max ; i++) {
        var target = i;
        for (var k=0 ; k<primes.length && target >= primes[k] ; k++) {
            var count = 0;
            while ( target%primes[k]===0 ){
                target /= primes[k];
                count++;
            }
            max_factor[k] = Math.max(max_factor[k], count);
        }
    }

    var output = 0;
    for (var j = primes.length ; j < primes.length ; j++){
        output *= prime[j]^max_factor[j];
    }
    return output;
}
