import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'Ginza-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xA650e453bFE9032A8a9f98A323d5312dde631E42',
    },
    tokenSymbol: 'Ginza',
    tokenAddresses: {
      97: '',
      56: '0x32d7DA6a7cf25eD1B86E1B0Ee9a62B0252D46B16',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    projectLink: 'https://www.adcx.io/frontendv1/#/add/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56/0x32d7DA6a7cf25eD1B86E1B0Ee9a62B0252D46B16'
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'Ginza-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x8e7886aA7703217DD2fA08C3D0C839058A4F2110',
    },
    tokenSymbol: 'Ginza',
    tokenAddresses: {
      97: '',
      56: '0x32d7DA6a7cf25eD1B86E1B0Ee9a62B0252D46B16',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    projectLink: 'https://www.Dex.io/frontendv1/#/add/BNB/0x32d7DA6a7cf25eD1B86E1B0Ee9a62B0252D46B16'
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x8Be765Ec65c7d2Ea6CbDADC33cf69da32993A564',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3,
    risk: 1,
    lpSymbol: 'Ginza-USDT LP',
    lpAddresses: {
      97: '',
      56: '0x6fB833D89f09e2944446cF8a848AD9434Bc8F76A',
    },
    tokenSymbol: 'Ginza',
    tokenAddresses: {
      97: '',
      56: '0x32d7DA6a7cf25eD1B86E1B0Ee9a62B0252D46B16',
    },
    quoteTokenSymbol: QuoteToken.USDT,
    quoteTokenAdresses: contracts.usdt,
    projectLink: 'https://www.Dex.io/frontendv1/#/add/0x55d398326f99059fF775485246999027B3197955/0x32d7DA6a7cf25eD1B86E1B0Ee9a62B0252D46B16'
  },
]

export default farms
