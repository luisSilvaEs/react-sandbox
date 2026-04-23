import { useEffect, useState } from "react";
import type { User } from "../../types/admin/user";
import type { Team } from "../../types/admin/teams";

import { getUser } from "../../api/admin/user";
import { getTeam } from "../../api/admin/team";


function useUserTeam() {

    const [userData, setUserData] = useState<User | null>(null);
    const [teamData, setTeamData] = useState<Team | null>(null);

    const [userLoading, setUserLoading] = useState(true);
    const [userTeamError, setUserTeamError] = useState<null | string>(null)

    useEffect( ()=> {
        getUser().then(( usr ) => {
        console.log(`User data: ${usr}`)
        setUserData(usr)
        const teamId = usr.teamId
        return getTeam(teamId)
    }).then( (team) => {
        setTeamData(team)
    } ).catch((error) => {
        setUserTeamError(
            error instanceof Error ? error.message : "Unknown message"
        )
    }).finally(()=> {
        setUserLoading(false)
    })
    }, [] )

    return {
        userData,
        teamData, 
        userLoading,
        userTeamError
    }

}

export default useUserTeam;