import { Testimonial } from "@/types/textimonial";

export type TestimonialCategory = "developer" | "creative";

export const testimonials: Record<TestimonialCategory, Testimonial[]> = {
  developer: [
    {
      name: "Samuel Choi",
      role: "Project & Hackathon Teammate",
      rating: 5,
      text: "Andre is passionate and always willing to take the leader position. I've worked with him for school projects and hackathons and he would always help me out no matter what. Andre is the hardest and smartest worker I know, and I know I'll always get good advice from him.",
    },
    {
      name: "Gabrielle Esguerra",
      role: "Hackathon Teammate",
      rating: 5,
      text: "I’ve had the pleasure of working with Andre in a couple hackathons throughout university. He’s never afraid to take the lead in our teams which has contributed to us winning a couple top prizes. This also lends itself to Andre taking initiative to learn new technical skills and getting everyone up to speed in preparation for hackathons. Also during exam season, Andre organises group studies for fellow students is always willing to help others. I’ve actually known Andre since childhood and I’ve known him to be a very passionate student who always excels in all his endeavours. He’s a great guy to work with as he easily bonds with any kind of person and is able to keep up great conversations.",
    },
    {
      name: "Lucas Fontaine",
      role: "Hackathon Teammate",
      rating: 5,
      text: "Andre is a dedicated and talented person who has been an extraordinary leader for the past two hackathons that I’ve worked on with him. He was always the first person to take on the hardest challenges in our projects, and would constantly help others even while having his own task. He strives to help others succeed and has always tried his hardest for a given objective. He has also helped me through many exam study sessions and was most likely the reason I passed said exams.",
    },
    {
      name: "Evan Au",
      role: "Dev @ UAIC & Hackathon Teammate",
      rating: 5,
      text: "I’ve worked with Andre on several hackathons and university projects over the past few years, and he’s someone I’ve consistently enjoyed building with. We won first place for the New Zealand Impact Prize at a Web3 hackathon together, along with several other prizes at other hackathons, and a big part of that came down to his ability to stay calm under pressure and execute quickly. In our WDCC full-stack projects, he was dependable and thorough, and he wasn’t afraid to take ownership of challenging features across both the frontend and backend. He brings a strong mix of technical skill, initiative, and team awareness to any project he’s part of.",
    },
    {
      name: "Ashlee Shum",
      role: "Hackathon Teammate",
      rating: 5,
      text: "I’ve had the privilege of working with Andre both in class and in hackathons throughout our Computer Science degree at the University of Auckland. In every hackathon we’ve participated in, he naturally takes charge of our team, dedicating a huge amount of time and effort to ensure everyone is on the same page and performing at their best. Andre is incredibly hardworking and reliable, he balances his academic work and club commitments with good time management. He’s always willing to help classmates and share his knowledge, making him a supportive classmate. I’ve always admired his passion for learning, his drive to excel in everything he does, and his ability to build strong connections with people while keeping conversations engaging.",
    },
    {
      name: "Nicholas Garcia-Scholtz",
      role: "Developer @ UAIC",
      rating: 5,
      text: "Andre is an excellent developer who is always eager to learn, collaborate, and support the team. When we worked together on the University of Auckland Investment Club project, he consistently showed real initiative, even stepping into a hybrid UI/UX role to help with designs and layouts when the team needed it. His versatility and team‑first mindset made a noticeable difference to the project’s momentum. It was a pleasure to have worked with him.",
    },
    {
      name: "Jerry Nguyen",
      role: "Tech Lead @ UAIC",
      rating: 5,
      text: "I had the pleasure of working with Andre on a year-long project for WDCC. Andre is very hard-working, intelligent, professional, and a great team player. He was keen to face challenges and problem-solved logically, producing work at a very high standard. Andre also has excellent communication skills and an eye for detail. He always provides constructive feedback for the team to improve, both individually and collectively. As a technical lead who has worked with Andre for a year, I am sure that he would be a great asset to any team/organisation.",
    },
    {
      name: "Jerry Nguyen",
      role: "Tech Lead @ UAIC",
      rating: 5,
      text: "I had the pleasure of working with Andre on a year-long project for WDCC. Andre is very hard-working, intelligent, professional, and a great team player. He was keen to face challenges and problem-solved logically, producing work at a very high standard. Andre also has excellent communication skills and an eye for detail. He always provides constructive feedback for the team to improve, both individually and collectively. As a technical lead who has worked with Andre for a year, I am sure that he would be a great asset to any team/organisation.",
    },
    {
      name: "Angelica",
      role: "Dev & Lead Designer @ UAIC",
      rating: 5,
      text: "Andre is a communicative and highly efficient team member. He’s amazing to work with and comes up with innovative solutions.",
    },
  ],
  creative: [
    {
      name: "Rithwick Negi",
      role: "Founder of The Aspiring Founder",
      rating: 5,
      text: "Andre has been nothing short of excellent. He understands the concept of storytelling through video editing better than anyone I’ve worked with. ",
    },
    {
      name: "Roimata Wilkey",
      role: "Founder of Burst Digital & The Morning Marketer",
      rating: 5,
      text: "",
    },
    {
      name: "Lukas Halikias",
      role: "Founder of Glide",
      rating: 5,
      text: "",
    },
    {
      name: "Mr Tricky",
      role: "Founder of Spark 2 Sky Management",
      rating: 5,
      text: "",
    },
    {
      name: "Joseph Pod",
      role: "Artist @ S2S & Founder of PodEvents",
      rating: 5,
      text: "Andre was an absolute pleasure to work with. Professional, reliable, and incredibly efficient. He delivered high-quality work with a quick turnaround. He didn’t just execute the brief, he elevated it. His attention to detail and creative instinct brought my cinematography vision to life in a way that exceeded expectations.",
    },
    {
      name: "Mikhaeel Chengan",
      role: "Founder of Savais Apparel",
      rating: 5,
      text: "",
    },
    {
      name: "Joshua Li",
      role: "Founder of UOACS",
      rating: 5,
      text: "Bold creative direction, measurable impacts and outcomes, and some sick content is what you get from Mr Camerino. He has gone above and beyond and not only increased the standard of our content, but the content of all our friends and competitors. Nothing but high praise for this young man.",
    },
    {
      name: "Ashlee Shum",
      role: "Marketing Director @ UOACS",
      rating: 5,
      text: "Andre has been a valuable member of our marketing team at UOACS. He’s full of fresh ideas and always brings a creative, outside-the-box perspective not just to marketing campaigns, but to the club as a whole. His go-getter attitude and commitment to his role ensure that every task he undertakes is completed on time and with full effort, and is never attempted half-heartedly. Andre consistently demonstrates initiative, thinking strategically about how to engage our members and improve our presence, while inspiring the rest of the team to elevate their work as well. Working with him is a pleasure, as he constantly brings energy and innovation to every project.",
    },
    {
      name: "Jedrex Gannaban",
      role: "Co-President @ UOACS",
      rating: 5,
      text: "",
    },
    {
      name: "Hannah Santiago",
      role: "Co-President @ UOACS",
      rating: 5,
      text: "Andre is one of the most passionate and hardworking people I know. His addition to the UOACS team played a key role to the exponential growth of our social media presence. He consistently brings in creative ideas and executes them perfectly bringing more engagement with our organisation and making our events more successful. I would say that hiring him was one of the best decisions that we have made for UOACS.",
    },
  ],
};
