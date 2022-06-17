import React from "react";

import "./Notifications.scss";
import { NotificationCard } from "@components/NotificationCard/NotificationCard";

export const Notifications = () => {
  return (
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
  );
};
