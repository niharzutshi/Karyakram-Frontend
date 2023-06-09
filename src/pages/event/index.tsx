import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { EventDescription } from "../../components/Event/EventDescription/EventDescription";
import { RightPanelUpper } from "../../components/Globals/RightPanelUpper/RightPanelUpper";
import { RightPanelLower } from "../../components/Globals/RightPanelLower/RightPanelLower";
import HomeLayout from "../../components/Layouts/HomeLayout";

const Event = () => {
  return (
    <HomeLayout>
      <Box sx={{ flexGrow: 1, background: "none" }}>
        <Grid container spacing={2} sx={{ background: "none" }}>
          <Grid item xs={6} md={9} sx={{ background: "none" }}>
            <Grid container spacing={2}>
              <Grid item xs={8} sx={{ marginTop: "25px" }}>
                <Container
                  style={{
                    width: "100%",
                    marginTop: "5vh",
                    backgroundColor: "#242424",
                    minHeight: "80vh",
                    borderRadius: "25px",
                    marginLeft: "1vh",
                    color: "white",
                    padding: "5px",
                  }}
                >
                  <EventDescription />
                  <Container sx={{ marginTop: "28px" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam atque sint similique quam recusandae vitae illum,
                    eaque beatae, qui possimus eum iste voluptas, veniam sunt id
                    minima? Laudantium, perferendis officiis!
                  </Container>
                </Container>
              </Grid>
              <Grid item xs={4} sx={{ background: "none", marginTop: "18px" }}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "25px",
                    padding: "25px",
                    background: "none",
                  }}
                >
                  <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <CalendarTodayIcon
                      sx={{
                        color: "#800C83",
                        marginTop: "20px",
                        fontSize: "50px",
                        justifyContent: "left",
                        alignItems: "left",
                      }}
                    />
                    <CardContent sx={{}}>
                      <Typography
                        component="div"
                        variant="h4"
                        sx={{ marginTop: "8px" }}
                      >
                        15 Mar
                      </Typography>
                    </CardContent>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <QueryBuilderIcon
                      sx={{
                        color: "#800C83",
                        marginTop: "20px",
                        fontSize: "50px",
                      }}
                    />
                    <CardContent sx={{}}>
                      <Typography
                        component="div"
                        variant="h4"
                        sx={{ marginTop: "8px" }}
                      >
                        5:00 PM
                      </Typography>
                    </CardContent>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <PeopleAltIcon
                      sx={{
                        color: "#800C83",
                        marginTop: "20px",
                        fontSize: "50px",
                      }}
                    />
                    <CardContent sx={{}}>
                      <Typography
                        component="div"
                        variant="h5"
                        sx={{ marginTop: "8px" }}
                      >
                        2.3k Participants
                      </Typography>
                    </CardContent>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <LocationOnIcon
                      sx={{
                        color: "#800C83",
                        marginTop: "20px",
                        fontSize: "50px",
                      }}
                    />
                    <CardContent sx={{}}>
                      <Typography
                        component="div"
                        variant="h4"
                        sx={{ marginTop: "8px" }}
                      >
                        N-Block
                      </Typography>
                    </CardContent>
                  </Box>
                  <Stack sx={{ justifyContent: "center" }} direction="row">
                    <Button
                      sx={{
                        backgroundColor: "#800C83",
                        textTransform: "none",
                        textEmphasisColor: "white",
                        color: "white",
                        "&:hover": { backgroundColor: "white", color: "black" },
                      }}
                      variant="contained"
                    >
                      Register
                    </Button>
                  </Stack>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4} md={3}>
            <RightPanelUpper />
            <RightPanelLower />
          </Grid>
        </Grid>
      </Box>
    </HomeLayout>
  );
};

export default Event;
