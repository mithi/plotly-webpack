var Plotly = require('./custom-plotly');
var template = require('./template');

Plotly.plot("myDiv", template.data, template.layout);