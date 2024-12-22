import { List } from '../../../packages/ui/components/List'; // Ensure 'ui' package exports List properly
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const api = "https://pokeapi.co/api/v2/pokemon?limit=151";

const App = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(api)
      .then(response => {
        setData(response.data.results);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (data && data.length > 0) {
      dispatch({ type: 'SET_POKEMON_LIST', payload: data });
    }
  }, [data, dispatch]);
  console.log(data)

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <h1>Pokemon List:</h1>
      <List data={data} />
    </>
  );
};

export default App;
