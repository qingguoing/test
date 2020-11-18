const crypto = require('crypto');
const NodeRSA = require('node-rsa');

const priKey = `
-----BEGIN RSA PRIVATE KEY-----
MIICXQIBAAKBgQCj3eXKo/T9AJgcN8YAJH86GoXIOiZoKgERsZdP+FZTh77CfAKs
s0Lz/BcWRutC1+Kvmr6s0kfoPmPL1+WMwhCWYpGOxgdvK8If9nJnO5EUPmtKrgAf
wmB4zx7IQ5F72+Oz5ljPB+jpQvt6RVoOzwccv4WpVBVnzhFF+CKfIHA6QQIDAQAB
AoGAbq5wicDYtxLxqw2Y9XuxW6OSfT2Zt323nyXe2Csa0+y6Uk7E17V1IatCRM++
FDYRbR8Ob1jRLPMHISZAbCSgYn5MorWDK3YQ8GRUEd5Hxszt1TkaQ2svqPDszJZH
dsDvNX8aGKFEq819GB7h1sky4ObpTzHTanA4CHm/pqArwAECQQDW32in4Z+vpsd0
ccjgIEWXbSP0z/HXYTO9P44ArcQxDjwEySBwJyaxhtms/MU3++MdQStbRPbrPKma
1+v0oInBAkEAwzs9dT5iL7VK2iLRxJrSZVCbhwcLzNZS6VVHCTUXyy922ZI6aV4w
nzbmRYOkyQ8fWDTXkhDmMetJ37PiBx7QgQJAd8CpRi9T3QRZUwd7SZYS0vMLwAwI
n93XhRifnrc5iZGCV7R0NK1NPlGGjYeOrsXebNZ+QG6uIqp7aAYAxiSWwQJBAKvw
YmH9fQ+zRKb0f3X9PErKQQ8cX4IZR5AD8LnlLn1d4fgf1p2xvHScLxUNqXUBgoN2
llwn0fQo2jjP/cJzmwECQQCm1KrrfevKqqh6SHfVdcq2DMFojVqYeZcg8gFWG3UW
QD3Eq/hunr+O67OibIw/Pu6wusvmTOqTXnYpM2qPAP/H
-----END RSA PRIVATE KEY-----
`;
const pubKey = `
-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCj3eXKo/T9AJgcN8YAJH86GoXI
OiZoKgERsZdP+FZTh77CfAKss0Lz/BcWRutC1+Kvmr6s0kfoPmPL1+WMwhCWYpGO
xgdvK8If9nJnO5EUPmtKrgAfwmB4zx7IQ5F72+Oz5ljPB+jpQvt6RVoOzwccv4Wp
VBVnzhFF+CKfIHA6QQIDAQAB
-----END PUBLIC KEY-----
`;

const base64Text = 'nwcMZ/uOUb8zIy+OtWiSwLA1Zjeg5dfbxHLRYdhyE9iL+a86M7Gmo/S6GyAYCA5LddSsIMNMrpV3R6+gn1HByOOxj52Vs3E4S4Zp2K906JLTurERIE6bXspZOPg5qNljvmDFm9gRL3HK1fNRub7B2gquK3iT7Hb5/z/n8PO+Yjs=';
const text = Buffer.from(base64Text, 'base64');

// const message = crypto.publicDecrypt(pubKey, text);
// console.log(message.toString());

const key = new NodeRSA(pubKey);
const info = key.decryptPublic(text);
console.log('xxx', info.toString());