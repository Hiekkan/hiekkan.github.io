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
import { useTheme } from "@mui/system";

export default function Footer() {
  const theme = useTheme();
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
          sx={{ backgroundColor: theme.palette.mode === "dark" ? "#16161e" : "#cbccd1", width: "200px" }}
          display="flex"
        >
          <Stack direction="row" spacing={0.5}>
            <Box
              component={Link}
              href="https://github.com/Hiekkan/hiekkan.github.io"
              underline="none"
              color={theme.palette.mode === "dark" ? "white" : "#333333"}
              target="_blank"
              display="flex"
              sx={{
                px: 0.5,
                justifyContent: "center",
                alignItems: "center",
                "&:hover": {
                  background: theme.palette.mode === "dark" ? "#44475c" : "#d5d6db",
                },
              }}
            >
              <IoIosGitBranch fontSize="0.9rem" />
              <Typography sx={{ ml: 0.5, mt: 0.1, fontSize: "0.6rem", color: theme.palette.mode === "dark" ? "white" : "#333333" }}>
                main
              </Typography>
            </Box>
            <Box
              component={Link}
              href="https://github.com/Hiekkan/hiekkan.github.io"
              underline="none"
              color={theme.palette.mode === "dark" ? "white" : "#333333"}
              target="_blank"
              display="flex"
              sx={{
                px: 0.5,
                justifyContent: "center",
                alignItems: "center",
                "&:hover": {
                  background: theme.palette.mode === "dark" ? "#44475c" : "#d5d6db",
                },
              }}
            >
              <VscSync fontSize="0.9rem" color={theme.palette.mode === "dark" ? "white" : "#333333"} />
            </Box>
            <Stack
              direction="row"
              spacing={0.5}
              sx={{
                px: 0.5,
                cursor: "pointer",
                "&:hover": {
                  background: theme.palette.mode === "dark" ? "#44475c" : "#d5d6db",
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
                <VscError fontSize="0.9rem" color={theme.palette.mode === "dark" ? "white" : "#333333"} />
              </Box>
              <Box
                display="flex"
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  pt: 0.3,
                }}
              >
                <Typography sx={{ fontSize: "0.6rem", color: theme.palette.mode === "dark" ? "white" : "#333333" }}>0</Typography>
              </Box>

              <Box
                display="flex"
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  py: 0.3,
                }}
              >
                <VscWarning fontSize="0.9rem" color={theme.palette.mode === "dark" ? "white" : "#333333"} />
              </Box>
              <Box
                display="flex"
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  pt: 0.3,
                }}
              >
                <Typography sx={{ fontSize: "0.6rem", color: theme.palette.mode === "dark" ? "white" : "#333333" }}>0</Typography>
              </Box>
            </Stack>
          </Stack>
        </Grid>
        <Grid
          item
          sx={{ backgroundColor: theme.palette.mode === "dark" ? "#16161e" : "#cbccd1", minWidth: `calc(100% - 235px)` }}
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
                    background: theme.palette.mode === "dark" ? "#44475c" : "#d5d6db",
                  },
                }}
              >
                <VscCheck fontSize="0.9rem" color={theme.palette.mode === "dark" ? "white" : "#333333"} />
                <Typography sx={{ ml: 0.5, mt: 0.1, fontSize: "0.6rem", color: theme.palette.mode === "dark" ? "white" : "#333333" }}>
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
                    background: theme.palette.mode === "dark" ? "#44475c" : "#d5d6db",
                  },
                }}
              >
                <VscFeedback fontSize="0.9rem" color={theme.palette.mode === "dark" ? "white" : "#333333"} />
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
                    background: theme.palette.mode === "dark" ? "#44475c" : "#d5d6db",
                  },
                }}
              >
                <VscBell fontSize="0.9rem" color={theme.palette.mode === "dark" ? "white" : "#333333"} />
              </Box>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
