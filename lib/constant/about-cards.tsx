export interface Card {
  id: string;
  image: string;
  title?: string;
  description?: string;
  overlay?: string;
}

export const exampleCards: Card[] = [
  {
    id: "1",
    image: "/6c03add9199aac9c66e81f70440561384034419a.png",
    title: "Web Development",
    description: "Modern web applications built with cutting-edge technologies",
    overlay: "/92f38a733891fbce3acc69c8b61115525d9a01cc.png"
  },
  {
    id: "2",
    image: "/24567aa3241e148f63acc0b09836405be9d6f27e.png",
    title: "Mobile Apps",
    description: "Native and cross-platform mobile solutions",
    overlay: "/92f38a733891fbce3acc69c8b61115525d9a01cc.png"
  }
];
