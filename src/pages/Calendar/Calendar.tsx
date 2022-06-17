import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { useRecoilState } from "recoil";

import { PlanMeeting } from "@components/PlanMeeting/PlanMeeting";
import { UserInfoCard } from "@components/UserInfoCard/UserInfoCard";
import { RightPanelUpper } from "@components/RightPanelUpper/RightPanelUpper";
import { RightPanelLower } from "@components/RightPanelLower/RightPanelLower";
import { CalendarComponent } from "@components/CalendarComponent/CalendarComponent";
import { TimeSlotSelection } from "@components/TimeSlotSelection/TimeSlotSelection";
import { ProfileDropdown } from "@components/ProfileDropdown/ProfileDropdown";
import { calVisibilityState } from "@src/store/CalVisibilityState";

import "./Calendar.scss";
import { margin } from "@mui/system";

export const Calendar = () => {
  const [calVisibility, setCalVisibility] = useRecoilState(calVisibilityState);

  return (
    <Box sx={{ flexGrow: 1, padding: 5 }}>
      <ProfileDropdown />
      <Grid container spacing={2}>
        <Grid item xs={6} md={9}>
          <Container className="Calendarv">
            <UserInfoCard />

            <br />
            <h2 className="calendar__title">Plan a meeting</h2>
            {calVisibility ? (
              <Grid container>
                <Grid item xs={8}>
                  <CalendarComponent />
                </Grid>
                <Grid item xs={4}>
                  <TimeSlotSelection instances={5} />
                </Grid>
              </Grid>
            ) : (
              <PlanMeeting />
            )}
            <button
              className="calendar__proceed-button"
              onClick={() => setCalVisibility(!calVisibility)}
            >
              {calVisibility ? ">" : "<"}
            </button>
          </Container>
        </Grid>
        <Grid item xs={4} md={3}>
          <RightPanelUpper />
          <RightPanelLower />
        </Grid>
      </Grid>
    </Box>
  );
};
