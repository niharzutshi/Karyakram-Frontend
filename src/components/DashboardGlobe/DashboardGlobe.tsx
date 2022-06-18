import { darkThemeSelectedState } from "@src/store/DarkThemeSelectedState";
import React from "react";
import Globe from "react-globe.gl";
import { useRecoilValue } from "recoil";

const DashboardGlobe: React.FC = () => {
  const darkThemeSelected = useRecoilValue(darkThemeSelectedState);
  const imageUrlLight = "https://i.imgur.com/VQEaPar.png";
  const imageUrlDark = "https://i.imgur.com/Mv8PZBq.jpg";
  const globeRef: any = React.useRef(null);

  const arcsData = [1, 2, 3, 4, 5, 6].map(() => ({
    startLat: (Math.random() - 0.5) * 180,
    startLng: (Math.random() - 0.5) * 360,
    endLat: (Math.random() - 0.5) * 180,
    endLng: (Math.random() - 0.5) * 360,
    color: [["#000000"][0], ["#000000"][0]],
  }));
  return (
    <>
      <Globe
        //@ts-ignore
        ref={globeRef}
        width={480}
        height={480}
        backgroundColor={"rgba(0,0,0,0)"}
        globeImageUrl={darkThemeSelected ? imageUrlDark : imageUrlLight}
        arcColor={"color"}
        arcsData={arcsData}
        arcDashGap={0.6}
        arcDashLength={0.3}
        arcDashAnimateTime={4000 + 500}
        rendererConfig={{ preserveDrawingBuffer: true }}
      />
    </>
  );
};
export default DashboardGlobe;
