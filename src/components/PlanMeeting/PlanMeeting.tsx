/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { calVisibilityState } from "../../store/calVisibilityState";
import { useRecoilState } from "recoil";

export const PlanMeeting = () => {
  const [calVisibility, setCalVisibility] = useRecoilState(calVisibilityState);
  return (
    <Box
      sx={{
        width: "100%",
        padding: "20px",
        justifyContent: "left",
        marginLeft: 2,
      }}
    >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#242424",
            }}
          >
            <CalendarTodayOutlinedIcon
              sx={{ color: "#800C83", transform: "scale(1.8)" }}
            />
            <Typography
              component="div"
              sx={{ marginLeft: "13px", cursor: "default" }}
            >
              26 Thursday, February, 2022
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#242424",
            }}
          >
            <AccessTimeOutlinedIcon
              sx={{ color: "#800C83", transform: "scale(1.8)" }}
            />
            <Typography
              component="div"
              sx={{ marginLeft: "13px", cursor: "default" }}
            >
              2:30 - 3:00 pm
            </Typography>
          </Box>
        </Grid>

        <Box sx={{ width: "100vh" }}>
          <Stack
            spacing={2}
            direction="row"
            sx={{ padding: "15px", backgroundColor: "#242424", marginTop: 3 }}
          >
            <Button variant="contained" sx={{ backgroundColor: "blueviolet" }}>
              Add Participants
            </Button>
          </Stack>
        </Box>

        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
            marginTop: 3,
          }}
        >
          <TextareaAutosize
            aria-label="minimum height"
            minRows={10}
            placeholder="Add information here that would help other to join "
            style={{
              width: "100vh",
              backgroundColor: "#3F3F3F",
              border: "none",
              color: "white",
              borderRadius: 8,
              padding: 12,
              marginLeft: "15px",
            }}
          />
        </Box>
      </Grid>

      <Box
        sx={{
          display: "flex",
          backgroundColor: "#242424",
          justifyContent: "space-between",
          marginTop: 2,
          marginLeft: "-8px",
        }}
      >
        <Box display="flex" justifyContent="flex-start">
          <Button
            className="calendar__proceed-button"
            onClick={() => setCalVisibility(!calVisibility)}
          >
            {calVisibility ? ">" : "<"}
          </Button>
        </Box>
        <Button
          variant="contained"
          sx={{ backgroundColor: "blueviolet" }}
          endIcon={<ChevronRightIcon />}
        >
          Schedule Meeting
        </Button>
      </Box>
    </Box>
  );
};
