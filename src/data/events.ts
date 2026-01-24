import type { Event } from '@/types';

import artBeiTonPoster from '@/assets/events/dk.tskxart.bei.ton.jpeg';
import theOfficePoster from '@/assets/events/dk.tskxtheoffice.jpg';
import rave1Poster from '@/assets/events/dk.tsk1.jpg';
import rave2Poster from '@/assets/events/dk.tsk2.jpg';

export const events: Event[] = [
  {
    id: "dktsk-art-bei-ton",
    title: "dk.tsk x Art Bei Ton",
    date: "2025-10-04",
    time: "22:00",
    location: "The How Club, Yerevan",
    description: `dk.tsk teams up with Art Bei Ton for a night of electronic exploration at The How Club. Two collectives, one frequency.`,
    poster: artBeiTonPoster,
    gallery: [],
    lineup: [
      {
        stage: "",
        artists: ["Hypnotic Black Magic", "Innersha (Live)", "HOV (Live)", "naali"]
      }
    ],
    featured: true
  },
  {
    id: "dktsk-theoffice",
    title: "dk.tsk x THEØFFICE",
    date: "2023-06-24",
    time: "22:00",
    location: "THEØFFICE, Yerevan",
    description: `A collaborative night with THEØFFICE — bringing underground electronic sounds to one of Yerevan's creative spaces.`,
    poster: theOfficePoster,
    gallery: [],
    lineup: [
      {
        stage: "",
        artists: ["Albert Van Abbe (Live)", "DJ Smithee", "Ezy", "hessIless", "hofmann", "HOV (Live)", "Innersha (Live)", "mikkkkro", "Mixtinct", "Qi"]
      }
    ],
    featured: true
  },
  {
    id: "dktsk-rave-2021-aug",
    title: "dktsk.rave",
    date: "2021-08-21",
    time: "18:00",
    location: "Byurakan, Armenia",
    description: `The second dktsk.rave in the mountains of Byurakan. Open air, open minds, and uninterrupted sound under the Armenian sky.`,
    poster: rave2Poster,
    gallery: [],
    lineup: [
      {
        stage: "Outdoor",
        artists: ["Muffasa", "Cast coverts (Live)", "Èki b2b hael", "Fluctt", "T_ST", "Yhii", "Mikkkkro", "Daao", "Vazgen (Live)", "FIX (Live)", "Kokopelli", "Yutani", "GFRND", "DJ Smithee", "Lychee", "HOV (Live)", "Mycotrophic", "Hare.oom"]
      },
      {
        stage: "Indoor",
        artists: ["TØtal", "ÉLÉKTRA", "DJ grand candy", "Se<u", "Pupylike", "Gregor Thomassian", "Dpnn2", "Lucia Kagramanyan", "Triniti", "Vahgog", "Sexy French Movements"]
      },
      {
        stage: "Bohemnots radio",
        artists: ["Chemical wedding (Live)", "Duke (Live)", "Kay (Live)", "VHSound (Live)"]
      }
    ],
    featured: false
  },
  {
    id: "dktsk-rave-2021-jun",
    title: "dktsk.rave",
    date: "2021-06-12",
    time: "18:00",
    location: "Byurakan, Armenia",
    description: `Where it started to take shape. The first dktsk.rave brought the collective together in Byurakan — a gathering that set the tone for everything that followed.`,
    poster: rave1Poster,
    gallery: [],
    lineup: [
      {
        stage: "Main stage",
        artists: ["Vazgen (Live)", "Paws", "Lychee", "Fluctt", "Mycotrophic", "Mikkkkro", "èki b2b hael", "Haramik", "Holly F", "长amunts", "Hov (Live)", "Qi"]
      },
      {
        stage: "Alternative stage",
        artists: ["Chemical wedding (Live)", "Lex palth (Live)", "Symptom (Live)", "Teenage ERROR (Live)", "Lucia kagramanyan", "Triniti", "Pupylike", "Gfrnd b2b Stas", "Missteikk", "dktsk : ambient selection", "Dav", "Koko pelli", "Melineh (Live)", "Jrimurmur (Live)", "Mixtinct", "Sardaryans (Live)", "Massive psy"]
      }
    ],
    featured: false
  }
];