/* eslint-disable no-undef */
const {sequelize} = require('./src/models/index.js');
const app = require('./src/app.js');
require('dotenv').config();

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    sequelize.authenticate({force: false}).then(() => {
        console.log('Connection has been established successfully.');
    });
});