////SOLUTION1
DNA PAIR SOLUTION
AAAA = TTTT
"ATTGC" --> "TAACG"
"GTAT" --> "CATA"

..../////
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
    
};
