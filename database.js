const mongoose = require('mongoose');

function DatabaseConnect() {
    mongoose.connect(process.env.URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log('connected to mongodb')).catch(e => console.log(e))
}

module.exports = DatabaseConnect;