var Plotly = require('plotly.js/lib/core.js');

Plotly.register([
    require('plotly.js/lib/scatter3d'),
    require('plotly.js/lib/mesh3d'),
]);

module.exports = Plotly;