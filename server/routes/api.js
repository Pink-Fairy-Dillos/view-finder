const app = require('../server');
const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationController.js');
const captionsController = require('../controllers/captionsController.js');

router.post('/newLocation',
    locationController.geoCode,
    locationController.addLocation,
    captionsController.addCaption,
    (req, res) => {
        console.log('made it to the router');
        return res.status(200).send();
    })

router.get('/getList',
    locationController.getLocationsAndCaptions,
    (req, res) => {
        console.log('made it to the router');
        return res.status(200).json(res.locals.bigList);
    })





module.exports = router;