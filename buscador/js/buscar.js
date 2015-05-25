var nombres = ['Daniel: Grupo Alfa', 'Javier: Grupo Beta', 'Pedro', 'Saul', 'Marco', 'Kathia', 'Mariel', 'Aline', 'Alberto', 'Erick', 'Ernesto'];

var nombres = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.whitespace,
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  local: nombres
  //prefetch: 'nombres.json'
});

$('#nombre .typeahead').typeahead({
  hint: true,
  highlight: false,
  minLength: 1
},
{
  name: 'nombres',
  source: nombres
});

$('.typeahead').bind('typeahead:select', function(ev, suggestion) {
  window.alert('Selection: ' + suggestion);
});