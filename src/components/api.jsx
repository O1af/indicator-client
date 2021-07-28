import axios from 'axios'

const getData = async (params) => {
    let URL = 'http://indicator-env.eba-ubx5a7g2.us-east-2.elasticbeanstalk.com/api'
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