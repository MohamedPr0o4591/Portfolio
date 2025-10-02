import {
  Call,
  Email,
  FacebookSharp,
  GitHub,
  Instagram,
  LinkedIn,
  LocationOn,
  Telegram,
  WhatsApp,
} from "@mui/icons-material";

import cruds from "./src/assets/design/cruds.png";
import photoShop from "./src/assets/design/photoshop.png";
import photoShopJS from "./src/assets/design/photoshop-js.png";
import mrProg from "./src/assets/design/mrprogramming.png";
import adminDashboard from "./src/assets/design/admin-dashboard.png";
import firebaseStorage from "./src/assets/design/firebase.png";
import ipsData from "./src/assets/design/ips-data.png";
import freeLuke from "./src/assets/design/free-luke.png";
import adminEducation from "./src/assets/design/admin-education.png";
import quranApp from "./src/assets/design/quran-app.png";
import fastCreditCards from "./src/assets/design/fast-credit-cards.png";
import learnWithMe from "./src/assets/design/learn-with-me.png";
import quranKareem from "./src/assets/design/quran-kareem.png";

export const about_interests = [
  {
    id: 1,
    desc: "I am an experienced programmer with experience in developing web",
    skills: null,
  },
  {
    id: 2,
    desc: "I have experience in some programming languages such as:",
    skills: [
      {
        id: 1,
        skill: "HTML",
      },
      {
        id: 2,
        skill: "CSS",
      },
      {
        id: 3,
        skill: "JAVASCRIPT",
      },
      {
        id: 4,
        skill: "PHP",
      },
    ],
  },
  {
    id: 3,
    desc: "Frameworks",
    skills: [
      {
        id: 1,
        skill: "Bootstrap",
      },
      {
        id: 2,
        skill: "Material UI",
      },
      {
        id: 3,
        skill: "React JS",
      },
      {
        id: 4,
        skill: "React Native",
      },
      {
        id: 5,
        skill: "Electron",
      },
      {
        id: 6,
        skill: "Laravel",
      },
    ],
  },
  {
    id: 4,
    desc: "I am committed to providing high quality work and meeting deadlines",
    skills: null,
  },
];

export const about_hobbies = [
  {
    id: 1,
    hobby: "Learn new programming languages",
  },
  {
    id: 2,
    hobby: "Developing websites or special software projects",
  },
  {
    id: 3,
    hobby:
      "Reading and following the latest technologies and tools used in the field of programming",
  },
];

export const about_skills = [
  {
    id: 1,
    skill: "Typing quickly on the keyboard",
  },
  {
    id: 2,
    skill: "Easily detect and solve errors",
  },
  {
    id: 3,
    skill: "Work in a team and communicate with others",
  },
  {
    id: 4,
    skill: "Learn new things quickly",
  },
  {
    id: 5,
    skill: "Work under pressure",
  },
  {
    id: 6,
    skill: "Problem-solving",
  },
  {
    id: 7,
    skill: "Time management",
  },
  {
    id: 8,
    skill: "Self-motivation",
  },
  {
    id: 9,
    skill: "Create projects with clean codes",
  },
];

export const webProjects = [
  {
    id: 1,
    title: "CRUDS Project",
    desc: "CRUDS project for managing goods and products (adding, deleting and modifying products)",
    img: cruds,
    link: "https://cruds-project.web.app/",
    category: "Frontend Project",
    usage: ["React.js", "Material UI", "CSS"],
    github: "https://github.com/MohamedPr0o4591/CRUDS",
    video:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7242176801769222145",
  },
  {
    id: 2,
    title: "Photo Editor Project",
    desc: "A brief photo editing project",
    img: photoShop,
    link: "https://photoeditor-project.web.app/",
    usage: ["React.js", "Material UI", "CSS"],
    category: "Frontend Project",
    github: "https://github.com/MohamedPr0o4591/photo-editor",
    video:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7242186680365920256",
  },
  {
    id: 3,
    title: "MisterProgramming (JS) Project",
    desc: "A complete project for a programming company using javascript",
    img: mrProg,
    link: "https://mister-programming.vercel.app/",
    category: "Frontend Project",
    usage: ["HTML", "CSS", "JavaScript", "Bootstrap", "Swiper JS"],
    github: "https://github.com/MohamedPr0o4591/MisterProgramming",
    video:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7242208360693936128",
  },
  {
    id: 4,
    title: "CRUDS (JS) Project",
    desc: "CRUDS project for managing goods and products (adding, deleting and modifying products) using javascript",
    img: cruds,
    link: "https://cruds-project-js.vercel.app/",
    category: "Frontend Project",
    usage: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/MohamedPr0o4591/CRUDS-JS",
  },
  {
    id: 5,
    title: "Admin Dashboard Project",
    desc: "Admin control panel project",
    img: adminDashboard,
    link: "https://admin-dashboard-459.web.app/",
    category: "Frontend Project",
    usage: ["React.js", "Material UI", "CSS"],
    github: "https://github.com/MohamedPr0o4591/admin-dashboard",
  },
  {
    id: 6,
    title: "Firebase Storage Project",
    desc: "Firebase Storage for uploading images / files",
    img: firebaseStorage,
    link: "https://fire-storage-459.web.app/",
    category: "Frontend Project",
    usage: ["React.js", "Material UI", "CSS"],
    github: "https://github.com/MohamedPr0o4591/firebase-storage",
  },
  {
    id: 7,
    title: "IPS Data Storage Project",
    desc: "Firebase Storage for ips data with secret token to can use this data for adding new data / ips or searching about data / ips",
    img: ipsData,
    link: "https://ips-used.web.app/",
    category: "Frontend Project",
    usage: ["React.js", "Material UI", "CSS"],
    github: "https://github.com/MohamedPr0o4591/IPs-Used",
  },
  {
    id: 8,
    title: "Free Luke Project",
    desc: "Free luke CPA project with terms and conditions and privacy policy",
    img: freeLuke,
    link: "https://free-luke.web.app/",
    category: "Frontend Project",
    usage: ["React.js", "Material UI", "CSS", "Swiper JS"],
    github: "https://github.com/MohamedPr0o4591/Free-Luke-cpa",
    video:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7242291153704808451",
  },
  {
    id: 9,
    title: "Admin Education Project",
    desc: "Admin control panel project for courses management",
    img: adminEducation,
    link: "https://dashboard-courses.web.app/",
    category: "Frontend Project",
    usage: ["React.js", "Material UI", "CSS"],
    github: "https://github.com/MohamedPr0o4591/Admin-Education-Project",
    video:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7242147335730843648",
  },
  {
    id: 10,
    title: "Quran App Project",
    desc: "Broadcasting the Holy Quran with recitation of all surahs",
    img: quranApp,
    link: "https://eza3a-quran-kareem.vercel.app/",
    category: "Frontend Project",
    usage: ["React.js", "Material UI", "CSS"],
    github: "https://github.com/MohamedPr0o4591/quran-kareem-2",
  },
  {
    id: 11,
    title: "Fast Credit Cards Project",
    desc: "Fast credit cards CPA project with terms and conditions and privacy policy",
    img: fastCreditCards,
    link: "https://fast-credit-cards.vercel.app/",
    category: "Frontend Project",
    usage: ["React.js", "Material UI", "CSS", "Swiper JS"],
    github: "https://github.com/MohamedPr0o4591/FastCreditCards",
  },
  {
    id: 12,
    title: "Learn With Me Project",
    desc: "Learn with me platform project with firebase authentication, firestore and database",
    img: learnWithMe,
    link: "https://learn-with-me.vercel.app/",
    category: "Frontend Project",
    usage: ["React.js", "Material UI", "CSS", "Swiper JS"],
    github: "https://github.com/MohamedPr0o4591/learnWithMe-Platform",
  },
  {
    id: 13,
    title: "Quran Kareem",
    desc: "Listen to the complete recitation of the Holy Quran by Sheikh Mishary Rashid Alafasy. This project offers a high-quality audio experience of the Quranic text for reading and listening.",
    img: quranKareem,
    link: "https://alquran-alkareem.vercel.app/",
    category: "Frontend Project",
    usage: ["React.js", "Material UI", "CSS"],
    github: "https://github.com/MohamedPr0o4591/quran-kareem",
    video:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7242666163204182016",
  },
];
