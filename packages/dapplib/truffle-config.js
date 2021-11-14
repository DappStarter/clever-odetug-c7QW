require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse frown slab carpet response muscle purse install define army giggle'; 
let testAccounts = [
"0x99a1f8cd686a4a40224e6e135d0567b2464ef685cd7225078d09da270f34d585",
"0xbbbd378da4b7980d0918a0b943f9ebb7e94b0e22b50c9631eb54d580de788256",
"0x94c1c9d6b0eaec67f683178e3c2bc3a000094323b50f061dd3ed135d5b8622a5",
"0xbc3f325e8d720dcf3c3c72851b6fdff825dd9fa4f184af3f54fe0c5c401f252e",
"0x4b76f325da0f8597ca48ba7357e81d894ba5f9a8f5230be836c0a8d525357762",
"0x9e7d8cb7d8560d038586fe8f151c49777aaf85538f3fec83a3cba77d15b35546",
"0x27dbbf730b3b97f2c5bccb4b839462616309c7c800744f4685dc3f254ffd91ed",
"0xf2f1d7bc3bda4d18fb6e6d86b6dee2f2488fe0aaa24902ea07198b8f366bb47f",
"0x5dce8cc39ce5ec985441116d24a9785bd0f87a7bf7f0b3cd66b03f5d97f1ea1f",
"0x0837c9d2b60b78e52248ab5ac15d94a0a6f5093ead178f86cae9854612f2867e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


