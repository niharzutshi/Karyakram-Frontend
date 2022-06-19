import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";

import "./Notifications.module.scss";
import { NotificationCard } from "@components/NotificationCard/NotificationCard";
import HomeLayout from "@src/layouts/HomeLayout";
import { selectedPageState } from "@src/store/selectedPageState";

export const Notifications = () => {
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
