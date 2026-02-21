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
      name: "Nathan Turley",
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
      text: "",
    },
    {
      name: "",
      role: "Founder of Savais Apparel",
      rating: 5,
      text: "",
    },
    {
      name: "Joshua Li",
      role: "Founder of UOACS",
      rating: 5,
      text: "Bold creative direction, measurable impacts and outcomes, and some sick content is what you get from Mr Camerino. He has gone above and beyond and not only increased the standard of our content, but the content of all our friends and competitors. Nothing but high praise for this young man. ",
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
      text: "",
    },
  ],
};
