const db = require('../models/databaseModel.js');

const captionsController = {};


captionsController.addCaption = (req, res, next) => {
    const { caption } = req.body;
    // Add to database (db)
    // Variable text instructions (SQL)
    const text = 'INSERT into captions(location_id, caption) VALUES($1, $2)';
    const params = [res.locals.newEntryID, caption];
    db.query(text, params, (err, res) => {
        if (err) {
            next({
                log: 'Express error handler caught unknown middleware error',
                status: 500,
                message: { err: 'Unable to add a new caption' },
            });
        } else {
            next();
        }
    })

};








module.exports = captionsController;
//const db = require('../models/databaseModel.js');

// const captionController = {};
// // We added our location into locations table and now we want to add caption
// // Taking caption







// module.exports = captionController;