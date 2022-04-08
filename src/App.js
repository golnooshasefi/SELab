import { Route, Routes } from "react-router-dom";

import ALLMeetupsPages from "./pages/AllMeetups";
import NewMeetupPages from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<ALLMeetupsPages />} />
        <Route path="/new-meetup" element={<NewMeetupPages />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
