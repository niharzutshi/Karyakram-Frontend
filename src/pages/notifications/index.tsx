import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";

import { NotificationCard } from "../../components/Cards/NotificationCard/NotificationCard";
import HomeLayout from "../../components/Layouts/HomeLayout";
import { selectedPageState } from "../../store/selectedPageState";

const Notifications = () => {
  const setSelectedPageState = useSetRecoilState(selectedPageState);

  useEffect(() => {
    setSelectedPageState({
      selectedPage: "notifications",
    });
  }, []);

  return (
    <HomeLayout>
      <div>
        <NotificationCard
          title={"Event xyz by organization name on date"}
          type={1}
        />
        <NotificationCard
          title={"Karyakram meeting discussion on date and time"}
          type={2}
        />
        <NotificationCard
          title={"Karyakram meeting discussion on date and time"}
          type={3}
        />
      </div>
    </HomeLayout>
  );
};

export default Notifications;
