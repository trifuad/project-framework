import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Content from './component/Content';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;