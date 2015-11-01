var mongoose = require('mongoose');

var GraphDataSchema = new mongoose.Schema({
  Year: String,
  China: String,
  'United States': String
}, 
{
  collection: 'graph-data-collection'
});

mongoose.model('GraphData', GraphDataSchema);