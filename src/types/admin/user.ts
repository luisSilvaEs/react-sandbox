export interface User {
    id: string;
    firstName: string,
    lastName: string,
    email: string,
    role: string,
    teamId: string
}

export type UserProp = Omit<User, "id" | "teamId"> & {
    teamId?: string;
} 