import { Box } from "@mui/material";

// IMPORTADOS
import "./bannerVideo.scss";

interface BannerVideoProps {
  linkVideo: string;
  playlist?: string;
}

const BannerVideo = ({ linkVideo, playlist }: BannerVideoProps) => {
  return (
    <Box id="video" className="containerVideo">
      <Box className="contentVideo">
        <iframe
          src={`${linkVideo}?controls=0&loop=1&mute=1&modestbranding=1${playlist}`}
          title="Video"
          width="89%"
          height="100%"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          frameBorder="0"
          rel="0"
          loading="lazy"
        ></iframe>
      </Box>
    </Box>
  );
};

export default BannerVideo;
