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
import { calVisibilityState } from "@src/store/CalVisibilityState";

import "./Calendar.scss";
import { Button } from "@mui/material";

export const Calendar = () => {
  const [calVisibility, setCalVisibility] = useRecoilState(calVisibilityState);

  return (
    <Box sx={{ flexGrow: 1, paddingLeft: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={9}>
          <Container className="Calendarv">
            <UserInfoCard />
            {calVisibility ? (
              <>
                <Grid container>
                  <Grid item xs={8}>
                    <CalendarComponent />
                  </Grid>
                  <Grid item xs={4} marginLeft="-40px">
                    <TimeSlotSelection instances={9} />
                  </Grid>
                </Grid>
                <Box display="flex" justifyContent="flex-end">
                  <Button
                    className="calendar__proceed-button"
                    onClick={() => setCalVisibility(!calVisibility)}
                  >
                    {calVisibility ? ">" : "<"}
                  </Button>
                </Box>
              </>
            ) : (
              <PlanMeeting />
            )}
          </Container>
        </Grid>
        <Grid
          item
          xs={4}
          md={3}
          display={{ lg: "block", sm: "none", md: "none" }}
        >
          <RightPanelUpper />
          <RightPanelLower />
        </Grid>
      </Grid>
    </Box>
  );
};
