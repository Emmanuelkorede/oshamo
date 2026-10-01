export interface Track {
  id: string;
  title: string;
  artist: string;
  spotifyId: string;
  type: "track" | "album";
  coverPath?: string;
  isFeatured?: boolean;
}

export const TRACKS: readonly Track[] = [
  {
    id: "why-you-lying",
    title: "Why You Lying",
    artist: "oSHAMO",
    spotifyId: "0Xol9bu4ZcAhxBUYZDKKVf",
    type: "track",
    isFeatured: true,
  },
  {
    id: "stars-misaligned-ii",
    title: "Stars Misaligned II",
    artist: "Shiloh Yodellé, oSHAMO, Abefe",
    spotifyId: "0awbfWjQjaoogyh2VzUw9u",
    type: "track",
  },
  {
    id: "stars-misaligned",
    title: "Stars Misaligned",
    artist: "Shiloh Yodellé, oSHAMO",
    spotifyId: "539bHSJ1F8E9HwzSBcGF2A",
    type: "track",
  },
  {
    id: "life-of-the-party",
    title: "Life of the Party",
    artist: "oSHAMO",
    spotifyId: "2GuOhFHd7qBWeLAVfIfGsS",
    type: "track",
  },
  {
    id: "superfuji-gobe",
    title: "Superfuji(GOBE)",
    artist: "oSHAMO",
    spotifyId: "1JFUPITQuWMglnth0hjGG",
    type: "track",
    isFeatured: true,
  },
  {
    id: "magba",
    title: "Magba",
    artist: "oSHAMO",
    spotifyId: "7nO3P6A5TEYfUYXjDk5z5x",
    type: "track",
  },
  {
    id: "shina-rampe",
    title: "Shina Rampe",
    artist: "oSHAMO",
    spotifyId: "2wUBUjNySRbtpsv39Wy0lc",
    type: "track",
  },
  {
    id: "alaska",
    title: "Alaska",
    artist: "oSHAMO",
    spotifyId: "3cs15X6cjw7Sn9pFdX3NAg",
    type: "track",
  },
  {
    id: "owo-olomoge",
    title: "Owo (Olomoge)",
    artist: "oSHAMO",
    spotifyId: "7rdc5Veoku1NiykWmE2HgU",
    type: "track",
  },
  {
    id: "for-your-tears",
    title: "For Your Tears",
    artist: "oSHAMO, Shiloh Yodellé",
    spotifyId: "2DbqaOF1ZGobIJXT4IsxoO",
    type: "track",
  },
] as const;