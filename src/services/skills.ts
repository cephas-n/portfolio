export interface SkillType {
  id: number | string;
  name: string;
  img: string;
  level: number;
}

const skills: SkillType[] = [
  {
    id: 1,
    name: "Javascript",
    img: "/public/images/js.webp",
    level: 80,
  },
  {
    id: 2,
    name: "php",
    img: "/public/images/php.webp",
    level: 85,
  },
  {
    id: 3,
    name: "react js",
    img: "/public/images/reactjs.webp",
    level: 65,
  },
  {
    id: 4,
    name: "mysql",
    img: "/public/images/mysql.webp",
    level: 70,
  },
  {
    id: 5,
    name: "html 5",
    img: "/public/images/html5.webp",
    level: 98,
  },
  {
    id: 6,
    name: "laravel",
    img: "/public/images/laravel.webp",
    level: 50,
  },
  {
    id: 7,
    name: "css 3",
    img: "/public/images/css3.webp",
    level: 95,
  },
  {
    id: 8,
    name: "c++",
    img: "/public/images/cpp.webp",
    level: 75,
  },
];

export const getSkills = () => skills;
