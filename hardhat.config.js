require('@nomiclabs/hardhat-waffle')
require('@nomiclabs/hardhat-ethers')
require('hardhat-contract-sizer')
require('hardhat-gas-reporter')
require('solidity-coverage')
require('@nomicfoundation/hardhat-toolbox')

module.exports = {
  networks: {
    // localhost: {
    //   chainId: 31337,
    //   // url: 'http://localhost:8545',
    //   forking: {
    //     url: 'https://api.avax.network/ext/bc/C/rpc',
    //     enabled: true,
    //   },
    // },

    hardhat: {
      chainId: 43113,
      gasPrice: 225000000000,
      forking: {
        url: 'https://api.avax-test.network/ext/bc/C/rpc',
        enabled: true,
      },
    },
  },
  solidity: {
    compilers: [
      {
        version: '0.5.16',
      },
      {
        version: '0.6.6',
      },
      {
        version: '0.7.6',
      },
      {
        version: '0.7.0',
      },
      {
        version: '0.6.12',
      },
    ],
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  gasReporter: {
    enabled: true,
  },
  mocha: {
    timeout: 100000,
  },
}
