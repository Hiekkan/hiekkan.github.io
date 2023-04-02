import React from "react";
import { Box, Link, Paper, Tooltip } from "@mui/material";
import { VscFiles, VscSettingsGear } from "react-icons/vsc";
import { BiGitBranch } from "react-icons/bi";
import Divider from "@mui/material/Divider";
import { links } from "../pages/Links";

interface Props {
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({
  expanded,
  setExpanded,
}: Props) {
  return (
    <Box
      sx={{
        height: `calc(100vh - 20px)`,
        backgroundColor: "#1a1b26",
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
            borderLeft: expanded
              ? "solid 0.13em #8388a8"
              : "solid 0.13em #44475c",
            cursor: "pointer",
            WebkitTapHighlightColor: "rgba(0,0,0,0)",
          }}
          onClick={() => setExpanded(!expanded)}
        >
          <Box
            sx={{
              flexGrow: 0,
              my: 1.5,
              color: expanded ? "#8388a8" : "#44475c",
              fontSize: 24,
              outline: "none",
              "&:hover": {
                color: "white",
              },
            }}
            display="flex"
            justifyContent="center"
          >
            <VscFiles />
          </Box>
        </Box>
        <Tooltip 
          title="Source of this project"
          placement="right"
          arrow
          componentsProps={{
            tooltip: {
              sx: {
                bgcolor: "#1a1b26",
                color: "#8388a8",
                border: "0.1em solid black",
                '& .MuiTooltip-arrow': {
                  color: '#1a1b26',
                }
              }
            }
          }}
          >
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
                color: "#44475c",
                fontSize: 24,
                "&:hover": {
                  color: "#8388a8",
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
          <Tooltip 
            title={link.title}
            arrow
            placement="right"
            key={link.index}
            componentsProps={{
              tooltip: {
                sx: {
                  bgcolor: "#1a1b26",
                  color: "#8388a8",
                  border: "0.1em solid black",
                  '& .MuiTooltip-arrow': {
                    color: '#1a1b26',
                  }
                }
              }
            }}
            >
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
                  color: "#44475c",
                  fontSize: 24,
                  "&:hover": {
                    color: "#8388a8",
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
        <Box
          sx={{
            flexGrow: 0,
            fontSize: 24,
            color: "#44475c",
            cursor: "pointer",
            "&:hover": {
              color: "#8388a8",
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
