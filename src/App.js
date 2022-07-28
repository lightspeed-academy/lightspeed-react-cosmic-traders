import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'

import Outpost from './outpost/Outpost'
import Checkout from './checkout/Checkout'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.content}>
      <BrowserRouter>
        <Routes>
          <Route path="/outpost" element={<Outpost />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/" element={<Navigate to="/outpost" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
