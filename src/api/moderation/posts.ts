import type { Post } from "../../types/moderation/post"

const DATA: Post[] = [
  { id: 1, author: "Ana", content: "I love React and frontend work" },
  { id: 2, author: "Mark", content: "This crypto giveaway is amazing" },
  { id: 3, author: "Luis", content: "Totally normal post here" },
  { id: 4, author: "Jane", content: "Some rage bait content again" },
  { id: 5, author: "John", content: "CRYPTO trends are everywhere" }
]

export const fetchData = (delayMs = 1000) : Promise<Post[]> => 
  new Promise((resuelve) => setTimeout(() => resuelve(DATA), delayMs));


//export default DATA