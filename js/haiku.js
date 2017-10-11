export class Haiku {
  constructor(){
  }
  syllablesInWord(word) {
    word = word.toLowerCase().replace(/[^a-z]/g, "");
    let noOfSyllables;
    let noOfLastE = 0;
    let lastLe = 0;
    let noOfVowels = (word.match(/[aeiouy]/g) || []).length;
    let noOfConsVowels = (word.match(/[aeiou]{2}/g) || []).length;
    if(word.charAt(word.length - 1) == 'e'){
      noOfLastE = 1;
    }
    if((((word.charAt(word.length - 3).match(/[^aeiou]/g))|| []).length == 1) && ((word.substring(word.length - 2) == "le") || (word.substring(word.length - 2) == "re")))
    {
      lastLe = 1;
    }
    noOfSyllables = noOfVowels - noOfConsVowels - noOfLastE + lastLe;
    return noOfSyllables;
  }

  syllablesInSentence(sentence){
    let wordArray = sentence.split(" ");
    let totalSyllables = 0;
    let that = this;
    wordArray.forEach(function(word){
      totalSyllables = totalSyllables + that.syllablesInWord(word);
    });
    return totalSyllables;
  }
}
