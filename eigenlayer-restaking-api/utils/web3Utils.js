// utils/web3Utils.js
const Web3 = require('web3');
const rpcUrl = process.env.ETHEREUM_RPC_URL || 'https://mainnet.infura.io/v3/YOUR_INFURA_KEY';
const web3 = new Web3(rpcUrl);

/**
 * Convert Ether to Wei
 * @param {string|number} valueInEth
 * @returns {string} value in Wei as string
 */
function toWei(valueInEth) {
  return web3.utils.toWei(valueInEth.toString(), 'ether');
}

/**
 * Convert Wei to Ether
 * @param {string|BN|number} valueInWei
 * @returns {string} value in Ether as string
 */
function fromWei(valueInWei) {
  return web3.utils.fromWei(valueInWei.toString(), 'ether');
}

/**
 * Check if a string is a valid Ethereum address
 * @param {string} addr
 * @returns {boolean}
 */
function isAddress(addr) {
  return web3.utils.isAddress(addr);
}

/**
 * Return EIP-55 checksum address
 * @param {string} addr
 * @returns {string} checksum address
 */
function toChecksumAddress(addr) {
  return web3.utils.toChecksumAddress(addr);
}

/**
 * Convert UTF-8 string to hex
 * @param {string} text
 * @returns {string} hex string
 */
function utf8ToHex(text) {
  return web3.utils.utf8ToHex(text);
}

/**
 * Hash a Solidity-packed encoding of inputs
 * @param {...any} args pass objects like {type, value}
 * @returns {string} hex hash
 */
function soliditySha3(...args) {
  return web3.utils.soliditySha3(...args);
}

module.exports = {
  web3,
  toWei,
  fromWei,
  isAddress,
  toChecksumAddress,
  utf8ToHex,
  soliditySha3,
};
