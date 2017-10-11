
import { Haiku } from './../js/haiku.js'

describe('Haiku', function(){
  let haiku;
  beforeEach(function(){
    haiku = new Haiku()
  });

  it('should test number of syllables in a word', function() {
    expect(haiku.syllablesInWord("banana")).toEqual(3)
    expect(haiku.syllablesInWord("apple")).toEqual(2)
    expect(haiku.syllablesInWord("five")).toEqual(1)
    expect(haiku.syllablesInWord("baby")).toEqual(2)
    expect(haiku.syllablesInWord("syllables")).toEqual(3)
  });

  it('should test to recognize all casings as lowercase', function() {
    expect(haiku.syllablesInWord("SEntEnce")).toEqual(2)
  });

  it('should return no of syllables in sentence', function() {
    expect(haiku.syllablesInSentence("I am apple")).toEqual(4)
    expect(haiku.syllablesInSentence("Five syllables first.")).toEqual(5)
    expect(haiku.syllablesInSentence("Then seven syllables next.")).toEqual(7)
    expect(haiku.syllablesInSentence("Last sentence is five.")).toEqual(5)
  });


});
