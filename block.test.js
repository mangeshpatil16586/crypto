const Block=require('./block');
const {GENESIS_DATA}=require('./config');
const cryptoHash=require('./crypto-hash');

describe('Block',()=> {
     const timeStamp = 'a-date';
     const lastHash='foo-hash';
    const hash='bar-hash';
    const data=['blockchain','data'];
    const  block=new Block({
        timeStamp,
        lastHash,
        hash,
        data
    });
    it('has a timestamp , lasthash , hash,data', ()=>{

        expect(block.timeStamp).toEqual(timeStamp);

        expect(block.lastHash).toEqual(lastHash); 

        expect(block.hash).toEqual(hash);

        expect(block.data).toEqual(data); 

   });
   describe('genesis()',()=>{

    const genesisBlock=Block.genesis();

    it('it retuns block instents',()=>{
       expect(genesisBlock instanceof Block).toBe(true);

    });

    it('returns a genisis Data',()=>{
     expect(genesisBlock).toEqual(GENESIS_DATA);
    });

   });

   //mine block

   describe('mine block()',()=>{
        const lastBlock=Block.genesis();
        const data='mined Data';
        const mineBlock=Block.mineBlock({lastBlock,data});
        

        it('returns a block instance',()=>{
        expect(mineBlock instanceof Block).toBe(true);
        });
        it('sets the lastHash to be the hash', ()=>{
           expect(mineBlock.lastHash).toEqual(lastBlock.hash);
        });
        it('set the data',()=>{
         expect(mineBlock.data).toEqual(data);
        });
        it('set timestapm',()=>{
            expect(mineBlock.timeStamp).not.toEqual(undefined);
        });
        it('create a sha 256 hash',()=>{
             expect(mineBlock.hash)
              .toEqual(cryptoHash(mineBlock.timeStamp,lastBlock.hash,data));
        });
   });


});

