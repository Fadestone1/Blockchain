const sha256 = require('cryptoJS-master/components/sha256');

class Block {
  constructor(index, timestamp, data, previoushash = ' '){
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previoushash = previoushash;
    this.hash = this.calculateHash();
    }
  calculateHash(){
      return sha256(this.index + this.previoushash + this.timestamp + JSON.stringify(this.data)).toString();
    }
  
}

class Blockchain{
 constructor(){
   this.chain = [this.createGenesisBlock()];
 }
  
  createGenesisBlock(){
   return new Block(0, "01/01/2018", "Genesis block", "0"); 
  }
  
  getLatestBlock(){
    return this.chain(this.chain.length - 1);
  }
  
  addBlock(newBlock){
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.hash = newBlock.calculateHash();
    this.chain.push(newBlock);
  }
  
  isChainValid(){
    for(let i = 1; i < this.chain.length; i++){
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];
      
      if(currentBlock.hash !== currentBlock.calculateHash()){
        return false;
      }
      
      if(currentBlock.previousHash !== previousBlock.hash){
       return false; 
      }
    }
    
    return true;
  }
}

let masseCoin = new Blockchain();
masseCoin.addBlock(new Block(1, "12/07/2018", { amount: 4}));
masseCoin.addBlock(new Block(2, "13/07/2018", { amount: 5}));


console.log('Is blockchain valid?' + massecoin.isChainValid());




