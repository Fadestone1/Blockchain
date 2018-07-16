const sha256 = require('cryptoJS-master/components/sha256');
class Transcations {
  constructor(
}
class Block {
  constructor(timestamp, transactions, previoushash = ' '){
    this.timestamp = timestamp;
    this.transactions = transactions;
    this.previoushash = previoushash;
    this.hash = this.calculateHash();
    this.nonce = 0;
    }
  calculateHash(){
      return sha256(this.previoushash + this.timestamp + JSON.stringify(this.transactions) + this.nonce).toString();
    }
  mineBlock(difficulty){
    while(this.hash.substring(0 ,difficulty) !== Array(difficulty + 1).join("0")){
      this.nonce++;
      this.hash = this.calculateHash();
    }
    console.log("Block mined :" + this.Hash);
  }
}

class Blockchain{
 constructor(){
   this.chain = [this.createGenesisBlock()];
   this.difficulty = 2;
 }
  
  createGenesisBlock(){
   return new Block("01/01/2018", "Genesis block", "0"); 
  }
  
  getLatestBlock(){
    return this.chain(this.chain.length - 1);
  }
  
  addBlock(newBlock){
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.mineBlock(this.difficulty);
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



