module.exports = {

    getVehicle: async ( req, res) => {
        let query = 'SELECT * FROM vehicles';

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




//     getRealEstate: async ( req, res) => {
//       let query = 'SELECT * FROM real_estate';

//       try{

//           const result = await dbQuery(query)
//           res.send(result)

//       }catch(err){
//         console.log(err.message)
//         res.status(500).json({
//           message:err.message
//         })
//       }
//   },
  

//   getFurniture: async ( req, res) => {
//     let query = 'SELECT * FROM furniture';

//     try{

//         const result = await dbQuery(query)
//         res.send(result)

//     }catch(err){
//       console.log(err.message)
//       res.status(500).json({
//         message:err.message
//       })
//     }
// }

  


}