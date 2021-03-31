const initialState = {
  loading:false,
  error:null,
  data:[]
}

const reducer = (state=initialState,action) => {

    switch(action.type){

      case 'search_repositories':return {
        loading:true,
        error:null,
        data:[]

      }
      case 'search_repositories_success':return {
        loading:false,
        error:null,
        data:action.payload

      }
      case 'search_repositories_error':return {
        loading:false,
        error:action.payload,
        data:[]

      }
      default : return state;
    }
}
export default reducer