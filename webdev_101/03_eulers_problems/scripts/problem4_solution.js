// 2332 steps
function ispal(nmbToVerify){
  // check if a given number is a palindrom, return Boolean
  var nmbAsString = nmbToVerify.toString();
  var stringLength = nmbAsString.length;
  
  for(var i=1 ; i <= Math.floor(stringLength/2) ; i++){
    if ( nmbAsString.charAt(i-1) !== nmbAsString.charAt(stringLength-i) ){
      return false;// if counter example
    }
  }
  return true;// if not already ended by false
}

function palmax(topNumber){
  // calculate the product of two numbers smaller or equal than 'topNumber' in a decreasing order, and return it if it's a palindrom
  for (var i=0; i<topNumber ; i++){
    for (var ja = i, ka=i; ja >= 0 && (topNumber-ka) > 0 ; ja--, ka++) {
      //console.log(i+": "+(topNumber-ja)+" "+(topNumber-ka))
      if (ispal((topNumber-ja)*(topNumber-ka))) {
        return (topNumber-ja)*(topNumber-ka);
      }
    }
    for (var jb = i, kb=i+1; jb >= 0&& (topNumber-kb) > 0  ; jb--, kb++) {
      //console.log(i+": "+(topNumber-jb)+" "+(topNumber-kb))
      if (ispal((topNumber-jb)*(topNumber-kb))){
        return (topNumber-jb)*(topNumber-kb);
      }
    }
  }
}
