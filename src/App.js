import logo from './logo.svg';
import './App.css';
import Easy from './components/easy';
import Hard from './components/hard'

function App() {
  return (
    <div className="App">
      {/* Very Easy */}
      <p>Hello my name is Jaylin, my number is 980-777-7777, and I was born on 07/10/2004</p>

      {/* Easy & Medium*/}
      <Easy />

      {/* Hard */}
      <Hard />
    </div>
  );
}

export default App;
