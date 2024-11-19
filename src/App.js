import React, { useState } from 'react';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import { Loading, Result, Error } from './components/RequestComponents';
import './App.css';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const fetchData = (entity, idNum) => {
    setLoading(true);
    setResult('');
    setError('');

    if (idNum < 1 || idNum > 10) {
      setLoading(false);
      setError('Ошибка: ID должен быть от 1 до 10.');
      return;
    }

    fetch(`https://swapi.py4e.com/api/${entity}/${idNum}`)
      .then(res => {
        if (!res.ok) {
          return Promise.reject(new Error(`Ошибка: ${res.status} ${res.statusText}`));
        }
        return res.json();
      })
      .then(data => {
        setLoading(false);
        if (entity === 'people') {
          setResult(`Имя: ${data.name}`);
        } else if (entity === 'films') {
          setResult(`Название: ${data.title}`);
        } else if (entity === 'planets') {
          setResult(`Название: ${data.name}`);
        } else if (entity === 'starships') {
          setResult(`Название: ${data.name}`);
        }
      })
      .catch(error => {
        setLoading(false);
        setError(error.message); // Преобразуем объект Error в строку
      });
  };

  return (
    <div className="container">
      <Header />
      <SearchForm onSearch={fetchData} />
      {loading && <Loading />}
      {result && <Result result={result} />}
      {error && <Error error={error} />}
    </div>
  );
};

export default App;