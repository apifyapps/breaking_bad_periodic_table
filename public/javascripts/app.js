var castUrl = "http://apify.heroku.com/api/breaking_bad_cast.json?callback=?"
var periodicTableUrl = "http://apify.heroku.com/api/periodic_table.json?callback=?"
var score = 0;
// var cast = [];
// var periodicTable = [];

var cast = [{ name: "Bryan Cranston"}, { name: "Anna Gunn"}, { name: "Aaron Paul"}, { name: "Dean Norris"}, { name: "Betsy Brandt"}, { name: "RJ Mitte"}, { name: "Bob Odenkirk"}, { name: "Jonathan Banks"}, { name: "Giancarlo Esposito"}, { name: "Steven Michael Quezada"}, { name: "Christopher Cousins"}, { name: "Charles Baker"}, { name: "Michael Shamus Wiles"}, { name: "Ray Campbell"}, { name: "Krysten Ritter"}, { name: "Matt Jones"}, { name: "Mark Margolis"}, { name: "Carmen Serano"}, { name: "Jeremiah Bitsui"}, { name: "David House"}, { name: "David Costabile"}, { name: "Tina Parker"}, { name: "Emily Rios"}, { name: "Daniel Moncada"}, { name: "Ian Posada"}, { name: "Marius Stan"}, { name: "Rodney Rush"}, { name: "Luis Moncada"}, { name: "Lavell Crawford"}, { name: "Raymond Cruz"}, { name: "Tess Harper"}, { name: "John de Lancie"}, { name: "Jere Burns"}, { name: "Nigel Gibbs"}, { name: "Tom Kiesche"}, { name: "Maurice Compte"}, { name: "Maximino Arciniega"}, { name: "Jessica Hecht"}, { name: "Michael Bofshever"}, { name: "Julie Dretzin"}, { name: "Jesus Jr."}, { name: "Cesar Garcia"}, { name: "Julia Minesci"}, { name: "Javier Grajeda"}, { name: "Angelo Martinez"}, { name: "Mike Seal"}, { name: "Ashley Kajiki"}, { name: "Antonio Leyba"}, { name: "Christopher Dempsey"}, { name: "Karen M. Hudson"}, { name: "Jamie Haqqani"}, { name: "John Koyama"}, { name: "Danny Trejo"}, { name: "Dale Dickey"}, { name: "David Ury"}, { name: "Sam McMurray"}, { name: "Dan Desmond"}, { name: "Jeremy Howard"}, { name: "Bill Burr"}, { name: "Jason Byrd"}, { name: "Todd Terry"}, { name: "Jonathan Ragsdale"}, { name: "Steven Bauer"}, { name: "Judith Rane"}, { name: "Kaija Roze"}, { name: "Catherine Haun"}, { name: "Caleb Landry Jones"}, { name: "Virginia Montero"}, { name: "Eric Steinig"}, { name: "John Christopher Hicks"}, { name: "Lou Pimber"}, { name: "Matt Berlin"}, { name: "James Martinez"}, { name: "J. Taylor"}, { name: "Kevin Christopher Brown"}, { name: "Dana Cortez"}, { name: "Michael-David Aragon"}, { name: "Robert Anthony Brass"}, { name: "Grizelda Quintana"}];
var periodicTable = [{ symbol: "H", name: "Hydrogen"}, { symbol: "He", name: "Helium"}, { symbol: "Li", name: "Lithium"}, { symbol: "Be", name: "Beryllium"}, { symbol: "B", name: "Boron"}, { symbol: "C", name: "Carbon"}, { symbol: "N", name: "Nitrogen"}, { symbol: "O", name: "Oxygen"}, { symbol: "F", name: "Fluorine"}, { symbol: "Ne", name: "Neon"}, { symbol: "Na", name: "Sodium"}, { symbol: "Mg", name: "Magnesium"}, { symbol: "Al", name: "Aluminium"}, { symbol: "Si", name: "Silicon"}, { symbol: "P", name: "Phosphorus"}, { symbol: "S", name: "Sulfur"}, { symbol: "Cl", name: "Chlorine"}, { symbol: "Ar", name: "Argon"}, { symbol: "K", name: "Potassium"}, { symbol: "Ca", name: "Calcium"}, { symbol: "Sc", name: "Scandium"}, { symbol: "Ti", name: "Titanium"}, { symbol: "V", name: "Vanadium"}, { symbol: "Cr", name: "Chromium"}, { symbol: "Mn", name: "Manganese"}, { symbol: "Fe", name: "Iron"}, { symbol: "Co", name: "Cobalt"}, { symbol: "Ni", name: "Nickel"}, { symbol: "Cu", name: "Copper"}, { symbol: "Zn", name: "Zinc"}, { symbol: "Ga", name: "Gallium"}, { symbol: "Ge", name: "Germanium"}, { symbol: "As", name: "Arsenic"}, { symbol: "Se", name: "Selenium"}, { symbol: "Br", name: "Bromine"}, { symbol: "Kr", name: "Krypton"}, { symbol: "Rb", name: "Rubidium"}, { symbol: "Sr", name: "Strontium"}, { symbol: "Y", name: "Yttrium"}, { symbol: "Zr", name: "Zirconium"}, { symbol: "Nb", name: "Niobium"}, { symbol: "Mo", name: "Molybdenum"}, { symbol: "Tc", name: "Technetium"}, { symbol: "Ru", name: "Ruthenium"}, { symbol: "Rh", name: "Rhodium"}, { symbol: "Pd", name: "Palladium"}, { symbol: "Ag", name: "Silver"}, { symbol: "Cd", name: "Cadmium"}, { symbol: "In", name: "Indium"}, { symbol: "Sn", name: "Tin"}, { symbol: "Sb", name: "Antimony"}, { symbol: "Te", name: "Tellurium"}, { symbol: "I", name: "Iodine"}, { symbol: "Xe", name: "Xenon"}, { symbol: "Cs", name: "Caesium"}, { symbol: "Ba", name: "Barium"}, { symbol: "*", name: "Lanthanides"}, { symbol: "Hf", name: "Hafnium"}, { symbol: "Ta", name: "Tantalum"}, { symbol: "W", name: "Tungsten"}, { symbol: "Re", name: "Rhenium"}, { symbol: "Os", name: "Osmium"}, { symbol: "Ir", name: "Iridium"}, { symbol: "Pt", name: "Platinum"}, { symbol: "Au", name: "Gold"}, { symbol: "Hg", name: "Mercury"}, { symbol: "Tl", name: "Thallium"}, { symbol: "Pb", name: "Lead"}, { symbol: "Bi", name: "Bismuth"}, { symbol: "Po", name: "Polonium"}, { symbol: "At", name: "Astatine"}, { symbol: "Rn", name: "Radon"}, { symbol: "Fr", name: "Francium"}, { symbol: "Ra", name: "Radium"}, { symbol: "**", name: "Actinides"}, { symbol: "Rf", name: "Rutherfordium"}, { symbol: "Db", name: "Dubnium"}, { symbol: "Sg", name: "Seaborgium"}, { symbol: "Bh", name: "Bohrium"}, { symbol: "Hs", name: "Hassium"}, { symbol: "Mt", name: "Meitnerium"}, { symbol: "Ds", name: "Darmstadtium"}, { symbol: "Rg", name: "Roentgenium"}, { symbol: "Cn", name: "Copernicium"}, { symbol: "Uut", name: "Ununtrium"}, { symbol: "Fl", name: "Flerovium"}, { symbol: "Uup", name: "Ununpentium"}, { symbol: "Lv", name: "Livermorium"}, { symbol: "Uus", name: "Ununseptium"}, { symbol: "Uuo", name: "Ununoctium"}, { symbol: "La", name: "Lanthanum"}, { symbol: "Ce", name: "Cerium"}, { symbol: "Pr", name: "Praseodymium"}, { symbol: "Nd", name: "Neodymium"}, { symbol: "Pm", name: "Promethium"}, { symbol: "Sm", name: "Samarium"}, { symbol: "Eu", name: "Europium"}, { symbol: "Gd", name: "Gadolinium"}, { symbol: "Tb", name: "Terbium"}, { symbol: "Dy", name: "Dysprosium"}, { symbol: "Ho", name: "Holmium"}, { symbol: "Er", name: "Erbium"}, { symbol: "Tm", name: "Thulium"}, { symbol: "Yb", name: "Ytterbium"}, { symbol: "Lu", name: "Lutetium"}, { symbol: "Ac", name: "Actinium"}, { symbol: "Th", name: "Thorium"}, { symbol: "Pa", name: "Protactinium"}, { symbol: "U", name: "Uranium"}, { symbol: "Np", name: "Neptunium"}, { symbol: "Pu", name: "Plutonium"}, { symbol: "Am", name: "Americium"}, { symbol: "Cm", name: "Curium"}, { symbol: "Bk", name: "Berkelium"}, { symbol: "Cf", name: "Californium"}, { symbol: "Es", name: "Einsteinium"}, { symbol: "Fm", name: "Fermium"}, { symbol: "Md", name: "Mendelevium"}, { symbol: "No", name: "Nobelium"}, { symbol: "Lr", name: "Lawrencium"}]
var elementNames = [];

$(function(){
  // Random utils
  function getRandomNumber(maxValue){
    return Math.floor(Math.random() * maxValue);
  }
  //Load cast and periodic table
  // $.when($.getJSON(castUrl), $.getJSON(periodicTableUrl)).done(function(castData, periodicTableData){
  //   cast = JSON.parse(castData[0]);
  //   periodicTable = JSON.parse(periodicTableData[0]);
  //   nextGuess({name: "Aaron Paul"});
  // });
  periodicTable = _.filter(periodicTable, function(element){return element.symbol.match(/\w+/)});
  nextGuess({ name: "Aaron Paul"});
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
    $(input).focus(function() { $(this).select(); } );
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