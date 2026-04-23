export interface Announcement {
    id: string;
    title: string;
    category: "meeting" | "engineering" | "process";
    date: string;
    pinned: boolean;
}

export type AnnouncementProp = Omit<Announcement, "id">