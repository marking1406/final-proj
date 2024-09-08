import axios from  'axios'
export const basicApi = 'http://localhost:3000/api'

export const getData = async (apiAddressEnd) => {
    try {
        let result = await axios.get(`${basicApi}/${apiAddressEnd}`)

        return result.data;
    }
    catch(err){
        console.log(err.response.data.message);
        return [];
    }
}