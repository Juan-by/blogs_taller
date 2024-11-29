const {listarBlocksService}= require('../service/BlocksService')

let = listarBlocks  = async (req, res) => {
try{
  let respuesta = await listarBlocksService()
  res.json(respuesta)
}
catch(e){

}
}
module.exports = {listarBlocks}