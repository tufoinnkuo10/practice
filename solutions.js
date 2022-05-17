/// sOLUTION
DNA PAIR SOLUTION
AAAA = TTTT
"ATTGC" --> "TAACG"
"GTAT" --> "CATA"

....///////
function DNAStrand(dna){
  //your code here
  const pairdna = [];
  
  for (let i=0; i<dna.length; i ++){
    if(dna[i]==="A") pairdna.push('T');
    if(dna[i]==="T") pairdna.push('A');
    if(dna[i]==="C") pairdna.push('G');
    if(dna[i]==="G") pairdna.push('C');
  }
  let results = pairdna.toString().split(',').join('')
  return results;
}


/////// TWO SUMS TO GET TARGET NUMBER FROM AN ARA
var twoSum = function(nums, target) {
    let arraySize = nums.length;
    
    
    for (let i=0; i < arraySize; i++){
        for (let j =i + 1; j < arraySize; j++){
            if ((nums[i] + nums[j])===target ){
                return [i, j]
            }
    
        }
    }
  
  // palindrome 
  /**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {  
    // /[\W_]/g
    // /[^A-Za-z0-9_]/g
    var regex = /[\W_]/g
    
    var regreplace = x.toString()
    var firstcheck = regreplace.split('').reverse().join('');
    
    var lastcheck = regreplace == firstcheck
    return lastcheck
    // var answer= x.toString().replace(regex, '').split('').reverse().join('');
    // return answer
     // var re = /[^A-Za-z0-9]/g;
//  str = x.toString().replace(re, '');
//  var len = str.length;
//  for (var i = 0; i < len/2; i++) {
//    if (str[i] !== str[len - 1 - i]) {
//        return false;
//    }
//  }
//  return true;
    
};
