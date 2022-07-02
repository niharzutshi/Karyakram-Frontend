import TrendingDisplayCard from "../../Cards/TrendingDisplayCard/TrendingDisplayCard";
import { Box } from "@mui/material";
import React from "react";
import Image from "next/image";

type TrendingHighlightProps = {};

const TrendingHighlight: React.FC<TrendingHighlightProps> = () => {
  return (
    <Box
      position="relative"
      border="8px solid #201C2C"
      width="85%"
      height="250px"
    >
      <Image
        src="https://scontent.fdel9-1.fna.fbcdn.net/v/t1.6435-9/56157715_2289257071119529_8458002770148982784_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_ohc=k87PRzeSFMoAX9QS5Bv&_nc_ht=scontent.fdel9-1.fna&oh=00_AT_nInl-1yCDyNIDd3-Bae_YQrBOgMWVCeLTwOACfwIrIQ&oe=62D4BBCF"
        alt="event pic"
        style={{
          maxWidth: "100%",
          objectFit: "cover",
          maxHeight: "100%",
          width: "100%",
        }}
      />
      <Box position="absolute" left="85%" bottom={0} top="10%">
        <TrendingDisplayCard />
      </Box>
    </Box>
  );
};

export default TrendingHighlight;
