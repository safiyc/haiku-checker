
import { Haiku } from './../js/haiku.js'

describe('Haiku', function(){
  it('should test no of vowels in a word', function(){
    let haiku = new Haiku("hi", "hello", "bye")
    expect(haiku.line1).toEqual("hi")
    expect(haiku.line2).toEqual("hello")
    expect(haiku.line3).toEqual("bye")
  });
});
