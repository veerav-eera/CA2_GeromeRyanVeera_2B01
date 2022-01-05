const pg = require("pg")

let connection;
exports.connect = (connectionString) => {
    if (connection) {
        const oldConnection = connection
        connection = null
        return oldConnection.end()
            .then(() => {
                exports.connect(connectionString)
            })
    }

    connection = new pg.Client({
        connectionString,
    })
    return connection.connect()
        .catch((error) => {
            connection = null
            throw error
        })
}

exports.query = (text, params, callback) => {
    if (!connection) {
        return callback(new Error("Not Connected To Database"))
    }

    const start = Date.now()
    return connection.query(text, params, (error, result) => {
        const duration = Date.now() - start;
        console.log('executed query', { text, duration });
        callback(error, result);
    });
}
