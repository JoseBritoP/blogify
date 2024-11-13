type Category = "Style" | "Fashion" | "Food" | "Travel" | "Culture" | "Coding";

interface BlogCards {
    title: string;
    text: string;
    date: string;
    category: Category;
    img: string;
    author:string
}

export const blogs:BlogCards[] = [
  {
    title: "lorem title",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, distinctio natus. Neque quasi delectus labore et inventore. Inventore obcaecati, possimus voluptatibus placeat magnam sequi, tenetur tempore itaque soluta illo enim.",
    date: "11.02.2023",
    img:'/images/p1.jpeg',
    category: "Style",
    author:'John Doe'
  },
  {
    title: "lorem title",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, distinctio natus. Neque quasi delectus labore et inventore. Inventore obcaecati, possimus voluptatibus placeat magnam sequi, tenetur tempore itaque soluta illo enim.",
    date: "11.02.2023",
    img:'/images/p1.jpeg',
    category: "Fashion",
    author:'John Doe'
  },
  {
    title: "lorem title",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, distinctio natus. Neque quasi delectus labore et inventore. Inventore obcaecati, possimus voluptatibus placeat magnam sequi, tenetur tempore itaque soluta illo enim.",
    date: "11.02.2023",
    img:'/images/p1.jpeg',
    category: "Food",
    author:'John Doe'
  },
  {
    title: "lorem title",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, distinctio natus. Neque quasi delectus labore et inventore. Inventore obcaecati, possimus voluptatibus placeat magnam sequi, tenetur tempore itaque soluta illo enim.",
    date: "11.02.2023",
    img:'/images/p1.jpeg',
    category: "Travel",
    author:'John Doe'
  },
  {
    title: "lorem title",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, distinctio natus. Neque quasi delectus labore et inventore. Inventore obcaecati, possimus voluptatibus placeat magnam sequi, tenetur tempore itaque soluta illo enim.",
    date: "11.02.2023",
    img:'/images/p1.jpeg',
    category: "Culture",
    author:'John Doe'
  },
  {
    title: "lorem title",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, distinctio natus. Neque quasi delectus labore et inventore. Inventore obcaecati, possimus voluptatibus placeat magnam sequi, tenetur tempore itaque soluta illo enim.",
    date: "11.02.2023",
    img:'/images/p1.jpeg',
    category: "Coding",
    author:'John Doe'
  },
];