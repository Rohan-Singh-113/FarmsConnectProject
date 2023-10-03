require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
const privateKey = fs.readFileSync(".secret").toString().trim() || "b3d0346273c685a1c7fe8c4efb47c6b90fd20b4b61f8f5cdc60ec6e43d9a5283";

// infuraId is optional if you are using Infura RPC
const infuraId = fs.readFileSync(".infuraid").toString().trim() || "r3-czbLFbmnC5dGjqMHJ0xJjQ5h0-88Y";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      // Infura
      url: `https://polygon-mumbai.g.alchemy.com/v2/95TDcAqK_-Ll03odXPyn8eARsEEQBgXg`,
      accounts: [privateKey]
    },
    matic: {
      
      url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
      url: "https://rpc-mainnet.maticvigil.com",
      accounts: [privateKey]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};


