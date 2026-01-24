import type { Artist } from '@/types';
import innershaImage from '@/assets/artists/innersha.jpeg';
import hovImage from '@/assets/artists/hov.jpg';

export const artists: Artist[] = [
  {
    id: "innersha",
    name: "Innersha",
    tagline: "Deep, hypnotic soundscapes",
    genre: "Ambient / Electronica",
    bio: `Innersha is the sonic identity of one of dk.tsk's founding members, crafting immersive soundscapes that blur the line between electronic music and meditative experience. Drawing from the Armenian highlands and urban textures of Yerevan, the project explores deep, hypnotic territories where rhythm meets resonance.

Since 2019, Innersha has been integral to dk.tsk's sonic journey, performing at open-air gatherings in Dilijan's forests and intimate sessions at Teryan 91. The sound weaves together modular synthesis, field recordings, and carefully sculpted beats into experiences that transcend the dancefloor.

Each release and live set is a meditation on space and time, inviting listeners to lose themselves in sound.`,
    image: innershaImage,
    soundcloud: "https://soundcloud.com/innersha",
    instagram: "https://instagram.com/innersha",
    releases: [
      {
        title: "Emeralds",
        year: "2024",
        type: "Single",
        bandcampUrl: "https://qeone.bandcamp.com/track/emeralds"
      }
    ],
    liveSets: [
      {
        title: "Hypnus Memoirs - Page 137",
        date: "2024",
        duration: "",
        soundcloudUrl: "https://soundcloud.com/hypnus-memoirs/page-137-innersha"
      },
      {
        title: "Sound Sculptors No.1",
        date: "2024",
        duration: "",
        soundcloudUrl: "https://soundcloud.com/qeone/sound-sculptors-no1-innersha?in=innersha/sets/live"
      },
      {
        title: "Alliance Club Live @ Gimic Radio",
        date: "2023",
        duration: "",
        soundcloudUrl: "https://soundcloud.com/gimic-radio/alliance-club-w-innersha-live?in=innersha/sets/live"
      },
      {
        title: "UTE Mix Series 104",
        date: "2023",
        duration: "",
        soundcloudUrl: "https://soundcloud.com/ute-rec/ute-mix-series-104-innersha-live?in=innersha/sets/live"
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
    image: hovImage,
    soundcloud: "https://soundcloud.com/eychovi",
    instagram: "https://www.instagram.com/bobes.aghjian",
    releases: [
      {
        title: "Primordial Cycles",
        year: "2024",
        type: "Album",
        bandcampUrl: "https://jackfresia.bandcamp.com/album/primordial-cycles"
      }
    ],
    liveSets: [
      {
        title: "Live @ The Office",
        date: "2024",
        duration: "",
        soundcloudUrl: "https://soundcloud.com/theofficeyvn/hov-live-theoffice"
      },
      {
        title: "Maracasse S2E08 Live",
        date: "2024",
        duration: "",
        soundcloudUrl: "https://soundcloud.com/marcollectif/maracasse-s2e08-hov-live-1"
      },
      {
        title: "Volchok Podcast 58",
        date: "2023",
        duration: "",
        soundcloudUrl: "https://soundcloud.com/volchokclothing/hov-live-volchok-podcast-58"
      },
      {
        title: "Scanner Club",
        date: "2023",
        duration: "",
        soundcloudUrl: "https://soundcloud.com/eychovi/scanner-club"
      },
      {
        title: "Bohemnots Radio",
        date: "2021",
        duration: "",
        soundcloudUrl: "https://soundcloud.com/bohemnotsradio/hov-09-26-2021?in=eychovi/sets/radio-podcast"
      },
      {
        title: "Mid Orange",
        date: "2021",
        duration: "",
        soundcloudUrl: "https://soundcloud.com/eychovi/mid-orange?in=eychovi/sets/radio-podcast"
      },
      {
        title: "dk.tsk Rave",
        date: "2021",
        duration: "",
        soundcloudUrl: "https://soundcloud.com/eychovi/dktskrave?in=eychovi/sets/live-sets"
      },
      {
        title: "Loopdeville Liveset",
        date: "2020",
        duration: "",
        soundcloudUrl: "https://soundcloud.com/eychovi/loopdeville-liveset?in=eychovi/sets/live-sets"
      }
    ]
  }
];
