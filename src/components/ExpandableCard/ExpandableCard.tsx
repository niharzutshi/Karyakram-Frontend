import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FaceIcon from "@mui/icons-material/Face";

const ExpandedContent = () => {
  return (
    <div
      style={{
        cursor: "default",
        backgroundColor: "#d3cbe9",
        color: "#36226d",
        fontWeight: "bold",
        fontSize: "17px",
        padding: "25px 25px 10px 25px",
        borderRadius: "5px",
      }}
    >
      <div style={{ marginBottom: "5px", display: "inline-block" }}>
        <span>Feb 10, 2022</span>
        <span>Today</span>
      </div>
      <div>Discuss UI Components</div>
      <span
        style={{
          border: "1px solid #36226d",
          padding: "2px 5px 2px 5px",
          borderRadius: "50px",
          fontSize: "10px",
        }}
      >
        Work
      </span>
      <div style={{ marginTop: "5px" }}>
        <AccountCircleIcon fontSize="large" />
        <FaceIcon fontSize="large" />
      </div>
    </div>
  );
};

interface ExpandableCardProps {
  color?: string;
  width?: string;
}

const chevronStyle = {
  color: "white ",
  borderRadius: "2px",
  transition: "all 2 linear",
};

const chevronRotatedStyle = { transform: "rotate(-90deg)" };

export const ExpandableCard: React.FC<ExpandableCardProps> = ({
  color = "#644BAB",
  width = "345px",
}) => {
  const [expanded, setExpanded] = useState(false);
  const [rotateChevron, setRotateChevron] = useState(false);
  const handleRotate = () => setRotateChevron(!rotateChevron);

  return (
    <Card
      style={{
        marginLeft: "15px",
        padding: "5px 15px 5px 15px",
        backgroundColor: "#36226d",
        color: "white",
        border: "1px solid #36226d",
        borderRadius: "12px",
        fontSize: "14px",
      }}
      sx={{
        width: width,
        backgroundColor: color,
      }}
    >
      <CardActions disableSpacing>
        <IconButton
          onClick={() => {
            setExpanded(!expanded);
            handleRotate();
          }}
          aria-expanded={expanded}
        >
          <ExpandMoreIcon
            fontSize="medium"
            style={rotateChevron ? chevronStyle : chevronRotatedStyle}
          />
        </IconButton>
        <div style={{ marginLeft: 10 }}>
          <span style={{ fontWeight: "bold", fontSize: "20px" }}>
            Karyakram Meet
          </span>
          <br />
          <span>Feb 10, 2022</span>
        </div>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <ExpandedContent />
        </CardContent>
      </Collapse>
    </Card>
  );
};
