import type { Podcast } from '@/types';

import podcastCover1 from '@/assets/illustrations/podcast-cover-1.svg';
import podcastCover2 from '@/assets/illustrations/podcast-cover-2.svg';
import podcastCover3 from '@/assets/illustrations/podcast-cover-3.svg';
import podcastCover4 from '@/assets/illustrations/podcast-cover-4.svg';
import podcastCover5 from '@/assets/illustrations/podcast-cover-5.svg';
import podcastCover6 from '@/assets/illustrations/podcast-cover-6.svg';

export const podcasts: Podcast[] = [
  {
    id: "podcast-005",
    title: "dk.tsk Podcast 005",
    artist: "Innersha",
    date: "2024-03-01",
    duration: "1:45:00",
    description: "Deep ambient and melodic explorations recorded live at Teryan 91. A journey through textured soundscapes and hypnotic rhythms.",
    cover: podcastCover1,
    soundcloudUrl: "https://soundcloud.com/dktsk/podcast-005",
    tags: ["ambient", "melodic", "live"]
  },
  {
    id: "podcast-004",
    title: "dk.tsk Podcast 004",
    artist: "Guest: Ara",
    date: "2024-02-15",
    duration: "1:30:00",
    description: "Our first guest mix features Ara with a selection of dub techno and minimal explorations.",
    cover: podcastCover2,
    soundcloudUrl: "https://soundcloud.com/dktsk/podcast-004",
    tags: ["dub techno", "minimal", "guest mix"]
  },
  {
    id: "podcast-003",
    title: "dk.tsk Podcast 003",
    artist: "HOV",
    date: "2024-02-01",
    duration: "1:30:00",
    description: "Raw industrial textures and driving rhythms. HOV delivers an intense session of peak-time energy.",
    cover: podcastCover3,
    soundcloudUrl: "https://soundcloud.com/dktsk/podcast-003",
    tags: ["industrial", "techno", "peak-time"]
  },
  {
    id: "podcast-002",
    title: "dk.tsk Podcast 002",
    artist: "Innersha",
    date: "2024-01-15",
    duration: "2:00:00",
    description: "A two-hour journey through deep electronic territories. Recorded during the first Studio Session at Teryan 91.",
    cover: podcastCover4,
    soundcloudUrl: "https://soundcloud.com/dktsk/podcast-002",
    tags: ["deep", "electronic", "live recording"]
  },
  {
    id: "podcast-001",
    title: "dk.tsk Podcast 001",
    artist: "dk.tsk Collective",
    date: "2024-01-01",
    duration: "1:32:00",
    description: "The inaugural dk.tsk podcast. A collaborative mix from the collective, setting the tone for the series.",
    cover: podcastCover5,
    soundcloudUrl: "https://soundcloud.com/dktsk/podcast-001",
    tags: ["collective", "mixed", "inaugural"]
  },
  {
    id: "mountain-frequencies-recording",
    title: "Mountain Frequencies 2023 Recording",
    artist: "Various Artists",
    date: "2023-08-25",
    duration: "3:30:00",
    description: "Highlights from Mountain Frequencies 2023 in Dilijan. Three and a half hours capturing the spirit of the gathering.",
    cover: podcastCover6,
    soundcloudUrl: "https://soundcloud.com/dktsk/mountain-frequencies-2023",
    tags: ["live", "festival", "compilation"]
  }
];
