import './sass/main.scss';

import data from './data/data.json';

function App() {
  const menuItems = data.data;

  console.log(menuItems);

  return (
    <main className="main">
      <div className="menu">
        <h2>Desserts</h2>
        <div className="menu-items">
          {menuItems.map((item) => (
            <div className="card">{item.name}</div>
          ))}
        </div>
      </div>
      <div className="cart">Cart</div>
    </main>
  );
}

export default App;
