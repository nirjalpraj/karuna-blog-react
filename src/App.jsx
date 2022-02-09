import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Blog from './Pages/Blog';
import HomePage from './Pages/HomePage';
function App() {
  return (
    <div>
    <Header/>
    <Routes>
      <Route path="/" element = {<HomePage />}/>
      <Route path="/blog" element = {<Blog />}/>

    </Routes>
    </div>
  
  );
}

export default App;
