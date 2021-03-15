var CryptoDoggies = artifacts.require('CrytoDoggies.sol');

module.exports = function (deployer) {
    deployer.deploy(CryptoDoggies);
}