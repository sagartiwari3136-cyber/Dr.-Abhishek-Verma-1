/**
 * ALL EDITABLE CONTENT LIVES HERE.
 * - Anything with `img` accepts a path under /public, e.g. "/images/gallery-1.jpg".
 *   Leave `img` undefined and the site shows a saffron placeholder frame instead.
 * - Items tagged [Sample] / [Add ...] are placeholders, not verified facts.
 */

export const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#speeches", label: "Speeches" },
  { href: "/#journey", label: "Journey" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#legacy", label: "Legacy" },
];

export const hero = {
  portrait:
    "https://ik.imagekit.io/5lj5xs7ii/Photos%20for%20Calender/Photos%20for%20Calender/VFO_6127.JPG",
};

export const marquee = ["सेवा", "संकल्प", "समर्पण", "NDA ALLIANCE", "PUBLIC SERVICE", "PHILANTHROPY"];

export const stats = [
  { num: "1968", label: "Born, New Delhi" },
  { num: "03", label: "Honours & Awards" },
  { num: "03", label: "Generations of Service" },
  { num: "PhD", label: "Maryland State University" },
];

export type Img = { caption: string; img?: string };


export const aboutImages: Img[] = [
  {
    caption: "Early years, New Delhi",
    img: "https://ik.imagekit.io/5lj5xs7ii/IMG000.jpg?updatedAt=1792040943540",
  },
  {
    caption: "Georgetown University",
    img: "https://ik.imagekit.io/5lj5xs7ii/Photos%20for%20Calender/Photos%20for%20Calender/133A0312.JPG",
  },
  {
    caption: "With family",
    img: "https://ik.imagekit.io/5lj5xs7ii/IMG_4812.jpeg?updatedAt=1790577710572",
  },
];

export type Speech = { title: string; meta: string; href?: string; img?: string };

export const featuredSpeech: Speech = {
  title: "Press Conference ",
  meta: "",
  href: undefined, // paste a YouTube/Vimeo URL to make the play button live
  img: undefined,
};

export const speeches: Speech[] = [
  { title: "Speech 2 ", meta: "March 8, 2024 " },
  { title: "Speech 3", meta: "July 2021 ·" },
  { title: " Address to NDA workers", meta: "" },
  { title: "SKV Trust anniversary speech", meta: "" },
];

export const homeTimeline = [
  { year: "1968", title: "Born in New Delhi", text: "To Shrikant Verma and Veena Verma." },
  {
    year: "1980s",
    title: "Hindu College & Georgetown University",
    text: "Undergraduate at Delhi University; Master's Diploma in Washington, D.C.",
  },
  { year: "1990s–2000s", title: "[Sample] Early public & business roles" },
  { year: "2021", title: "Maharashtra Samman", text: "Awarded by the Governor of Maharashtra." },
  {
    year: "2024",
    title: "BBMG Award & Doctorate",
    text: "BBMG Award in London (March 8); PhD from Maryland State University (April).",
  },
  {
    year: "2025",
    title: "Chief National Coordinator, NDA Alliance & Elections",
    text: "Appointed in a formal Mumbai ceremony on January 30.",
  },
  {
    year: "2025",
    title: "Gau Rakshak Samman",
    text: "Conferred the honorary title of ‘Gau Rakshak’ (Protector of Cows) by Acharya Sudhanshu Ji Maharaj",
  },
  
];

export const gallery: Img[] = [
  { caption: "Induction ceremony, Mumbai — 2025",
    img: "https://ik.imagekit.io/5lj5xs7ii/Photos%20for%20Calender/Photos%20for%20Calender/VFO_6127.JPG",
   },
  { caption: "BBMG Award, London", img: "https://ik.imagekit.io/5lj5xs7ii/M30_8225%20(2).jpg?updatedAt=1786567247027" },
  { caption: "Maharashtra Samman", img: "https://ik.imagekit.io/5lj5xs7ii/1%20(9).jpg?updatedAt=1785472883653x" },
  { caption: "Public rally", img: "https://ik.imagekit.io/5lj5xs7ii/1%20(9).jpg?updatedAt=1785472883653" },
  { caption: "With NDA leaders", img: "https://ik.imagekit.io/5lj5xs7ii/M30_1392.jpg?updatedAt=1783194349991" },
  { caption: "Convocation, Maryland", img: "https://ik.imagekit.io/5lj5xs7ii/M30_5838.png?updatedAt=1779817557914" },
  { caption: "SKV Trust event", img: "https://ik.imagekit.io/5lj5xs7ii/M30_5764.png?updatedAt=1779817557961" },
  { caption: "[Add photo]", img: "https://ik.imagekit.io/5lj5xs7ii/M30_5838.png?updatedAt=1779817557914" },
];

export const honours = [
  { date: "JULY 2021", title: "Maharashtra Samman", text: "Conferred by the Governor of Maharashtra State." },
  { date: "MARCH 2024", title: "BBMG Award", text: "Presented by British Members of Parliament in London." },
  { date: "APRIL 2024", title: "Doctorate of Philosophy", text: "Conferred by Maryland State University, USA." },
];

export const legacy = {
  forefathers: { title: "[Add names]", note: "Influential political figures" },
  parents: { title: "Shrikant & Veena Verma", note: "Carried the legacy forward" },
  today: { title: "Dr. Abhishek Verma", note: "Chief National Coordinator, NDA" },
  next: [""],
};

export const philanthropy = [
  { title: "Education", text: " Scholarships and school programs." },
  { title: "Healthcare", text: " Medical camps and partnerships." },
  { title: "Relief", text: "Disaster response efforts." },
];

/**
 * Closing quote. Leave `text` empty to show the placeholder.
 * Use a real, verified line from his speeches / press conference.
 */
export const quote = {
  text: "Sanatan is not merely a tradition of the past; it is the eternal wisdom that guides humanity toward truth, righteousness, and liberation.",
  cite: "Dr. Abhishek Verma",
  role: "Chief National Coordinator, NDA Alliance & Elections",
};

/* ---------------- Journey page ---------------- */

export type Milestone = {
  y: string; // big year label
  d: string; // small date label
  l: string; // location
  t: string; // title
  p: string; // story
  c: string[]; // fact chips
  e: string; // emoji shown when no photo
  g: [string, string]; // gradient colours for the photo frame
  img?: string; // real photo path, e.g. "/images/journey-1968.jpg"
  vintage?: boolean; // sepia tint on the placeholder art
  placeholder?: boolean;
};


export const journey: Milestone[] = [
  {
    y: "1968", d: "Feb 23", l: "New Delhi", t: "Born into a family with a political legacy",
    p: "Abhishek Verma is born to Shrikant Verma and Veena Verma. His parents and forefathers were all influential political figures, and that tradition of public life shapes everything that follows.",
    c: ["Born Feb 23, 1968", "Parents: Shrikant & Veena Verma", "Third generation of service"],
    e: "🪷", g: ["#d9b27c", "#8a5a2b"],
    img: "https://ik.imagekit.io/2bpcmyrlg/0004%20%20S.K.%20Verma,%20V.Verma,%20A.Verma%201967.jpg",
    vintage: true,
  },
  {
    y: "1980s", d: "", l: "Delhi University", t: "Hindu College, Delhi University",
    p: "Graduates from Hindu College, one of Delhi University's best-known colleges. [Add: subject studied, campus memories, a photo from these years.]",
    c: ["Graduated in the 1980s", "University of Delhi"],
    e: "🏛️", g: ["#e0b98a", "#9a6a35"],
    img: "https://ik.imagekit.io/YOUR_IMAGEKIT_ID/journey/hindu-college.jpg",
    vintage: true,
  },
  {
    y: "year", d: "", l: "Washington, D.C.", t: "Master's Diploma, Georgetown University",
    p: "Earns a Master's Diploma from Georgetown University in Washington, D.C. ",
    c: ["Georgetown University", "Washington, D.C., USA"],
    e: "🌎", g: ["#f0b867", "#b4672a"],
    img: "https://ik.imagekit.io/YOUR_IMAGEKIT_ID/journey/georgetown.jpg",
    vintage: true,
  },
  {
    y: "1990s–2000s", d: "", l: "[Add place]", t: "[Sample] First steps in public and business life",
    p: "[Add verified details: earliest civic, party or family-enterprise roles and the people who shaped this stage.]",
    c: ["[Add detail]"], e: "🤝", g: ["#ffb04d", "#d9560a"],
    img: "https://ik.imagekit.io/YOUR_IMAGEKIT_ID/journey/early-career.jpg",
    placeholder: true,
  },
  {
    y: " year", d: "", l: "place", t: "[Sample] Building the Private Office of Verma Family",
    p: "[Add verified details: how the family office grew, the investments and philanthropy it oversees.]",
    c: ["Chairman, Private Office", "detail"], e: "🏢", g: ["#ffa545", "#c2480a"],
    img: "https://ik.imagekit.io/YOUR_IMAGEKIT_ID/journey/private-office.jpg",
    placeholder: true,
  },
  {
    y: "2021", d: "July", l: "Maharashtra", t: "Maharashtra Samman",
    p: "The Governor of Maharashtra State awards him the 'Maharashtra Samman', a state honour recognising his contribution.",
    c: ["Conferred by the Governor", "July 2021"], e: "🏅", g: ["#ff9933", "#c2410c"],
    img: "https://ik.imagekit.io/YOUR_IMAGEKIT_ID/journey/maharashtra-samman.jpg",
  },
  {
    y: "2024", d: "Mar 8", l: "London, UK", t: "BBMG Award",
    p: "Receives the BBMG Award from British Members of Parliament in London, his first major international honour on this timeline.",
    c: ["March 8, 2024", "Awarded by British MPs"], e: "🕰️", g: ["#ff8a1f", "#b83e00"],
    img: "https://ik.imagekit.io/YOUR_IMAGEKIT_ID/journey/bbmg-award.jpg",
  },
  {
    y: "2024", d: "April", l: "Maryland, USA", t: "Doctorate of Philosophy",
    p: "Maryland State University confers a Doctorate of Philosophy upon him.",
    c: ["April 2024", "Maryland State University, USA"], e: "🎓", g: ["#ff7d12", "#a83600"],
    img: "https://ik.imagekit.io/YOUR_IMAGEKIT_ID/journey/doctorate.jpg",
  },
  {
    y: "2025", d: "Jan 30", l: "Mumbai", t: "Chief National Coordinator, NDA Alliance & Elections",
    p: "Appointed by Shiv Sena party chief and Maharashtra Deputy Chief Minister Eknath Shinde in a formal ceremony in Mumbai, followed by a press conference, continuing the family's political legacy.",
    c: ["Jan 30, 2025", "Induction ceremony + press conference", "Shiv Sena · NDA"],
    e: "🎙️", g: ["#ff6a00", "#8f2d00"],
    img: "https://ik.imagekit.io/YOUR_IMAGEKIT_ID/journey/induction-ceremony.jpg",
  },
  {
    y: "Next", d: "", l: "place", t: "[Sample] What he is building now",
    p: "[Add verified details: current campaigns, alliance work and the initiatives he is leading.]",
    c: ["detail"], e: "🌅", g: ["#ff9933", "#7a2600"],
    img: "https://ik.imagekit.io/YOUR_IMAGEKIT_ID/journey/current-work.jpg",
    
  },
];

