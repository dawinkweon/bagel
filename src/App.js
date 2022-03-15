import { useEffect, useState } from 'react';
import { fetchCategories } from './api/api';
import './App.css';

function App() {
  const [categories, setCategories] = useState(undefined);

  useEffect(() => {
    const fetch = async() => {
      const categories = await fetchCategories();
      setCategories(categories);
    };
    fetch();
  }, []);

  return (
    <div className="App">
    <center>
      <p>🥯 Bagel</p>
    </center>
    { typeof categories !== "undefined" && categories.map(category => { return (<div>{category.name}</div>) })}
    </div>
  );
}

export default App;
