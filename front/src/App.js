import logo from './logo.svg';
import './styles/App.css';

import Header from './components/Header'; // Make sure the path matches your project structure
import MainContent from './components/MainContent'; // Make sure the path matches your project structure
import Footer from './components/Footer'; // Make sure the path matches your project structure


function App() {
  return (
    <div className="app"> {/* Use the className defined in App.css */}
            <Header />
            <div className="main-content">
                <MainContent />
            </div>
            <Footer />
        </div>
  );
}


export default App;
