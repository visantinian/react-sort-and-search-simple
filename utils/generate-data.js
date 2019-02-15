'use strict';

/***
  * dreamjs - fake data generator - https://github.com/adleroliveira/dreamjs
  * jsonfile - module for writing json data to file - https://www.npmjs.com/package/jsonfile
***/
const dream = require('dreamjs');
const jsonfile = require('jsonfile');
var Chance = require('chance');
/***
  * path - output for generated file
  * amount - number of generated objects
  * phraseLength - number of words for phrase property
  * images - array of all available images
***/
var chance = new Chance();
const config = {
  path: './public/data.json',
  amount: 150
};

dream.customType('birthYear', function(helper){

  return chance.year({min: 1930, max: 2001})
});

dream.customType('incrementalId', function(helper){
    return helper.previousItem ? helper.previousItem.id+1 : 0;
});

dream.customType('city', function(helper){
    return chance.city();
});

dream.schema('user', {
  id: 'incrementalId',
  name: 'name',
  birthYear: 'birthYear',
  city: 'city'
});

dream.useSchema('user')
  .generateRnd(config.amount)
  .output((err, result) => {
    jsonfile.writeFile(config.path, result, function(err) {
      console.log(err ? err : `Data was generated and placed to ${config.path}`);
    });
  });
