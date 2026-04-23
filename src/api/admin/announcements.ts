import type { Announcement } from "../../types/admin/announcements";

const ANNOUNCEMENTS_DATA: Announcement[] = [
  {
    "id": "a1",
    "title": "Design review moved to Thursday",
    "category": "meeting",
    "date": "2026-04-18T10:00:00Z",
    "pinned": true
  },
  {
    "id": "a2",
    "title": "New staging environment is available",
    "category": "engineering",
    "date": "2026-04-15T14:30:00Z",
    "pinned": false
  },
  {
    "id": "a3",
    "title": "Remember to update your sprint tickets",
    "category": "process",
    "date": "2026-04-19T08:15:00Z",
    "pinned": false
  }
]

export const getAnnouncements = ():Promise<Announcement[]> => new Promise(
    (resolve) => setTimeout( () => { resolve(ANNOUNCEMENTS_DATA) }, 2000 )
)

