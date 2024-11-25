import logo from './logo.svg';
import './App.css';

import Header from './components/Header'; // Make sure the path matches your project structure
import MainContent from './components/MainContent'; // Make sure the path matches your project structure
import Footer from './components/Footer'; // Make sure the path matches your project structure


function App() {
  return (
    <div style={styles.app}>
            <Header />
            <MainContent />
            <Footer />
        </div>
  );
}

const styles = {
  app: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
  }
};

export default App;
