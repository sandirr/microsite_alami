import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Pages from './Components/Pages';
import ROUTES from './Configs/routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Pages.About />} />
          <Route path={ROUTES.home()} element={<Pages.About />} />
          <Route path={ROUTES.about()} element={<Pages.About />} />
          <Route path={ROUTES.contact()} element={<Pages.Contact />} />
          <Route path="*" element={<>Page Not Found</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
