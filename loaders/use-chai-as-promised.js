

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

module.exports = {
    use: function () {
        chai.should();
        chai.use(chaiAsPromised);
    },
}