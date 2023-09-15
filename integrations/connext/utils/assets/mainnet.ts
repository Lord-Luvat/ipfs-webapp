export const mainnetAssets = [
  {
    id: "usdc",
    symbol: "USDC",
    name: "USD Coin",
    image: "/integrations/connext/logos/assets/usdc.png",
    is_stablecoin: true,
    allow_paying_gas: true,
    contracts: [
      {
        contract_address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        chain_id: 1,
        decimals: 6,
        image: "/integrations/connext/logos/assets/usdc.png",
      },
      {
        contract_address: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
        chain_id: 56,
        decimals: 18,
        image: "/integrations/connext/logos/assets/usdc.png",
        next_asset: {
          contract_address: "0x5e7D83dA751F4C9694b13aF351B30aC108f32C38",
          decimals: 6,
          symbol: "nextUSDC",
          image: "/integrations/connext/logos/assets/nextusdc.png",
        },
        is_pool: true,
      },
      {
        contract_address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
        chain_id: 137,
        decimals: 6,
        image: "/integrations/connext/logos/assets/usdc.png",
        next_asset: {
          contract_address: "0xF96C6d2537e1af1a9503852eB2A4AF264272a5B6",
          decimals: 6,
          symbol: "nextUSDC",
          image: "/integrations/connext/logos/assets/nextusdc.png",
        },
        is_pool: true,
      },
      {
        contract_address: "0x7F5c764cBc14f9669B88837ca1490cCa17c31607",
        chain_id: 10,
        decimals: 6,
        image: "/integrations/connext/logos/assets/usdc.png",
        next_asset: {
          contract_address: "0x67E51f46e8e14D4E4cab9dF48c59ad8F512486DD",
          decimals: 6,
          symbol: "nextUSDC",
          image: "/integrations/connext/logos/assets/nextusdc.png",
        },
        is_pool: true,
      },
      {
        contract_address: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
        chain_id: 42161,
        decimals: 6,
        symbol: "USDC.e",
        image: "/integrations/connext/logos/assets/usdc.png",
        tooltip:
          'Circle has renamed bridged USDC to USDC.e on Arbitrum network. For more information please see this <a href="https://www.circle.com/blog/arbitrum-usdc-now-available" target="_blank">link</a>.',
        next_asset: {
          contract_address: "0x8c556cF37faa0eeDAC7aE665f1Bb0FbD4b2eae36",
          decimals: 6,
          symbol: "nextUSDC",
          image: "/integrations/connext/logos/assets/nextusdc.png",
        },
        is_pool: true,
      },
      {
        contract_address: "0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83",
        chain_id: 100,
        decimals: 6,
        image: "/integrations/connext/logos/assets/usdc.png",
        next_asset: {
          contract_address: "0x44CF74238d840a5fEBB0eAa089D05b763B73faB8",
          decimals: 6,
          symbol: "nextUSDC",
          image: "/integrations/connext/logos/assets/nextusdc.png",
        },
        is_pool: true,
      },
    ],
    color: "#2675c8",
    preset: true,
  },
  {
    id: "usdt",
    symbol: "USDT",
    name: "Tether",
    image: "/integrations/connext/logos/assets/usdt.png",
    is_stablecoin: true,
    allow_paying_gas: true,
    contracts: [
      {
        contract_address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        chain_id: 1,
        decimals: 6,
        image: "/integrations/connext/logos/assets/usdt.png",
      },
      {
        contract_address: "0x55d398326f99059fF775485246999027B3197955",
        chain_id: 56,
        decimals: 18,
        image: "/integrations/connext/logos/assets/usdt.png",
        next_asset: {
          contract_address: "0xD609f26B5547d5E31562B29150769Cb7c774B97a",
          decimals: 6,
          symbol: "nextUSDT",
          image: "/integrations/connext/logos/assets/nextusdt.png",
        },
        is_pool: true,
      },
      {
        contract_address: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
        chain_id: 137,
        decimals: 6,
        image: "/integrations/connext/logos/assets/usdt.png",
        next_asset: {
          contract_address: "0xE221C5A2a8348f12dcb2b0e88693522EbAD2690f",
          decimals: 6,
          symbol: "nextUSDT",
          image: "/integrations/connext/logos/assets/nextusdt.png",
        },
        is_pool: true,
      },
      {
        contract_address: "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",
        chain_id: 10,
        decimals: 6,
        image: "/integrations/connext/logos/assets/usdt.png",
        next_asset: {
          contract_address: "0x4cBB28FA12264cD8E87C62F4E1d9f5955Ce67D20",
          decimals: 6,
          symbol: "nextUSDT",
          image: "/integrations/connext/logos/assets/nextusdt.png",
        },
        is_pool: true,
      },
      {
        contract_address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
        chain_id: 42161,
        decimals: 6,
        image: "/integrations/connext/logos/assets/usdt.png",
        next_asset: {
          contract_address: "0x2fD7E61033b3904c65AA9A9B83DCd344Fa19Ffd2",
          decimals: 6,
          symbol: "nextUSDT",
          image: "/integrations/connext/logos/assets/nextusdt.png",
        },
        is_pool: true,
      },
      {
        contract_address: "0x4ECaBa5870353805a9F068101A40E0f32ed605C6",
        chain_id: 100,
        decimals: 6,
        image: "/integrations/connext/logos/assets/usdt.png",
        next_asset: {
          contract_address: "0xF4d944883D6FddC56d3534986feF82105CaDbfA1",
          decimals: 6,
          symbol: "nextUSDT",
          image: "/integrations/connext/logos/assets/nextusdt.png",
        },
        is_pool: true,
      },
    ],
    color: "#039f74",
    preset: true,
  },
  {
    id: "dai",
    symbol: "DAI",
    name: "Dai",
    image: "/integrations/connext/logos/assets/dai.png",
    is_stablecoin: true,
    allow_paying_gas: true,
    contracts: [
      {
        contract_address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        chain_id: 1,
        decimals: 18,
        image: "/integrations/connext/logos/assets/dai.png",
      },
      {
        contract_address: "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
        chain_id: 56,
        decimals: 18,
        image: "/integrations/connext/logos/assets/dai.png",
        next_asset: {
          contract_address: "0x86a343BCF17D79C475d300eed35F0145F137D0c9",
          decimals: 18,
          symbol: "nextDAI",
          image: "/integrations/connext/logos/assets/nextdai.png",
        },
        is_pool: true,
      },
      {
        contract_address: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
        chain_id: 137,
        decimals: 18,
        image: "/integrations/connext/logos/assets/dai.png",
        next_asset: {
          contract_address: "0xaDCe87b14d570665222C1172D18a221BF7690d5a",
          decimals: 18,
          symbol: "nextDAI",
          image: "/integrations/connext/logos/assets/nextdai.png",
        },
        is_pool: true,
      },
      {
        contract_address: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
        chain_id: 10,
        decimals: 18,
        image: "/integrations/connext/logos/assets/dai.png",
        next_asset: {
          contract_address: "0xd64Bd028b560bbFc732eA18f282c64B86F3468e0",
          decimals: 18,
          symbol: "nextDAI",
          image: "/integrations/connext/logos/assets/nextdai.png",
        },
        is_pool: true,
      },
      {
        contract_address: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
        chain_id: 42161,
        decimals: 18,
        image: "/integrations/connext/logos/assets/dai.png",
        next_asset: {
          contract_address: "0xfDe99b3B3fbB69553D7DaE105EF34Ba4FE971190",
          decimals: 18,
          symbol: "nextDAI",
          image: "/integrations/connext/logos/assets/nextdai.png",
        },
        is_pool: true,
      },
      {
        contract_address: "0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d",
        chain_id: 100,
        decimals: 18,
        image: "/integrations/connext/logos/assets/wxdai.png",
        symbol: "WXDAI",
        next_asset: {
          contract_address: "0x0e1D5Bcd2Ac5CF2f71841A9667afC1E995CaAf4F",
          decimals: 18,
          symbol: "nextDAI",
          image: "/integrations/connext/logos/assets/nextdai.png",
        },
        wrapable: true,
        is_pool: true,
      },
    ],
    color: "#f4b333",
    preset: true,
  },
  {
    id: "eth",
    symbol: "WETH",
    name: "Ethereum",
    image: "/integrations/connext/logos/assets/eth.png",
    contracts: [
      {
        contract_address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        chain_id: 1,
        decimals: 18,
        symbol: "WETH",
        image: "/integrations/connext/logos/assets/weth.png",
        wrapable: true,
      },
      {
        contract_address: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
        chain_id: 56,
        decimals: 18,
        symbol: "WETH",
        image: "/integrations/connext/logos/assets/weth.png",
        next_asset: {
          contract_address: "0xA9CB51C666D2AF451d87442Be50747B31BB7d805",
          decimals: 18,
          symbol: "nextWETH",
          image: "/integrations/connext/logos/assets/nextweth.png",
        },
        is_pool: true,
      },
      {
        contract_address: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
        chain_id: 137,
        decimals: 18,
        symbol: "WETH",
        image: "/integrations/connext/logos/assets/weth.png",
        next_asset: {
          contract_address: "0x4b8BaC8Dd1CAA52E32C07755c17eFadeD6A0bbD0",
          decimals: 18,
          symbol: "nextWETH",
          image: "/integrations/connext/logos/assets/nextweth.png",
        },
        is_pool: true,
      },
      {
        contract_address: "0x4200000000000000000000000000000000000006",
        chain_id: 10,
        decimals: 18,
        symbol: "WETH",
        image: "/integrations/connext/logos/assets/weth.png",
        next_asset: {
          contract_address: "0xbAD5B3c68F855EaEcE68203312Fd88AD3D365e50",
          decimals: 18,
          symbol: "nextWETH",
          image: "/integrations/connext/logos/assets/nextweth.png",
        },
        wrapable: true,
        is_pool: true,
      },
      {
        contract_address: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
        chain_id: 42161,
        decimals: 18,
        symbol: "WETH",
        image: "/integrations/connext/logos/assets/weth.png",
        next_asset: {
          contract_address: "0x2983bf5c334743Aa6657AD70A55041d720d225dB",
          decimals: 18,
          symbol: "nextWETH",
          image: "/integrations/connext/logos/assets/nextweth.png",
        },
        wrapable: true,
        is_pool: true,
      },
      {
        contract_address: "0x6A023CCd1ff6F2045C3309768eAd9E68F978f6e1",
        chain_id: 100,
        decimals: 18,
        symbol: "WETH",
        image: "/integrations/connext/logos/assets/weth.png",
        next_asset: {
          contract_address: "0x538E2dDbfDf476D24cCb1477A518A82C9EA81326",
          decimals: 18,
          symbol: "nextWETH",
          image: "/integrations/connext/logos/assets/nextweth.png",
        },
        is_pool: true,
      },
    ],
    allow_paying_gas: true,
    color: "#636890",
    preset: true,
  },
]
