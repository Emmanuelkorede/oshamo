import { Hero } from "@/components/sections/Hero/Hero";
import { LatestRelease } from "@/components/sections/LatestRelease/LatestRelease";
import { Story } from "@/components/sections/Story/Story";
import { Music } from "@/components/sections/Discography/Discography";
import { Videos } from "@/components/sections/Videos/Videos";
import { Socials } from "@/components/sections/Socials/Socials";

export default function Home() {
  return (
    <>
    <Hero />
    <LatestRelease />
    <Story />
    <Music />
    <Videos />
    <Socials />
    </>
  );
}
