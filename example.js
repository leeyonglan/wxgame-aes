
const aesjs = require('aes-js');

//encrypt
function toEncrypt(data, key) {
    var dataBytes = aesjs.utils.utf8.toBytes(data);
    var aes = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
    var encrytedBytes = aes.encrypt(dataBytes);
    return aesjs.utils.hex.fromBytes(encrytedBytes)
}

//deEncrypt
function deEncrypt(data, key) {
    var encryptedBytes = aesjs.utils.hex.toBytes(data);
    var aesCtr = new aesjs.ModeOfOperation.ctr(aesjs.utils.utf8.toBytes(key), new aesjs.Counter(5));
    var decryptedBytes = aesCtr.decrypt(encryptedBytes);
    return aesjs.utils.utf8.fromBytes(decryptedBytes);
}
