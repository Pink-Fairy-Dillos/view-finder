const app = require('../server');
const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationController.js');
const captionsController = require('../controllers/captionsController.js');

router.post('/newLocation',
    locationController.geoCode,
    locationController.addLocation,
    captionsController.addCaption,
    locationController.getLocationsAndCaptions,
    (req, res) => {
        console.log('made it to the router');
        return res.status(200).json(res.locals.bigList);
    })

router.get('/getList',
    locationController.getLocationsAndCaptions,
    (req, res) => {
        console.log('made it to the router');
        return res.status(200).json(res.locals.bigList);
    })





module.exports = router;


// onst app = require('../server');
// const express = require('express');
// const router = express.Router();
// // const locationController = require('../controllers/locationController.js');
// // const captionsController = require('../controllers/captionsController.js');

// const locations = [
//   {
//     name: "Los Angeles",
//     street_address: "123 Main St",
//     location: { 
//       lat: 34.052,
//       lng: -118.244
//     },
//     captions: ["Test 1", "Test 2", "Test 3"],
//   },
//   {
//     name: "Location 2",
//     location: { 
//       lat: 34.072,
//       lng: -118.284
//     },
//   },
//   {
//     name: "Location 3",
//     location: { 
//       lat: 41.3773,
//       lng: 2.1585
//     },
//   },
//   {
//     name: "Location 4",
//     location: { 
//       lat: 41.3797,
//       lng: 2.1682
//     },
//   },
//   {
//     name: "Location 5",
//     location: { 
//       lat: 41.4055,
//       lng: 2.1915
//     },
//   }
// ];

// router.post('/newLocation',
//     // locationController.geoCode,
//     // locationController.addLocation,
//     (req, res) => {
//         console.log('made it to the router');
//         console.log(req.body)
//         return res.status(200).json(req.body);
//     })

// router.get('/getList', (req, res) => {
//   return res.status(200).json(locations);
// })





// module.exports = router;