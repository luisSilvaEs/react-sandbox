import UserCard from "./User";
import TeamCard from "./Team";
import AnnouncementCard from "./Announcement";

import useUserTeam from "../../hooks/admin/useUserTeam";
import useAnnouncements from "../../hooks/admin/useAnnouncements";

const Workspace = () => {
  const { userData, teamData, userLoading, userTeamError } = useUserTeam();
  const { announcementsData, announcementsLoading, announcementsError } =
    useAnnouncements();

  return (
    <div>
      {userLoading && <div>Retrieving user and team...</div>}
      {userTeamError && <div>{userTeamError}</div>}

      {userData && (
        <UserCard
          lastName={userData.lastName}
          firstName={userData.firstName}
          email={userData.email}
          role={userData.role}
        />
      )}

      {teamData && (
        <TeamCard
          name={teamData.name}
          project={teamData.project}
          membersCount={teamData.membersCount}
          isActive={teamData.isActive}
        />
      )}

      {announcementsLoading && <div>Retrieving announcements...</div>}
      {announcementsError && <div>{announcementsError}</div>}

      {announcementsData.map((data) => (
        <AnnouncementCard
          key={data.id}
          title={data.title}
          category={data.category}
          date={data.date}
          pinned={data.pinned}
        />
      ))}
    </div>
  );
};

export default Workspace;
