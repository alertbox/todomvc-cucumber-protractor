const ChaiAsPromisedPlugin = function () {
    const $self = this;

    const chai = require('chai');
    const chaiAsPromised = require('chai-as-promised');

    $self.setup = setup;
    return $self;

    function setup (...args) {
        chai.should();
        chai.use(chaiAsPromised);
    }
};

exports = module.exports = new ChaiAsPromisedPlugin();
