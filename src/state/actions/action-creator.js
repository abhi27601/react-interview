import axios from 'axios';
import 'redux-thunk';

export const searchRepositories = (term) => {

  return async(dispatch) => {
    dispatch({
      type:'search_repositories'
    })

    try {
        const {data} = await axios.get('https://registry.npmjs.org/-/v1/search',{
          params:{
            text:term
          }
        })
    }
    catch(error){
      console.log(error)
      dispatch({
        type:'search_repositories_error',
        payload:error.message
      })
    }

    const names = data.objects.map((result)=> {
      return result.package.name
    })

    dispatch({
      type:'search_repositories_success',
      payload:names
    })

      
  } 
}