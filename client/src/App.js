import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing, Register, Error, ProtectedRoute } from './pages';
import {
  AddNew,
  AllNews,
  Profile,
  Stats,
  SharedLayout,
} from './pages/dashboard';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path="all-news" element={<AllNews />} />
          <Route path="add-new" element={<AddNew />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route
          path="/landing"
          element={
            <div>
              <Landing />
            </div>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
