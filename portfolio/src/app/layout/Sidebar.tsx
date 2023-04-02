import React from "react";
import { Box, Link, Paper, Tooltip } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { VscFiles, VscSettingsGear } from "react-icons/vsc";
import { BiGitBranch } from "react-icons/bi";
import Divider from "@mui/material/Divider";
import { links } from "../pages/Links";

interface Props {
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  darkMode: boolean;
  handleThemeChange: () => void;
}

export default function Sidebar({
  expanded,
  setExpanded,
  darkMode,
  handleThemeChange,
}: Props) {

  function renderBoxColor() {
    if (darkMode) {
      return expanded ? "#8388a8" : "#44475c";
    } else {
      return expanded ?  "#828594" : "#4c505e";
    }
  }

  return (
    <Box
      sx={{
        height: `calc(100vh - 20px)`,
        backgroundColor: darkMode ? "#16161e" : "#cbccd1",
      }}
      justifyContent="space-between"
      display="flex"
      flexDirection="column"
      component={Paper}
      square
      elevation={0}
    >
      <Box
        sx={{ flexGrow: 0 }}
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <Box
          sx={{
            borderLeft: renderBoxColor(),
            cursor: "pointer",
            WebkitTapHighlightColor: "rgba(0,0,0,0)",
          }}
          onClick={() => setExpanded(!expanded)}
        >
          <Box
            sx={{
              flexGrow: 0,
              my: 1.5,
              color: renderBoxColor(),
              fontSize: 24,
              outline: "none",
              "&:hover": {
                color: darkMode ? "white" : "#4c505e",
              },
            }}
            display="flex"
            justifyContent="center"
          >
            <VscFiles />
          </Box>
        </Box>
        <Tooltip title="Source of this project" arrow placement="right" 
          componentsProps={{
          tooltip: {
            sx: {
              bgcolor: darkMode ? "#16161e" : "#d5d6db",
              color: darkMode ? "#8388a8" : "#16161e",
              border: darkMode ? "0.1em solid black" : "none",
              '& .MuiTooltip-arrow': {
                color: darkMode ? "#16161e" : "#d5d6db",
              }
            }
          }
        }}>
          <Link
            target="_blank"
            href={"https://github.com/Hiekkan/hiekkan.github.io"}
            underline="none"
            color="inherit"
            sx={{ WebkitTapHighlightColor: "rgba(0,0,0,0)" }}
          >
            <Box
              sx={{
                flexGrow: 0,
                cursor: "pointer",
                color: darkMode ? "#44475c" : "#828594",
                fontSize: 24,
                "&:hover": {
                  color: darkMode ? "#8388a8" : "#4c505e",
                },
              }}
              display="flex"
              justifyContent="center"
            >
              <Box mt={0.7}>
                <BiGitBranch />
              </Box>
            </Box>
          </Link>
        </Tooltip>

        <Divider sx={{ m: 0.5 }} />

        {links.map((link) => (
          <Tooltip title={link.title} arrow placement="right" key={link.index}
          componentsProps={{
            tooltip: {
              sx: {
                bgcolor: darkMode ? "#16161e" : "#d5d6db",
                color: darkMode ? "#8388a8" : "#16161e",
                border: darkMode ? "0.1em solid black" : "none",
                '& .MuiTooltip-arrow': {
                  color: darkMode ? "#16161e" : "#d5d6db",
                }
              }
            }
          }}>
            <Link
              target="_blank"
              href={link.href}
              underline="none"
              color="inherit"
              sx={{ WebkitTapHighlightColor: "rgba(0,0,0,0)" }}
            >
              <Box
                sx={{
                  flexGrow: 0,
                  m: 0.5,
                  color: darkMode ? "#44475c" : "#828594" ,
                  fontSize: 24,
                  "&:hover": {
                    color: darkMode ? "#8388a8" : "#4c505e",
                  },
                  cursor: "pointer",
                }}
                display="flex"
                justifyContent="center"
              >
                <Box mt={0.7}>{link.icon}</Box>
              </Box>
            </Link>
          </Tooltip>
        ))}
      </Box>

      <Box
        sx={{ flexGrow: 0, pb: 0.5 }}
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <Tooltip
          title={darkMode ? "Turn on the light" : "Turn off the light"}
          placement="right"
          arrow
        >
          <Box
            sx={{
              flexGrow: 0,
              fontSize: 24,
              color: darkMode ? "#44475c" : "#828594",
              cursor: "pointer",
              "&:hover": {
                color: darkMode ? "#8388a8" : "#4c505e",
              },
              WebkitTapHighlightColor: "rgba(0,0,0,0)",
            }}
            display="flex"
            justifyContent="center"
            onClick={handleThemeChange}
          >
            {!darkMode ? (
              <Box>
                <DarkModeOutlinedIcon />
              </Box>
            ) : (
              <Box>
                <LightModeOutlinedIcon />
              </Box>
            )}
          </Box>
        </Tooltip>
        <Box
          sx={{
            flexGrow: 0,
            fontSize: 24,
            color: darkMode ? "#44475c" : "#828594" ,
            cursor: "pointer",
            "&:hover": {
              color: darkMode ? "#8388a8" : "#4c505e",
            },
            WebkitTapHighlightColor: "rgba(0,0,0,0)",
          }}
          display="flex"
          justifyContent="center"
        >
          <Box mt={0.7}>
            <VscSettingsGear />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
