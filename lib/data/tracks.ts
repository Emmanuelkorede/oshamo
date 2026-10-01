export interface Track {
  id: string;
  title: string;
  artist: string;
  embedUrl: string;
  coverPath?: string;
  isFeatured?: boolean;
}

export const TRACKS: readonly Track[] = [
  {
    id: "why-you-lying",
    title: "Why You Lying",
    artist: "oSHAMO",
    embedUrl: "https://open.spotify.com/embed/track/0Xol9bu4ZcAhxBUYZDKKVf?utm_source=generator&si=9393f1ae26f547a2",
    isFeatured: true,
  },
  {
    id: "stars-misaligned-ii",
    title: "Stars Misaligned II",
    artist: "Shiloh Yodellé, oSHAMO, Abefe",
    embedUrl: "https://open.spotify.com/embed/track/0awbfWjQjaoogyh2VzUw9u?utm_source=generator&si=d1c5f014d6af4fec",
  },
  {
    id: "stars-misaligned",
    title: "Stars Misaligned",
    artist: "Shiloh Yodellé, oSHAMO",
    embedUrl: "https://open.spotify.com/embed/track/539bHSJ1F8E9HwzSBcGF2A?utm_source=generator&si=9393f1ae26f547a2",
  },
  {
    id: "life-of-the-party",
    title: "Life of the Party",
    artist: "oSHAMO",
    embedUrl: "https://open.spotify.com/embed/track/2GuOhFHd7qBWeLAVfIfGsS?utm_source=generator&si=8b7369fee1cd4530",
  },
  {
    id: "superfuji-gobe",
    title: "Superfuji(GOBE)",
    artist: "oSHAMO",
    embedUrl: "https://open.spotify.com/embed/track/1JFUPITQuWMglnth0hjGG?utm_source=generator&si=cef851cce77543e9",
    isFeatured: true,
  },
  {
    id: "magba",
    title: "Magba",
    artist: "oSHAMO",
    embedUrl: "https://open.spotify.com/embed/track/7nO3P6A5TEYfUYXjDk5z5x?utm_source=generator&si=33e4f3f475cc43bd",
  },
  {
    id: "shina-rampe",
    title: "Shina Rampe",
    artist: "oSHAMO",
    embedUrl: "https://open.spotify.com/embed/track/2wUBUjNySRbtpsv39Wy0lc?utm_source=generator&si=38398bd18ef746d4",
  },
  {
    id: "alaska",
    title: "Alaska",
    artist: "oSHAMO",
    embedUrl: "https://open.spotify.com/embed/track/3cs15X6cjw7Sn9pFdX3NAg?utm_source=generator&si=8bb74919845346d7",
  },
  {
    id: "owo-olomoge",
    title: "Owo (Olomoge)",
    artist: "oSHAMO",
    embedUrl: "https://open.spotify.com/embed/track/7rdc5Veoku1NiykWmE2HgU?utm_source=generator&si=71ad28183f634c21",
  },
  {
    id: "for-your-tears",
    title: "For Your Tears",
    artist: "oSHAMO, Shiloh Yodellé",
    embedUrl: "https://open.spotify.com/embed/track/2DbqaOFlZGobIJXT4IsxoO?utm_source=generator&si=c1a8c3e5363b4875",
  },
] as const;