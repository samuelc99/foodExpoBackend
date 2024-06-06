const sqliteConnection = require("../../sqlite")

const creteUsers = require("./createUsers")

async function migrationRun(){
    const schemas = [
        creteUsers
    ].join('')

    sqliteConnection().then(db => db.exec(schemas))
    .catch(error => console.error(error))
}

module.exports = migrationRun