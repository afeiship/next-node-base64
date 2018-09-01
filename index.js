var BASE_64 = 'base64';
var ASCII = 'ascii';


function encode(inString){
    return Buffer.from(inString).toString(BASE_64)
}

function decode(inString){
    return Buffer.from(inString, BASE_64).toString(ASCII);
}

module.exports = {
    encode: encode,
    decode: decode
};