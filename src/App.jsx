// src/App.jsx
import Works from './components/Works';
import './index.css'

function App() {
  return (
    <div>
      <header className="bg-gray-900 text-white py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">My Portfolio</h1>
        </div>
      </header>

      <Works />
    </div>
  );
}

export default App;
