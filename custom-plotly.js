var Plotly = require('plotly.js/lib/core.js');

Plotly.register([
    require('plotly.js/lib/scatter3d'),
]);
module.exports = Plotly;