const { ethers } = require('hardhat')

const helpers = require('@nomicfoundation/hardhat-network-helpers')

// const address = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'
// await helpers.impersonateAccount(address)
// const impersonatedSigner = await ethers.getSigner(address)

async function main() {
  const accounts = await ethers.getSigners()
  let deployer, user
  deployer = accounts[0]
  user = accounts[1]

  const Token = await ethers.getContractFactory('Bean')
  const token = await Token.deploy()
  await token.deployed()
  console.log('Bean Token:', token.address)

  const mockUSDC = await ethers.getContractFactory('USDC')
  const mock_usdc = await mockUSDC.deploy()
  await mock_usdc.deployed()
  console.log('Mock USDC Token:', mock_usdc.address)

  const Factory = await ethers.getContractFactory('JoeFactory')
  const factory = await Factory.attach(
    '0xF5c7d9733e5f53abCC1695820c4818C59B457C2C',
  ) // JoeFactory Address ( FUJI)
  console.log('JoeFactory:', factory.address)

  const Router = await ethers.getContractFactory('JoeRouter02')
  const router = await Router.attach(
    '0xd7f655E3376cE2D7A2b08fF01Eb3B1023191A901',
  ) // JoeRouter Address (FUJI)
  console.log('JoeRouter:', router.address)

  //   let allPairsVal = await factory.allPairs(1)
  //   console.log('allPairsVal', allPairsVal)

  let WAVAXAddress = await router.WAVAX()
  //   let WAVAXAddress = '0xd00ae08403b9bbb9124bb305c09058e32c39a48c'
  console.log('WAVAX Address: ', WAVAXAddress)

  await factory.createPair(mock_usdc.address, WAVAXAddress)
  console.log(`Pair Created`)

  // when call get pair...it breaks.
  const pairAddress = await factory.getPair(mock_usdc.address, WAVAXAddress)
  console.log(`"PairAddress Created: ${pairAddress}"`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
