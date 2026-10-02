export interface Track {
  id: string;
  title: string;
  artist: string;
  spotifyId: string;
  embedUrl: string;
  coverPath?: string;
  isFeatured?: boolean;
}

export const TRACKS: readonly Track[] = [
  {
    id: "why-you-lying",
    title: "Why You Lying",
    artist: "oSHAMO",
    spotifyId: "0Xol9bu4ZcAhxbUYZDKKVf",
    embedUrl: "https://open.spotify.com/embed/track/0Xol9bu4ZcAhxbUYZDKKVf?utm_source=generator&si=570de8ff77f84a15",
    isFeatured: true,
  },
  {
    id: "stars-misaligned-ii",
    title: "Stars Misaligned II",
    artist: "Shiloh Yodellé, oSHAMO, Abefe",
    spotifyId: "0awbfWjQjaoogyh2VzUw9u",
    embedUrl: "https://open.spotify.com/embed/track/0awbfWjQjaoogyh2VzUw9u?utm_source=generator&si=d1c5f014d6af4fec",
  },
  {
    id: "stars-misaligned",
    title: "Stars Misaligned",
    artist: "Shiloh Yodellé, oSHAMO",
    spotifyId: "539bHSJ1F8E9HwzSBcGF2A",
    embedUrl: "https://open.spotify.com/embed/track/539bHSJ1F8E9HwzSBcGF2A?utm_source=generator&si=9393f1ae26f547a2",
  },
  {
    id: "life-of-the-party",
    title: "Life of the Party",
    artist: "oSHAMO",
    spotifyId: "2GuOhFHd7qBWeLAvfIfGsS",
    embedUrl: "https://open.spotify.com/embed/track/2GuOhFHd7qBWeLAvfIfGsS?utm_source=generator&si=655c71e468974d1b",
  },
  {
    id: "superfuji-gobe",
    title: "Superfuji(GOBE)",
    artist: "oSHAMO",
    spotifyId: "1JFUPITQUwMLglnth0hjGG",
    embedUrl: "https://open.spotify.com/embed/track/1JFUPITQUwMLglnth0hjGG?utm_source=generator&si=74d879df388f4b70" ,
  },
  {
    id: "magba",
    title: "Magba",
    artist: "oSHAMO",
    spotifyId: "7nO3P6A5TEYfUYXjDk5z5x",
    embedUrl: "https://open.spotify.com/embed/track/7nO3P6A5TEYfUYXjDk5z5x?utm_source=generator&si=33e4f3f475cc43bd",
  },
  {
    id: "shina-rampe",
    title: "Shina Rampe",
    artist: "oSHAMO",
    spotifyId: "2wUBujNySRbtpsv39Wy0lc",
    embedUrl: "https://open.spotify.com/embed/track/2wUBujNySRbtpsv39Wy0lc?utm_source=generator&si=f85db04efa854e8b",
        isFeatured: true,

  },
  {
    id: "alaska",
    title: "Alaska",
    artist: "oSHAMO",
    spotifyId: "3csl5X6cjw7Sn9pFdX3NAg",
    embedUrl: "https://open.spotify.com/embed/track/3csl5X6cjw7Sn9pFdX3NAg?utm_source=generator&si=cd59d61f07f944af",
  },
  {
    id: "owo-olomoge",
    title: "Owo (Olomoge)",
    artist: "oSHAMO",
    spotifyId: "7rdc5VeokulNiykWmE2HgU",
    embedUrl: "https://open.spotify.com/embed/track/7rdc5VeokulNiykWmE2HgU?utm_source=generator&si=1702fe6fce184ff1",
  },
  {
    id: "for-your-tears",
    title: "For Your Tears",
    artist: "oSHAMO, Shiloh Yodellé",
    spotifyId: "2DbqaOFlZGobIJXT4IsxoO",
    embedUrl: "https://open.spotify.com/embed/track/2DbqaOFlZGobIJXT4IsxoO?utm_source=generator&si=c1a8c3e5363b4875",

  },
] as const;