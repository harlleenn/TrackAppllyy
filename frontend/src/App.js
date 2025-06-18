
import Internship from './components/internship';
import ThemeProvider from './components/ThemeProvider';
import { useContext } from 'react';
import ThemeContext from './components/ThemeContext';

function AppContent() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme === 'light' ? 'bg-blue-400' : 'bg-pink-200'}>
      <Internship />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
