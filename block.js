const {GENESIS_DATA}=require('./config');
const cryptoHash=require('./crypto-hash');
class Block{
    constructor({timeStamp,lastHash,hash,data}) {
          this.timeStamp=timeStamp;
          this.lastHash=lastHash;
          this.hash=hash;
          this.data=data;
    } 
    static genesis(){
        return new Block(GENESIS_DATA);
    }
    static mineBlock({lastBlock,data}){
        const timeStamp= Date.now();
        const lastHash=lastBlock.hash;
        const hash=cryptoHash(timeStamp,lastHash,data)

        return new this({
            timeStamp,
            lastHash,
            data,
            hash
    });
}
}

module.exports=Block;
