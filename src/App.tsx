import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout';
import Home from '@/pages/Home';
import Artists from '@/pages/Artists';
import ArtistDetail from '@/pages/ArtistDetail';
import Events from '@/pages/Events';
import EventDetail from '@/pages/EventDetail';
import Studio from '@/pages/Studio';
import Podcasts from '@/pages/Podcasts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="artists" element={<Artists />} />
          <Route path="artists/:slug" element={<ArtistDetail />} />
          <Route path="events" element={<Events />} />
          <Route path="events/:id" element={<EventDetail />} />
          <Route path="studio" element={<Studio />} />
          <Route path="podcasts" element={<Podcasts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
