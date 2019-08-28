exports = module.exports = {
    setup: function (...args) {
        const chai = require('chai');
        const chaiAsPromised = require('chai-as-promised');

        chai.should();
        chai.use(chaiAsPromised);
    },
};
