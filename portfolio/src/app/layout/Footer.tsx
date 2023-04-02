import { Box, Grid, Link, Paper, Stack, Typography } from "@mui/material";
import {
  VscRemote,
  VscError,
  VscWarning,
  VscBell,
  VscFeedback,
  VscCheck,
  VscSync,
} from "react-icons/vsc";
import { IoIosGitBranch } from "react-icons/io";

export default function Footer() {
  return (
    <Box
      component={Paper}
      square
      elevation={0}
      sx={{ height: "20px", color: "white" }}
      display="flex"
    >
      <Grid container>
        <Grid
          item
          sx={{
            width: "35px",
            backgroundColor: "#3d59a1",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            "&:hover": {
              background: "#20222c",
            },
          }}
          display="flex"
        >
          <VscRemote fontSize="0.9rem" style={{strokeWidth: "1"}} />
        </Grid>
        <Grid
          item
          sx={{ backgroundColor: "#1a1b26", width: "200px" }}
          display="flex"
        >
          <Stack direction="row" spacing={0.5}>
            <Box
              component={Link}
              href="https://github.com/Hiekkan/hiekkan.github.io"
              underline="none"
              color="white"
              target="_blank"
              display="flex"
              sx={{
                px: 0.5,
                justifyContent: "center",
                alignItems: "center",
                "&:hover": {
                  background: "#44475c",
                },
              }}
            >
              <IoIosGitBranch fontSize="0.9rem" />
              <Typography sx={{ ml: 0.5, mt: 0.1, fontSize: "0.6rem", fontFamily: "Segoe WPC,Segoe UI,sans-serif" }}>
                main
              </Typography>
            </Box>
            <Box
              component={Link}
              href="https://github.com/Hiekkan/hiekkan.github.io"
              underline="none"
              color="white"
              target="_blank"
              display="flex"
              sx={{
                px: 0.5,
                justifyContent: "center",
                alignItems: "center",
                "&:hover": {
                  background: "#44475c",
                },
              }}
            >
              <VscSync fontSize="0.9rem" />
            </Box>
            <Stack
              direction="row"
              spacing={0.5}
              sx={{
                px: 0.5,
                cursor: "pointer",
                "&:hover": {
                  background: "#44475c",
                },
              }}
            >
              <Box
                display="flex"
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  py: 0.3,
                }}
              >
                <VscError fontSize="0.9rem" />
              </Box>
              <Box
                display="flex"
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  pt: 0.3,
                }}
              >
                <Typography sx={{ fontSize: "0.6rem", fontFamily: "Segoe WPC,Segoe UI,sans-serif" }}>0</Typography>
              </Box>

              <Box
                display="flex"
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  py: 0.3,
                }}
              >
                <VscWarning fontSize="0.9rem" />
              </Box>
              <Box
                display="flex"
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  pt: 0.3,
                }}
              >
                <Typography sx={{ fontSize: "0.6rem", fontFamily: "Segoe WPC,Segoe UI,sans-serif" }}>0</Typography>
              </Box>
            </Stack>
          </Stack>
        </Grid>
        <Grid
          item
          sx={{ backgroundColor: "#1a1b26", minWidth: `calc(100% - 235px)` }}
          display="flex"
          justifyContent="flex-end"
        >
          <Box display="flex" justifyContent="flex-end">
            <Stack
              justifyContent="end"
              direction="row"
              spacing={0.8}
              sx={{ pr: 1.5 }}
            >
              <Box
                display="flex"
                sx={{
                  px: 0.5,
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  "&:hover": {
                    background: "#44475c",
                  },
                }}
              >
                <VscCheck fontSize="0.9rem" />
                <Typography sx={{ ml: 0.5, mt: 0.1, fontSize: "0.6rem", fontFamily: "Segoe WPC,Segoe UI,sans-serif" }}>
                  Prettier
                </Typography>
              </Box>

              <Box
                display="flex"
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  py: 0.3,
                  px: 0.5,
                  cursor: "pointer",
                  "&:hover": {
                    background: "#44475c",
                  },
                }}
              >
                <VscFeedback fontSize="0.9rem" />
              </Box>
              <Box
                display="flex"
                sx={{
                  width: "50%",
                  justifyContent: "center",
                  alignItems: "center",
                  py: 0.3,
                  px: 0.5,
                  cursor: "pointer",
                  "&:hover": {
                    background: "#44475c",
                  },
                }}
              >
                <VscBell fontSize="0.9rem" />
              </Box>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
