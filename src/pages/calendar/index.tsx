import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { useRecoilState, useSetRecoilState } from "recoil";
import { Button } from "@mui/material";

import { PlanMeeting } from "../../components/Calendar/PlanMeeting/PlanMeeting";
import { UserInfoCard } from "../../components/Cards/UserInfoCard/UserInfoCard";
import { RightPanelUpper } from "../../components/Globals/RightPanelUpper/RightPanelUpper";
import { RightPanelLower } from "../../components/Globals/RightPanelLower/RightPanelLower";
import { CalendarComponent } from "../../components/Calendar/CalendarComponent/CalendarComponent";
import { TimeSlotSelection } from "../../components/Calendar/TimeSlotSelection/TimeSlotSelection";
import { calVisibilityState } from "../../store/calVisibilityState";
import { selectedPageState } from "../../store/selectedPageState";
import HomeLayout from "../../components/Layouts/HomeLayout";

const Calendar = () => {
  const [calVisibility, setCalVisibility] = useRecoilState(calVisibilityState);
  const setSelectedPageState = useSetRecoilState(selectedPageState);

  useEffect(() => {
    setSelectedPageState({
      selectedPage: "calendar",
    });
  }, []);

  return (
    <HomeLayout>
      <Box
        sx={{
          marginTop: -7.5,
          flexGrow: 1,
          paddingLeft: 5,
          paddingRight: 5,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6} md={9}>
            <Container
              style={{
                marginTop: "8vh",
                backgroundColor: "#242424",
                borderRadius: "25px",
                color: "white",
                padding: "36px",
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <UserInfoCard />
              {calVisibility ? (
                <>
                  <Grid container>
                    <Grid item xs={8}>
                      <CalendarComponent />
                    </Grid>
                    <Grid item xs={4}>
                      <TimeSlotSelection instances={9} />
                    </Grid>
                  </Grid>
                  <Box display="flex" justifyContent="flex-end">
                    <Button
                      style={{
                        border: "none",
                        backgroundColor: "#5b155d ",
                        borderRadius: "10px ",
                        minWidth: "50px",
                        minHeight: "50px",
                        color: "white",
                        fontSize: "larger",
                        cursor: "pointer",
                      }}
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
            mt={7.5}
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
    </HomeLayout>
  );
};

export default Calendar;
