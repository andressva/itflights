import './App.scss';

import { AppProvider } from './context';

import { Home } from './pages/Home';
import { Header } from './components/Header';
import { Menu } from './components/Menu';

function App() {
  return (
    <AppProvider>
    <div className="App">
      <Header /> 
      <Menu />
      <Home />
    </div>
    </AppProvider>
  );
}

export default App;
