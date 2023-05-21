
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Components/Router/Router';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='mx-auto w-full' >
      
      <RouterProvider router= {router}> 

      </RouterProvider>
      <Toaster/>

    </div>
  );
}

export default App;
