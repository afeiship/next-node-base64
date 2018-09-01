var BASE_64 = 'base64';
var ASCII = 'ascii';


function encode(inString){
    return new Buffer(inString).toString(BASE_64)
}

function decode(inString){
    new Buffer(inString, BASE_64).toString(ASCII);
}

module.exports = {
    encode: encode,
    decode: decode
};