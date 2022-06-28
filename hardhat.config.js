require('@nomiclabs/hardhat-waffle');

module.exports = {
    solidity: '0.8.0',
    networks: {
        rinkeby: {
            url: 'https://rinkeby.infura.io/v3/5fb1b916d0ee414d85c33e5f33e03277',
            accounts: ['8468534a4dc702b6ceb821879ff420447565e475b1b2d3eb2a3b422224e5bccc']
        }
    }
}