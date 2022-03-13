import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FaceIcon from '@mui/icons-material/Face';

import './ExpandableCard.scss';

const ExpandedContent = () => {
  return (
    <div className="expanded-content__container">
      <div className="expanded-content__first-row">
        <span>Feb 10, 2022</span>
        <span className="expanded-content__badge">Today</span>
      </div>
      <div>Discuss UI Components</div>
      <span className="expanded-content__category">Work</span>
      <div className="expanded-content__profiles  ">
        <AccountCircleIcon fontSize="large" />
        <FaceIcon fontSize="large" />
      </div>
    </div>
  );
};

interface ExpandableCardProps {
  color?: string;
}

export const ExpandableCard: React.FC<ExpandableCardProps> = ({ color = '#644BAB' }) => {
  const [expanded, setExpanded] = useState(false);
  const [rotateChevron, setRotateChevron] = useState(false);
  const handleRotate = () => setRotateChevron(!rotateChevron);
  console.log(color);
  return (
    <Card
      className="expandable-card__container"
      sx={{
        width: '100%',
        backgroundColor: color
      }}>
      <CardActions disableSpacing>
        <IconButton
          onClick={() => {
            setExpanded(!expanded);
            handleRotate();
          }}
          aria-expanded={expanded}>
          <ExpandMoreIcon
            fontSize="medium"
            className={`expandable-card__chevron ${rotateChevron ? 'rotate' : ''}`}
          />
        </IconButton>
        <div className="expandable-card__details">
          <span className="expandable-card__details-title">Karyakram Meet</span>
          <br />
          <span className="date">Feb 10, 2022</span>
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
