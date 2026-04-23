import type { AnnouncementProp } from "../types/announcements";

const formatDate = (str: string): string => {
  const date = new Date(str);

  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // months are 0-indexed
  const year = String(date.getUTCFullYear()).slice(-2); // last 2 digits

  const formatted = `${day}/${month}/${year}`;
  return formatted;
};

const AnnouncementCard = ({
  title,
  category,
  date,
  pinned,
}: AnnouncementProp) => {
  return (
    <div>
      <p>{title}</p>
      <p>{category}</p>
      <p>{formatDate(date)}</p>
      <p>{pinned}</p>
    </div>
  );
};

export default AnnouncementCard;
