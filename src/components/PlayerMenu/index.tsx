import { Paper } from "@mui/material";
import SongBar from "./SongBar";




const PlayerMenu: React.FC = () => {
  return (
    <Paper elevation={2} sx={{
      minHeight: "85px",
    }}>
      <SongBar />
    </Paper>
  )
}


export default PlayerMenu;
