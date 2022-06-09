// https://eth-ropsten.alchemyapi.io/v2/-jrfRKvaZ8Grk_DX8TeYpPchKBj-HEzp

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/-jrfRKvaZ8Grk_DX8TeYpPchKBj-HEzp',
      accounts: ['fbde03a939d99f4076d47218a5d8da19358a0b6ef952fdd1364c47cdf06dc4d9']
    }
  }
}