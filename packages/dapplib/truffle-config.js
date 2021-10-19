require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kitten fresh skull drift riot noise hole inner profit army gaze'; 
let testAccounts = [
"0x06d4ad437109017f5555f0673ee97729d07ed6e4b8081aa04c36fb4212327f81",
"0xb1deecd083ae701a4314dd08084f28d612dc43cf170d6161c1fe510b55244b83",
"0x204d6771866717ffe86ca3dea35f2043da3cee0f888be98186634412eea673f3",
"0x430627e9942349c5f6037accc75d6b934e85e5a35985916d7ce07100d82d5cb1",
"0xb3ab976075cf381089530fef600fd19effda9fb9cd703286b28837545a39d29a",
"0x08d240bb5172bb8a1f0fa907a9db954dbc71bd10baee2052fbb7efebf684b7b8",
"0xa2795b3db347510b130de3a1c6822e3d79f0b88a7e235edb192ecf846872c92e",
"0x1854ec29d8fa0e4813617ce16ea8a1a63b022c8aede6604b65112f8b330bc213",
"0xadc116a39731af0f956c8f55008ad4ab25e0cc88af628e89445f75e4723099ea",
"0x183452e2b71bbc76cdd1f7e4b9f2cee0d6cb4cc70e782127e0d24e7405469c99"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

