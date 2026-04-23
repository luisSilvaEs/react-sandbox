import { useEffect, useState } from "react";
import type { Announcement } from "../../types/admin/announcements";
import { getAnnouncements } from "../../api/admin/announcements";

function useAnnouncements() {

    const [announcementsLoading, setAnnouncementsLoading] = useState(true)
    const [announcementsData, setAnnouncementsData] = useState<Announcement[]>(
        [],
      );
    const [announcementsError, setAnnouncementsError] = useState<null | string>(null)

      useEffect( () => {
        getAnnouncements().then( anc => {
            console.log(`Announcement data ${anc}`)
            setAnnouncementsData(anc)
        } ).catch( error => {
            setAnnouncementsError(
                error instanceof Error ? error.message : "Unknown error"
            )
        } ).finally( () => {
            setAnnouncementsLoading(false)
        } )
      }, [] )

      return {
        announcementsData,
        announcementsLoading,
        announcementsError
      }

}

export default useAnnouncements;