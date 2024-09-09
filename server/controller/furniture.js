module.exports = {

    getFurniture: async ( req, res) => {
        let query = 'SELECT * FROM furniture';

        try{

            const result = await dbQuery(query)
            res.send(result)

        }catch(err){
          console.log(err.message)
          res.status(500).json({
            message:err.message
          })
        }
    }
}