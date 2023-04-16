
import { ProjectType } from '../components/Project';

const projects: ProjectType[] = [
  {
    id: 1,
    name: "YETUSHOP",
    url: "https://yetushop.com",
    description:
      "Yetushop is an e-commerce plateform that connects you to thousands of verified Turks suppliers,operating accross different provinces of Turkey.",
    img: "/public/images/yetushop.webp",
    type: "Case study",
  },
  {
    id: 2,
    name: "EnerBuild Power S.A.R.L",
    url: "https://enerbuildpower.com",
    description:
      "The project involved developing a brand new website for a renewable energy company based in the Democratic Republic of Congo (DRC). The goal was to create a modern and informative website that showcased the company's services and products, while also highlighting their commitment to sustainable energy solutions. The website was designed with a clean and user-friendly interface, and included features such as contact forms, social media integration, and a blog section.",
    img: "/public/images/enerbuild-power.webp",
    type: "Brand New website",
  },
  {
    id: 3,
    name: "Orbeet Consulting",
    url: "https://orbeetconsulting.net",
    description:
      "The goal was to improve the website's overall user experience by making it more visually appealing, user-friendly, and mobile-responsive. Additionally, the website was optimized for search engines to improve its visibility and increase traffic. The project was completed within a specific timeframe and involved collaborating with the client to ensure that their needs and requirements were met.",
    img: "/public/images/orbeet-consulting.webp",
    type: "WEBSITE DEVELOPMENT & OPTIMIZATION",
  },
];

export const getProjects = () => projects;
