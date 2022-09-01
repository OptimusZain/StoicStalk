const { ethers } = require('hardhat')

const helpers = require('@nomicfoundation/hardhat-network-helpers')

async function main() {
  const accounts = await ethers.getSigners()
  let deployer, user
  deployer = accounts[0]
  user = accounts[1]

  const Token = await ethers.getContractFactory('Bean')
  const token = await Token.deploy()
  await token.deployed()
  console.log('Bean Token:', token.address)

  const beanCRVMetaPool = await ethers.getContractFactory('BeanCRVMetaPool')
  const beanCRVmetapool = await beanCRVMetaPool.deploy()
  await beanCRVmetapool.deployed()
  console.log('BeanCRVMetaPool:', beanCRVmetapool.address)

  const USDC = await ethers.getContractFactory('USDC')
  const usdc = await USDC.deploy(beanCRVmetapool.address)

  const DAI = await ethers.getContractFactory('USDC')
  const dai = await DAI.deploy(beanCRVmetapool.address)

  const USDT = await ethers.getContractFactory('USDC')
  const usdt = await USDT.deploy(beanCRVmetapool.address)

  const ThreeCRV = await ethers.getContractFactory('3CRV')
  const threecrv = await ThreeCRV.deploy()
  console.log('3CRV:', threecrv.address)

  const crv3Pool = await ethers.getContractFactory('CRV3Pool')
  const crv3pool = await crv3Pool.deploy(user.address,[usdt.address, usdc.address, dai.address], threecrv.address, 2, 1 ,2)
  await mock_usdt.deployed()
  console.log('CRV3Pool:', crv3pool.address)

  const UnripeBean = await ethers.getContractFactory('UnripeBean')
  const ub = await UnripeBean.deploy()
  console.log('UnripeBean:', ub.address)

  const UNRIPE_LP = await ethers.getContractFactory('UNRIPE_LP')
  const lp = await UNRIPE_LP.deploy()
  console.log('UNRIPE_LP:', lp.address)

  const Fertilizer = await ethers.getContractFactory('Fertilizer')
  const fertilizer = await Fertilizer.deploy()
  console.log('Fertilizer:', fertilizer.address)

  // const USDC = await ethers.getContractFactory('USDC')
  // const usdc = await USDC.deploy()
  // console.log('USDC:', usdc.address)

  const TRI_CRYPTO = await ethers.getContractFactory('TRI_CRYPTO')
  const tri = await TRI_CRYPTO.deploy()
  console.log('TRI_CRYPTO:', tri.address)
  
  const TRI_CRYPTO_POOL = await ethers.getContractFactory('TRI_CRYPTO_POOL')
  const triPool = await TRI_CRYPTO_POOL.deploy()
  console.log('TRI_CRYPTO_POOL:', triPool.address)

  const CURVE_ZAP = await ethers.getContractFactory('CURVE_ZAP')
  const crvZap = await CURVE_ZAP.deploy()
  console.log('CURVE_ZAP:', crvZap.address)

  const UNRIPE_CURVE_BEAN_LUSD_POOL = await ethers.getContractFactory('UNRIPE_CURVE_BEAN_LUSD_POOL')
  const ucblp = await UNRIPE_CURVE_BEAN_LUSD_POOL.deploy()
  console.log('UNRIPE_CURVE_BEAN_LUSD_POOL:', ucblp.address)

  const UNRIPE_CURVE_BEAN_METAPOOL = await ethers.getContractFactory('UNRIPE_CURVE_BEAN_METAPOOL')
  const ucbm = await UNRIPE_CURVE_BEAN_METAPOOL.deploy()
  console.log('UNRIPE_CURVE_BEAN_METAPOOL:', ucbm.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
