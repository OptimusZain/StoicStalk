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

  const mockUSDT = await ethers.getContractFactory('USDT')
  const mock_usdt = await mockUSDT.deploy()
  await mock_usdt.deployed()
  console.log('Mock USDT Token:', mock_usdt.address)

  const LPToken = await ethers.getContractFactory('LPToken')
  const lptoken = await LPToken.deploy("LPToken", "LP", "18", "10000000000000000000000000")
  console.log('LP Token deployed at:', lptoken.address)
  console.log('Deployer:', user.address)

  const Pool = await ethers.getContractFactory('Pool')
  const pool = await Pool.deploy(user.address, [mock_usdc.address, token.address, mock_usdt.address], lptoken.address, 2, 1, 2)
  console.log('Pool Address:', pool.address)

//   console.log("Coin 1: ", pool.coins[0]);
//   console.log("Coin 2: ", pool.coins[1]);
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
