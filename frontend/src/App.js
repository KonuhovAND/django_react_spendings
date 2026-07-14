import { useEffect, useState } from 'react';

function App() {
  const [msg, setMsg] = useState('Загрузка...');

  useEffect(() => {
    fetch('http://localhost:8000/api/hello/')
      .then(res => res.json())
      .then(data => setMsg(data.message))
      .catch(err => setMsg('Ошибка: ' + err.message));
  }, []);

  return (
    <div>
      <h1>{msg}</h1>
    </div>
  );
}

export default App;