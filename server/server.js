//testing github stuff
const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const apiRouter = require('./routes/api.js')


app.use(express.json());

app.use('/build', express.static(path.join(__dirname, '../build')));
// route handler to respond with main app
app.get("/",
    (req, res) => {

        return res.status(200).sendFile(path.join(__dirname, "../index.html"));
    })


app.use('/api', apiRouter);

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.sendStatus(404));

app.use((error, req, res, next) => {
    const defaultErr = {
        log: "Express error handler caught unknown middleware error",
        status: 400,
        message: { err: "An error occurred" },
    };
    console.log(error);
    const errorObj = Object.assign(defaultErr, error);
    console.log("error log " + errorObj.log)
    res.locals.message = errorObj.message;
    return res.status(errorObj.status).send(eval(errorObj.message));
    // return res.status(errorObj.status).send(res.locals.message);
});

/**
* start server
*/
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;