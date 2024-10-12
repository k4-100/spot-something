import { Paper } from "@mui/material";
import SongBar from "./SongBar";
import Controls from "./PlaybackControls";
import SoundControls from "./SoundControls";
import PlaybackControls from "./PlaybackControls";




const PlayerMenu: React.FC = () => {
  return (
    <Paper elevation={2} sx={{
      minHeight: "85px",
      display: "flex"
    }}>
      <SongBar />
      <PlaybackControls />
      <SoundControls />
    </Paper>
  )
}


export default PlayerMenu;
