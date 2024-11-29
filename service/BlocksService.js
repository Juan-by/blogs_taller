const {Block}=require('../models')
let = listarBlocksService = async () => {
    try{
       let resp = await Block.findAll()
        return resp;
    }
    catch(e){
    
    }
    }
 module.exports = {listarBlocksService}
 