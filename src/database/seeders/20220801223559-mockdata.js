'use strict';
const {users, posts} = require('../../../mockdata.js');

module.exports = {
    async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
        await queryInterface.bulkInsert('users',users);
        let usersId = await queryInterface.sequelize.query('SELECT id FROM users');
        usersId = usersId.flat(2).map(user => user.id);
        console.log(usersId);
        await queryInterface.bulkInsert('posts',posts(usersId));
    },

    async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    }
};
