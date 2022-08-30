# Task

- Set up Hardhat in TS [x]

  - Create Test enviroment
    - Shared Folder
      - Fixures
        - deploy contracts
        - create scenerios
      - mocks
        - users
        - tokens
    - unit
      - Contract Test --> ex: if the contract is called Wallet...the folder is called wallet
        - each file will be indie test cases for each func in the contract(line by line)
        - main file to call the test
  - Create Deploy Folder
    - order the deployments

- Deploy Joe Fork locally [x]

  - usdc : weth pair [x]
  - add liquidity to pair

- Deploy Mock ERC20 [x]

  - USDC [x]

- Create BEAN/USDC Pair contract [x]

- Deploy Bean Contract via Diamond Contract locally(hardhat) - BEAN(Stoic)

- Deploy Bean Contract via Diamond Contract Testnet(fuji) - BEAN(Stoic)

- Make Proper Changes to Stoic then redeploy to Testnet(fuji)

_run command follow => stoic-contracts/readme.md first_

1. npx hardhat node in one terminal
2. npx hardhat run scripts/deploy.js --network localhost
