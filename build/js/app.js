(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Haiku = exports.Haiku = function () {
  function Haiku() {
    _classCallCheck(this, Haiku);
  }

  _createClass(Haiku, [{
    key: "syllablesInWord",
    value: function syllablesInWord(word) {
      word = word.toLowerCase().replace(/[^a-z]/g, "");
      var noOfSyllables = void 0;
      var noOfLastE = 0;
      var lastLe = 0;
      var noOfVowels = (word.match(/[aeiouy]/g) || []).length;
      var noOfConsVowels = (word.match(/[aeiou]{2}/g) || []).length;
      if (word.charAt(word.length - 1) == 'e') {
        noOfLastE = 1;
      }
      if ((word.charAt(word.length - 3).match(/[^aeiou]/g) || []).length == 1 && (word.substring(word.length - 2) == "le" || word.substring(word.length - 2) == "re")) {
        lastLe = 1;
      }
      noOfSyllables = noOfVowels - noOfConsVowels - noOfLastE + lastLe;
      return noOfSyllables;
    }
  }, {
    key: "syllablesInSentence",
    value: function syllablesInSentence(sentence) {
      var wordArray = sentence.split(" ");
      var totalSyllables = 0;
      var that = this;
      wordArray.forEach(function (word) {
        totalSyllables = totalSyllables + that.syllablesInWord(word);
      });
      return totalSyllables;
    }
  }]);

  return Haiku;
}();

},{}],2:[function(require,module,exports){
'use strict';

var _haiku = require('./../js/haiku.js');

$(document).ready(function () {
  $('#haiku').submit(function (event) {
    event.preventDefault();
    var first = $('#first').val();
    var second = $('#second').val();
    var third = $('#third').val();
    var myHaiku = new _haiku.Haiku();
    var result = false;
    var incorrectArray = [];

    if (myHaiku.syllablesInSentence(first) == 5 && myHaiku.syllablesInSentence(second) == 7 && myHaiku.syllablesInSentence(third) == 5) {
      result = true;
    }if (myHaiku.syllablesInSentence(first) != 5) {
      incorrectArray.push("The first line doesn't have the correct number of syllables.");
    }if (myHaiku.syllablesInSentence(second) != 7) {
      incorrectArray.push("The second line doesn't have the correct number of syllables.");
    }if (myHaiku.syllablesInSentence(third) != 5) {
      incorrectArray.push("The third line doesn't have the correct number of syllables.");
    }

    var incorrect = incorrectArray.join(" \n");

    if (result == true) {
      $(".poem").text("This is a haiku.");
    } else {
      $('.bad').removeClass('hide');
      $('.incorrect').text(incorrect);
    }
  });
});

},{"./../js/haiku.js":1}]},{},[2]);
