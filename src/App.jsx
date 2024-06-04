import styles from './App.module.css';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
function App() {
  return (
    <div className={styles.app}>
     <Header/>
    <MainContent/>
    </div>
  );
}

export default App;
