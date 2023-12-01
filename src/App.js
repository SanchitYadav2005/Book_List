import BookForm from './components/BookForm';
import BookList from './components/BookList';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BookList/>
      <BookForm/>
    </div>
  );
}

export default App;
