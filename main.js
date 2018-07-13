const sha256 = require('cryptoJS-master/sha256');

class Block {
  constructor(index, timestamp, data, previoushash = ' '){
    this.index = index;
    this.timestamps = timestamp;
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
   this.chain = ();
 }
  
  createGenesisBlock(){
   return new Block(0, "01/01/2018", "Genesis block", "0"); 
  }
  
  getLatestBlock(){
    return this.chain(this.chain.lemgth - 1);
  }
  
  addBlock(newBlock){
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.hash = newBlock.calculateHash();
    this.chain.push(newBlock);
  }
}

let masseCoin = new Blockchain();
masseCoin.addBlock(new Block(1, "12/07/2018", { amount: 4}));
masseCoin.addBlock(new Block(2, "13/07/2018", { amount: 5}));







