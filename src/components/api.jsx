import axios from 'axios'

const getData = async (params) => {
    let URL = 'https://api.jobindicator.org/api'
    try {
        let response = await axios.get(URL,{
           params: {
            "year":params.year,
            "month":params.month
        }
        })
       console.log('RES:'+response.data.result)
       return(response.data.result) 


    } catch (error) {
        console.log('Error:' + error)
        
    }

}

export default getData