import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
//import { actionCreators } from "../state";
const RepositoriesList= () => {
  const [term, setTerm] = useState('');
  const [name,setName] = useState('Abhijit')
  const dispatch = useDispatch();
  const {data,error,loading} = useSelector((state) => state.repositories)
  
  const onSubmit=(e)=> {
      e.preventDefault();
      dispatch(actionCreators.SearchRepositories(term));
  }
  
   

  return (
    <div>
      {}
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e)=> setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}

      {loading && <h3>Loading ...</h3>}

      {!error && !loading && 
      
      data.map((name)=> <div key={name}>{name}</div>)
      }      

     
    </div>
  );
};

export default RepositoriesList;
