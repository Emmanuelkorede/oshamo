export interface Video {
  id: string;
  title: string;
  artist: string;
  youtubeId: string;
  isFeatured?: boolean;
}

export const VIDEOS: readonly Video[] = [
  {
    id: "for-your-tears",
    title: "For Your Tears (Official Lyrics Visualizer)",
    artist: "oSHAMO & Shiloh Yodellé",
    youtubeId: "FyYgp97LYxg",
    isFeatured: true,
  },
  {
    id: "stars-misaligned",
    title: "Stars Misaligned (Official Visualizer)",
    artist: "oSHAMO & Shiloh Yodellé",
    youtubeId: "wAHXvaYICK0",
  },
  {
    id: "superfuji-gobe",
    title: "SuperFuji (GOBE) (Visualizer)",
    artist: "oSHAMO",
    youtubeId: "Nyv3lNbqa6M",
  },
  {
    id: "why-you-lying-spedup",
    title: "WHY YOU LYING (Sped Up)",
    artist: "oSHAMO feat. Anjola.OD",
    youtubeId: "xO8pk3xorN8",
  },
] as const;