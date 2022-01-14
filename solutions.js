///SOLUTION 1
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
