export interface Team {
    id: string;
    name: string;
    project: string;
    membersCount: number;
    isActive: boolean;
    manager: string;
}

export type TeamProp = Omit<Team, "id" | "manager">