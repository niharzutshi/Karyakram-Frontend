import React from "react";

import "./Notifications.scss";
import { NotificationCard } from "@components/NotificationCard/NotificationCard";
import HomeLayout from "@src/layouts/HomeLayout";

export const Notifications = () => {
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
