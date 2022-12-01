require('@nomiclabs/hardhat-waffle');

module.exports = {
    solidity: '0.8.0',
    networks: {
        goerli: {
            url: 'https://eth-goerli.g.alchemy.com/v2/L2iev0tvknvMkpHQGJqrCd-FPyvbbTCx',
            accounts: ['2e9247880ce4d52896fa70fa39900c35b797689bc236920ddb37fb715e0317d1']
        }
    }
}