import * as React from "react";
import EditIcon from "@mui/icons-material/Edit";
import { Avatar, Typography, Box, Button, Modal, Radio } from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSetRecoilState } from "recoil";
import { authModalState } from "../../store/authModalState";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import AddIcon from "@mui/icons-material/Add";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Calendar from "react-calendar";
import { FavoriteBorder } from "@mui/icons-material";

const theme = createTheme({
  palette: {
    neutral: {
      main: "#36226d",
      contrastText: "#fff",
    },
  },
});

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "black",
  font: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
declare module "@mui/material/styles" {
  interface Palette {
    neutral: Palette["primary"];
  }

  interface PaletteOptions {
    neutral?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}

const Userprofile = () => {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value: String) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const color = "#36226d";
  const setAuthModal = useSetRecoilState(authModalState);
  const [user] = useAuthState(auth);
  const photoURL = user?.photoURL || "https://i.pravatar.cc/300";
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
  }));
  return (
    <div>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        <Box gridColumn="span 8">
          <Box gridColumn="span 3">
            <Avatar
              alt="User"
              src={photoURL}
              sx={{ width: 100, height: 100, border: "7px solid #36226d" }}
            />
          </Box>
          <Box
            gridColumn="span 5"
            sx={{ display: "flex", flexDirection: "column", padding: 1 }}
          >
            <Typography sx={{ fontSize: "35px", fontWeight: "bold" }}>
              {user?.email?.split("@")[0]}
              <EditIcon
                sx={{ width: 35, height: 35, marginLeft: 2, marginTop: 2 }}
              />
            </Typography>
            <Typography sx={{ fontSize: "20px" }}>{user?.email}</Typography>
            <Box sx={{ marginLeft: 8, width: 800 }}>
              <Calendar />
            </Box>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ThemeProvider theme={theme}>
            <Button
              color="neutral"
              sx={{ marginTop: "75px", height: 70, width: 200 }}
              variant="contained"
              startIcon={<AddIcon />}
            >
              Add Availability
            </Button>
          </ThemeProvider>

          <ThemeProvider theme={theme}>
            <Button
              color="neutral"
              sx={{ marginTop: "35px", height: 70, width: 200 }}
              variant="contained"
              startIcon={<AccountBalanceWalletIcon />}
            >
              Wallet
            </Button>
          </ThemeProvider>
          <ThemeProvider theme={theme}>
            <Button
              onClick={handleOpen}
              color="neutral"
              sx={{ marginTop: "35px", height: 70, width: 200 }}
              variant="contained"
              startIcon={<PeopleAltIcon />}
            >
              Profile Visibility
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Set who can see your profile
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <List
                    sx={{
                      width: "100%",
                      maxWidth: 360,
                      bgcolor: "#36226d",
                      borderRadius: "20px",
                    }}
                  >
                    {["Public", "Private", "Freinds"].map((value) => {
                      const labelId = `checkbox-list-label-${value}`;

                      return (
                        <ListItem
                          key={value}
                          secondaryAction={
                            <IconButton
                              edge="end"
                              aria-label="comments"
                            ></IconButton>
                          }
                          disablePadding
                        >
                          <ListItemButton
                            role={undefined}
                            onClick={handleToggle(value)}
                            dense
                          >
                            <ListItemIcon>
                              <Radio
                                edge="start"
                                checked={checked.indexOf(value) !== -1}
                                tabIndex={-1}
                                disableRipple
                                inputProps={{ "aria-labelledby": labelId }}
                              />
                            </ListItemIcon>
                            <ListItemText
                              sx={{ font: "black" }}
                              id={labelId}
                              primary={` ${value}`}
                            />
                          </ListItemButton>
                        </ListItem>
                      );
                    })}
                  </List>
                </Typography>
              </Box>
            </Modal>
          </ThemeProvider>
        </Box>
      </Box>
    </div>
  );
};

export default Userprofile;
