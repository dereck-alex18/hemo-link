import {
  Box,
} from "@chakra-ui/react";

function CustomDivider() {
  return (
    <>
      <Box
        height="2px"
        bgGradient="linear(to-r, hemoPrimary, hemoSecondary, transparent)"
        borderRadius="full"
        my={4}
        w={["90%", "90%", "70%", "60%"]}
        m="auto"
      />
    </>
  );
}

export default CustomDivider;
