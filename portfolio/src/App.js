import './App.css';
import { Route , Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='*' element={<PageNotFound/>} />
        <Route exact path='/'  element={<HomePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
