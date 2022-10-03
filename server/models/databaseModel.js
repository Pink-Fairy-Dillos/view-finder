const { Pool } = require('pg');

const PG_URI = 'postgres://gfywgegq:txNyH3rzI0EDQt49pnzDuaxVQvgavwxc@otto.db.elephantsql.com/gfywgegq';

// create a new pool here using the connection string above
const pool = new Pool({
    connectionString: PG_URI
});

module.exports = {
    query: (text, params, callback) => {
        console.log('executed query', text);
        return pool.query(text, params, callback);
    }
};