import type { Team } from "../types/admin/teams";

const TEAM_DATA : Team[] = [
  {
    id: "t42",
    name: "UI Platform",
    project: "Design System Revamp",
    membersCount: 6,
    isActive: true,
    manager: "Ana Torres",
  },
  {
    id: "t77",
    name: "Payments Core",
    project: "Billing System Migration",
    membersCount: 10,
    isActive: true,
    manager: "Carlos Mendoza",
  },
  {
    id: "t13",
    name: "Growth Experiments",
    project: "A/B Testing Platform",
    membersCount: 4,
    isActive: false,
    manager: "Sofia Ramirez",
  },
]

const findTeam = ( teamId: string, teams: Team[] ) : Team | undefined  => {
  return teams.find( ( team ) => team.id === teamId )
}

export const getTeam = ( teamId: string ) : Promise<Team> => new Promise(
    (resuelve, rechaza) => setTimeout( () => { 
      const team = findTeam(teamId, TEAM_DATA);
      if (!team) {
        rechaza( new Error("Team not found") )
        return
      }
      
      resuelve(team)
      
     }, 1000 )
) 