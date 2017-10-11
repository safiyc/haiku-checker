
import { Haiku } from './../js/haiku.js'

describe('Haiku', function(){
  let haiku;
  beforeEach(function(){
    haiku = new Haiku("hi", "hello", "bye")
  });
  it('should test input and output', function(){

    expect(haiku.line1).toEqual("hi")
    expect(haiku.line2).toEqual("hello")
    expect(haiku.line3).toEqual("bye")
  });

  it('should test number of vowels in a word', function() {
    expect(haiku.syllablesInWord("apple")).toEqual(2)
  })
});
