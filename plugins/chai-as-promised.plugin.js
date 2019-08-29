const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

function ChaiAsPromisedPlugin() {}
ChaiAsPromisedPlugin.prototype.setup = function () {
    chai.should();
    chai.use(chaiAsPromised);
};

exports = module.exports = new ChaiAsPromisedPlugin();
