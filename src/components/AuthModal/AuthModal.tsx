import { CryptoConnect } from "@components/CryptoConnect/CryptoConnect";
import { Login } from "@components/Login/Login";
import { OAuthOptions } from "@components/OAuthOptions/OAuthOptions";
import { ResetPassword } from "@components/ResetPassword/ResetPassword";
import { Signup } from "@components/Signup/Signup";
import { Modal, Box, Typography, Divider } from "@mui/material";
import { authModalState } from "@src/store/authModalState";
import React from "react";
import { useRecoilState } from "recoil";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#242424",
  borderRadius: "30px",
  boxShadow: 24,
  p: 4,
};

export const AuthModal: React.FC = () => {
  const [modalState, setModalState] = useRecoilState(authModalState);
  const handleClose = () => {
    setModalState((prev) => ({
      ...prev,
      open: false,
    }));
  };

  return (
    <div>
      <Modal
        open={modalState.open === true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            marginBottom="20px"
          >
            {modalState.view === "login" && "Log In"}
            {modalState.view === "signup" && "Sign Up"}
            {modalState.view === "crypto" && "Connect Wallet"}
            {modalState.view === "resetPassword" && "Reset Password"}
          </Typography>
          {(modalState.view === "login" || modalState.view === "signup") && (
            <OAuthOptions />
          )}
          <Divider style={{ width: "100%", marginBottom: "20px" }} />
          {modalState.view === "login" && <Login />}
          {modalState.view === "signup" && <Signup />}
          {modalState.view === "crypto" && <CryptoConnect />}
          {modalState.view === "resetPassword" && <ResetPassword />}
        </Box>
      </Modal>
    </div>
  );
};
