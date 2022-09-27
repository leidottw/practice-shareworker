import { useState } from 'react';
import Room from './Room';

function App() {
  const [name, setName] = useState<string>();
  const [isConnect, setConnect] = useState<boolean>(false);

  return (
    <div className="App">
      <header>Chat</header>
      <label htmlFor="name">暱稱</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
        disabled={isConnect}
        style={{ margin: 10 }}
      ></input>
      <button
        onClick={() => {
          name && setConnect(!isConnect);
        }}
      >
        {isConnect ? 'Disconnect' : 'Connect'}
      </button>
      {isConnect ? <Room name={name} /> : null}
    </div>
  );
}

export default App;
