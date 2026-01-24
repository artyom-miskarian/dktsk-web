import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Artists from '@/pages/Artists';
import ArtistDetail from '@/pages/ArtistDetail';
import Events from '@/pages/Events';
import EventDetail from '@/pages/EventDetail';
import Studio from '@/pages/Studio';
import Podcasts from '@/pages/Podcasts';
import Contact from '@/pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="artists" element={<Artists />} />
          <Route path="artists/:slug" element={<ArtistDetail />} />
          <Route path="events" element={<Events />} />
          <Route path="events/:id" element={<EventDetail />} />
          <Route path="studio" element={<Studio />} />
          <Route path="podcasts" element={<Podcasts />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
