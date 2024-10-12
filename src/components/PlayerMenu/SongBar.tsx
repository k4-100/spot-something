
import { Box, IconButton, Typography } from "@mui/material";
import placeholderImg from "../../assets/placeholder.png"
import { grey } from "@mui/material/colors";
import { Check, CheckBoxOutlineBlank, CheckCircleOutline, FavoriteBorder, RadioButtonCheckedRounded, RadioButtonUnchecked } from "@mui/icons-material";

const SongBar: React.FC = () => {
  return (<Box sx={{
  }}>
    <Box sx={{
      display: "flex",
      height: "100%",
      justifyContent: "center",
      // alignItems: "center"
    }}>
      <img src={placeholderImg} alt="user avatar" style={{
        width: "90px",
        border: "transparent 10px solid"
      }} />
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}>
        <Typography variant="h6">
          Song Titte
        </Typography>
        <Typography variant="subtitle1">
          Subtitle
        </Typography>
      </Box>
      <Box sx={{
        display: "flex"
      }}>
        <IconButton>
          <RadioButtonUnchecked sx={{
            fontSize: "30px"
          }} />
        </IconButton>
      </Box>
      {/* right border */}
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        pl: "14px",
        "& > *": {
          flex: 1,
          borderColor: "#121212 !important",
          width: "45px"
        }
      }}>
        {/* top */}
        <Box sx={{
          borderRight: "solid  10px",
          borderBottom: "solid  6px",
        }}>
        </Box>
        {/* bottom */}
        <Box sx={{
          borderTop: "solid  6px",
          borderRight: "solid  10px",
        }}>
        </Box>
      </Box>
    </Box>
  </Box>);
};

export default SongBar;
