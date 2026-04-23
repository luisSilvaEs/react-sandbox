import type { User } from "../types/admin/user";

const USER_DATA: User = {
  "id": "u1",
  "firstName": "Luis",
  "lastName": "Silva",
  "email": "luis.silva@example.com",
  "role": "Frontend Engineer",
  "teamId": "t42"
}

export const getUser = () : Promise<User> => new Promise(
    resuelve => setTimeout( () => { resuelve(USER_DATA) }, 1500 )
)