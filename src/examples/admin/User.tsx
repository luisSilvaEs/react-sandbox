import type { UserProp } from "../types/user";

const CSS_Container = {
  width: 100,
  border: "1px solid red",
  borderRound: 6,
};

const UserCard = ({ firstName, lastName, role, email, teamId }: UserProp) => {
  return (
    <div style={CSS_Container}>
      <h2>Name: {`${firstName} ${lastName}`}</h2>
      <p>Role: {role}</p>
      <p>Email: {email}</p>
      {teamId && <p>Team ID: {teamId}</p>}
    </div>
  );
};

export default UserCard;
