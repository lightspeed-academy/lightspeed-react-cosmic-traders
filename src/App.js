import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

import Outpost from './outpost/Outpost'
import Checkout from './checkout/Checkout'
import Header from './header/Header'
import styles from './App.module.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className={styles.content}>
        <Routes>
          <Route path="/outpost" element={<Outpost />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/" element={<Navigate to="/outpost" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
