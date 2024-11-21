import { Box, Icon } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

function HeartBeatIcon() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      animation="heartbeat 1s infinite"
      sx={{
        "@keyframes heartbeat": {
          "0%": { transform: "scale(1)" },
          "30%": { transform: "scale(1.2)" },
          "60%": { transform: "scale(1)" },
          "100%": { transform: "scale(1)" },
        },
      }}
    >
      <Icon as={FaHeart} color="red.500" boxSize={4} />
    </Box>
  );
}

export default HeartBeatIcon;