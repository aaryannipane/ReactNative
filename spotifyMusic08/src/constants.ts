import { Track } from "react-native-track-player";

export const playListData: Track[] = [
    {
        id: 1,
        title: 'Grateful',
        artist: 'NEFFEX ',
        album: 'Copyright Free',
        artwork: 'https://i1.sndcdn.com/artworks-000309162651-v46tdq-t500x500.jpg',
        url: require("./assets/Grateful.mp3")
    },
    {
        id: 2,
        title: 'Cold',
        artist: 'NEFFEX ',
        album: 'Copyright Free',
        artwork: 'https://i1.sndcdn.com/artworks-000333595320-pld736-t500x500.jpg',
        url: require("./assets/Cold.mp3")
    },
    {
        id: 3,
        title: 'Kesariya',
        artist: 'Arijit Singh',
        album: 'Brahmāstra',
        artwork: 'https://i1.sndcdn.com/artworks-TplNZrUn8iE4kfDE-1ZOJqA-t500x500.jpg',
        url: require("./assets/Kesariya.mp3")
    },
    {
        id: 4,
        title: 'Phir Aur Kya Chahiye',
        artist: 'Arijit Singh',
        album: 'Zara Hatke Zara Bachke',
        artwork: 'https://i1.sndcdn.com/artworks-6dVnhlGQTBrts42T-rGs7pg-t500x500.jpg',
        url: require("./assets/Phir_Aur_Kya_Chahiye.mp3")
    },
]