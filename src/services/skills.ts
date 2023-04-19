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
    img: "/images/js.webp",
    level: 80,
  },
  {
    id: 3,
    name: "react js",
    img: "/images/reactjs.webp",
    level: 65,
  },
  {
    id: 2,
    name: "php",
    img: "/images/php.webp",
    level: 85,
  },
  {
    id: 4,
    name: "mysql",
    img: "/images/mysql.webp",
    level: 70,
  },
  // {
  //   id: 6,
  //   name: "laravel",
  //   img: "/images/laravel.webp",
  //   level: 50,
  // },
  {
    id: 5,
    name: "html 5",
    img: "/images/html5.webp",
    level: 98,
  },
  {
    id: 7,
    name: "css 3",
    img: "/images/css3.webp",
    level: 95,
  },
  {
    id: 8,
    name: "c++",
    img: "/images/cpp.webp",
    level: 75,
  },
];

export const getSkills = () => skills;
