import { Haiku } from './../js/haiku.js';

$(document).ready(function(){
  $('#haiku').submit(function(event){
    event.preventDefault();
    let first = $('#first').val();
    let second = $('#second').val();
    let third = $('#third').val();
    let myHaiku = new Haiku();
    let result = false;
    let incorrectArray = [];

    if(myHaiku.syllablesInSentence(first) == 5 && myHaiku.syllablesInSentence(second) == 7 && myHaiku.syllablesInSentence(third) == 5) {
      result = true;
    } if (myHaiku.syllablesInSentence(first) != 5) {
      incorrectArray.push("The first line doesn't have the correct number of syllables.");
    } if(myHaiku.syllablesInSentence(second) != 7) {
      incorrectArray.push("The second line doesn't have the correct number of syllables.");
    } if(myHaiku.syllablesInSentence(third) != 5) {
      incorrectArray.push("The third line doesn't have the correct number of syllables.");
    }

    let incorrect = incorrectArray.join(" \n");

    if (result == true) {
      $(".poem").text("This is a haiku.");
    } else{
      $('.bad').removeClass('hide');
      $('.incorrect').text(incorrect);
    }
  });
});
