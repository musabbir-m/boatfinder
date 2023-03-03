import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Components/Router/Router';

function App() {
  return (
    <div >
      <h2>Tailwind done</h2>
      <button className="btn btn-primary">Button</button>
      <RouterProvider router= {router}> 

      </RouterProvider>

    </div>
  );
}

export default App;
