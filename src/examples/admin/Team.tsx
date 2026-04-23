import type { TeamProp } from "../types/teams";

const TeamCard = ({ name, project, membersCount, isActive }: TeamProp) => {
  return (
    <div>
      <strong>{name}</strong>
      <p>Project: {project}</p>
      <p>Members:{membersCount}</p>
      <p>Active: {isActive}</p>
    </div>
  );
};

export default TeamCard;
