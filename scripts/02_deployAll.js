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
  const usdc = await USDC.deploy()
  console.log('usdc')

  const DAI = await ethers.getContractFactory('USDC')
  const dai = await DAI.deploy()
  console.log('dai')

  const USDT = await ethers.getContractFactory('USDC')
  const usdt = await USDT.deploy()
  console.log('usdt')

  const ThreeCRV = await ethers.getContractFactory('3CRV')
  const threecrv = await ThreeCRV.deploy("ThreeCurve", "3CRV", 18, 100000)
  console.log('3CRV:', threecrv.address)

  const crv3Pool = await ethers.getContractFactory('CRV3Pool')
  const crv3pool = await crv3Pool.deploy(user.address,[usdt.address, usdc.address, dai.address], threecrv.address, 2, 1 ,2)
  console.log('CRV3Pool:', crv3pool.address)

  const UnripeBean = await ethers.getContractFactory('contracts/pool/UnripeBean.sol:BeanstalkERC20')
  const ub = await UnripeBean.deploy(user.address, "UnripeBean", "UB")
  console.log('UnripeBean:', ub.address)

  const UNRIPE_LP = await ethers.getContractFactory('contracts/pool/UNRIPE_LP.sol:BeanstalkERC20')
  const lp = await UNRIPE_LP.deploy(user.address, "UnripeLP", "ULP")
  console.log('UNRIPE_LP:', lp.address)

  const Fertilizer = await ethers.getContractFactory('Fertilizer')
  const fertilizer = await Fertilizer.deploy()
  console.log('Fertilizer:', fertilizer.address)

  // const USDC = await ethers.getContractFactory('USDC')
  // const usdc = await USDC.deploy()
  // console.log('USDC:', usdc.address)

  const TRI_CRYPTO = await ethers.getContractFactory('TRI_CRYPTO')
  const tri = await TRI_CRYPTO.deploy("TRICRYPTO", "TC")
  console.log('TRI_CRYPTO:', tri.address)
  
//   def __init__(
//     owner: address,
//     admin_fee_receiver: address,
//     A: uint256,
//     gamma: uint256,
//     mid_fee: uint256,
//     out_fee: uint256,
//     allowed_extra_profit: uint256,
//     fee_gamma: uint256,
//     adjustment_step: uint256,
//     admin_fee: uint256,
//     ma_half_time: uint256,
//     initial_prices: uint256[N_COINS-1]
// ):

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
