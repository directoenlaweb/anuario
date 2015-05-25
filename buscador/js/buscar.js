var substringMatcher = function(strs) {
  return function findMatches(q, cb) {
    var matches, substringRegex;
 
    // an array that will be populated with substring matches
    matches = [];
 
    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, 'i');
 
    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
        matches.push(str);
      }
    });
 
    cb(matches);
  };
};

var nombres = ['Daniel: Grupo Alfa', 'Javier: Grupo Beta', 'Pedro', 'Saul', 'Marco', 'Kathia', 'Mariel', 'Aline', 'Alberto', 'Erick', 'Ernesto'];

$('#nombres .typeahead').typeahead({
  hint: true,
  highlight: false,
  minLength: 1
},
{
  name: 'nombres',
  source: substringMatcher(nombres)
});