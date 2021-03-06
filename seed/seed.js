const mongoose = require('mongoose');
const omit = require('object.omit');
mongoose.Promise = Promise;
const { House, Postcode, Town, Locality, County } = require('../models');
const { housesData, postcodeData, townsData, localityData, countyData } = require('./data');

const seedDB = dbUrl => {
    const houses = housesData.map(house => omit(house, '_id'));

    const localities = localityData.map(locality => ({'locality':locality}))
    const counties = countyData.map(county => ({'county':county}))
    return mongoose.connect(dbUrl)
        .then(() => mongoose.connection.db.dropDatabase())
        .then(() => House.collection.insertMany(houses))
        .then(() => Postcode.collection.insertMany(postcodeData))
        .then(() => Town.collection.insertMany(townsData))
        .then(() => Locality.collection.insertMany(localities))
        .then(() => County.collection.insertMany(counties))
        .then(console.log('Records added, closing connection.'))
        .then(() => mongoose.disconnect())
        .catch(console.log)
};

module.exports = { seedDB }