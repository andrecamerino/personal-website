import type { Achievement } from "@/types/achievement";

// Record = An object with specific keys, where every key has the same value type
export const achievements: Record<"developer" | "creative", Achievement[]> = {
  developer: [
    {
      title: "Web3 Hackathon Winner",
      desc: "1st place in the Kiwiana Prize, $3,000 awarded.",
      imgSrc: "/developer/web3.jpeg",
      link: "https://web3nz.xyz/projects/crypto-critters",
    },
    {
      title: "Sesa x WDCX Hackathon Secret Prize",
      desc: "Recognised for our innovative project approach.",
      imgSrc: "/developer/sesaxwdcc2024.JPG",
      link: "https://wdccxsesahackathon.com/winners",
    },
    {
      title: "Exec's Choice Award",
      desc: "UoA Scientific Hackathon: For Robin, an AI system improving campus recycling.",
      imgSrc: "/developer/scientific.jpeg",
      link: "https://www.linkedin.com/posts/andre-camerino-3504912a4_ai-hackathon-sustainability-activity-7312249982734979072-YFjz?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEll0awBCUuAVQNibeaR1KD17s0oSEW4msE"
    },
    {
      title: "Best Duo - WDCC Projects",
      desc: "Awarded for collaboration and coding excellence.",
      imgSrc: "/developer/wdccduo.jpeg",
      link: "https://wdcc.co.nz/projects/uaic/2025",
    },
  ],

  creative: [
    {
      title: "+200% Follower Increase",
      desc: "Grew UOACS social media presence significantly through targeted content over just half a year!.",
      imgSrc: "/creative/uoacsfollowers.jpg",
      link: "https://www.instagram.com/uoacs25?igsh=Nng0cDk1a2s0OHZr&utm_source=qr"
    },
    {
      title: "+1.1M Viewed Instagram Post",
      desc: "Reached over 1.1 million views from one UOACS post within half a year!",
      imgSrc: "/creative/uoacsmatch.jpg",
      link: "https://www.instagram.com/reel/DMZCOd0S6ZD/?igsh=eWxrNTBuMnhrYzU2",
    },
    {
      title: "+10K TikTok Followers",
      desc: "Built a personal brand with engaging, high-performing content.",
      imgSrc: "/creative/tiktok.jpg",
      link: "https://www.tiktok.com/@andrecamerino?_r=1&_t=ZS-940ooMH2tAC"
    },
    {
      title: "Warner Bros Wonka Ad",
      desc: "Captured footage for Warner Bros' Wonka 3D airport billboard project.",
      imgSrc: "/creative/wonka.png"
    },
  ],
};
