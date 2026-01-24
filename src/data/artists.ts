import type { Artist } from '@/types';

export const artists: Artist[] = [
  {
    id: "innersha",
    name: "Innersha",
    tagline: "Deep, hypnotic soundscapes",
    genre: "Ambient / Electronica",
    bio: `Innersha is the sonic identity of one of dk.tsk's founding members, crafting immersive soundscapes that blur the line between electronic music and meditative experience. Drawing from the Armenian highlands and urban textures of Yerevan, the project explores deep, hypnotic territories where rhythm meets resonance.

Since 2019, Innersha has been integral to dk.tsk's sonic journey, performing at open-air gatherings in Dilijan's forests and intimate sessions at Teryan 91. The sound weaves together modular synthesis, field recordings, and carefully sculpted beats into experiences that transcend the dancefloor.

Each release and live set is a meditation on space and time, inviting listeners to lose themselves in sound.`,
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=600&fit=crop",
    bandcamp: "https://innersha.bandcamp.com",
    soundcloud: "https://soundcloud.com/innersha",
    instagram: "https://instagram.com/innersha",
    releases: [
      {
        title: "Frequencies of Silence",
        year: "2024",
        type: "EP",
        bandcampUrl: "https://innersha.bandcamp.com/album/frequencies-of-silence"
      },
      {
        title: "Mountain Echo",
        year: "2023",
        type: "Single",
        bandcampUrl: "https://innersha.bandcamp.com/track/mountain-echo"
      }
    ],
    liveSets: [
      {
        title: "Live at dk.tsk Opening",
        date: "2024-03-15",
        duration: "1:45:00",
        soundcloudUrl: "https://soundcloud.com/innersha/live-dktsk-opening"
      },
      {
        title: "Dilijan Forest Session",
        date: "2023-08-20",
        duration: "2:00:00",
        soundcloudUrl: "https://soundcloud.com/innersha/dilijan-forest"
      }
    ]
  },
  {
    id: "hov",
    name: "HOV",
    tagline: "Raw energy, industrial textures",
    genre: "Techno / Industrial",
    bio: `HOV brings raw, uncompromising energy to the dk.tsk collective. With roots in Yerevan's underground scene, HOV's sound channels industrial textures, driving rhythms, and a relentless forward momentum that has become synonymous with dk.tsk's most intense moments.

The project emerged from late-night experiments in the original dk.tsk space, where broken hardware and improvised setups led to a signature sound—rough around the edges but precisely impactful. HOV's sets are physical experiences, designed for bodies in motion.

Beyond the decks, HOV contributes to the collective's sonic identity through production collaborations and mentoring emerging artists in Yerevan's growing electronic scene.`,
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=600&fit=crop",
    bandcamp: "https://hov-music.bandcamp.com",
    soundcloud: "https://soundcloud.com/hov-music",
    instagram: "https://instagram.com/hov.music",
    releases: [
      {
        title: "Concrete Dreams",
        year: "2024",
        type: "Album",
        bandcampUrl: "https://hov-music.bandcamp.com/album/concrete-dreams"
      },
      {
        title: "Teryan Sessions Vol. 1",
        year: "2023",
        type: "EP",
        bandcampUrl: "https://hov-music.bandcamp.com/album/teryan-sessions"
      }
    ],
    liveSets: [
      {
        title: "dk.tsk Podcast 003",
        date: "2024-02-01",
        duration: "1:30:00",
        soundcloudUrl: "https://soundcloud.com/hov-music/dktsk-podcast-003"
      }
    ]
  }
];
