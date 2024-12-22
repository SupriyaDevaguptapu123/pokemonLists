import { List } from '../../../packages/ui/components/List';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const api = "https://pokeapi.co/api/v2/pokemon?limit=151";

const App = () => {
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


  return (
    <>
      <h1>Pokemon List:</h1>
      {data.map(item => (<li key={item.url}>{item.name}

      </li>))}
    </>
  );
};

export default App;
