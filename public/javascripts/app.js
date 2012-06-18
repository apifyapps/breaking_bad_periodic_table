var castUrl = "http://apify.heroku.com/api/breaking_bad_cast.json?callback=?"
var periodicTableUrl = "http://apify.heroku.com/api/periodic_table.json?callback=?"
var score = 0;
var cast = [];
var periodicTable = [];

$(function(){
  // Random utils
  function getRandomNumber(maxValue){
    return Math.floor(Math.random() * maxValue);
  }
  //Load cast and periodic table
  $.when($.getJSON(castUrl), $.getJSON(periodicTableUrl)).done(function(castData, periodicTableData){
    cast = JSON.parse(castData[0]);
    periodicTable = JSON.parse(periodicTableData[0]);
    periodicTable = _.filter(periodicTable, function(element){return element.symbol.match(/\w+/)});
    nextGuess({name: "Aaron Paul"});
  });
  // Bind Pass link on incorrect guess
  $('#pass-game').click(function(){
    $('#chemical-element').val('');
    nextGuess();
    return false;
  });
  //Start Game
  function nextGuess(selectedCast){
    randomCast = selectedCast || cast[getRandomNumber(cast.length)];
    matchingElements = _.filter(periodicTable, function(element){return randomCast.name.match(new RegExp(element.symbol, "gi"));});
    matchElement = matchingElements[getRandomNumber(matchingElements.length)];
    fill(randomCast, matchElement);
  }

  function fill(cast, element){
    var castLetters = cast.name.split('');
    castLetters = _.map(castLetters, function(letter){return "<span class='letter'>" + letter + "</span>"});
    $('.cast').html(castLetters.join(''));
    highlightChemicalElement(cast, element);
    bindGuess($('#chemical-element'), element);
  }

  function highlightChemicalElement(cast, element){
    var elementIndex = cast.name.toLowerCase().indexOf(element.symbol.toLowerCase());
    var elementSelector = '.cast .letter:nth-child(' + (elementIndex + 1) + ')';
    $(elementSelector).addClass('element');
    $(elementSelector).html($(elementSelector).html().toUpperCase());
    if(element.symbol.length == 2){
      $('.cast .letter:nth-child(' + (elementIndex + 2) + ')').addClass('element');
    }
  }

  function bindGuess(input, element){
    $(input).typeahead({
      source: periodicTable,
      property: 'name',
      onselect: function(element){
        if(element.symbol == matchElement.symbol){
          correctGuess();
          displayScore(score+=50);
        } else {
          incorrectGuess();
        }
      }
    });
    $(input).bind('focus', function() { $(this).select(); } );
  }

  function displayScore(points){
    $('.score .points').html(points);
  }

  function correctGuess(){
    $('.result').hide();
    $('.result.correct').show();
    $('#chemical-element').val('');
    nextGuess();
  }

  function incorrectGuess(){
    $('.result').hide();
    $('.result.incorrect').show();
  }
});