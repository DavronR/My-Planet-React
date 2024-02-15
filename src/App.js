import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import UserTrivia from './data/userTrivia';
import HomePage from './pages/HomePage'
import TriviaPage from './pages/TriviaPage';
import AddTriviaForm from './pages/AddTriviaForm';
import ContactForm from './pages/ContactForm';
import CustomNavbar from './components/CustomNavbar';

function App() {
  const [triviaData, setTriviaData] = React.useState(UserTrivia);
  
  return (
    <BrowserRouter>
        <CustomNavbar />
    <div className="p-5">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/planets" element={<HomePage />} />
          <Route path="/latest-trivias" element={<TriviaPage triviaData={triviaData} />} />
          <Route path="/add-trivia" element={<AddTriviaForm setTriviaData={setTriviaData} />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;