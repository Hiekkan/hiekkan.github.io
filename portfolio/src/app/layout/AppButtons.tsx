import { Button, Box, Paper } from "@mui/material";
import React from "react";
import { VscMarkdown, VscChromeClose } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import { Container, useTheme } from "@mui/system";

interface Props {
  pages: {
    index: number;
    name: string;
    route: string;
    exclude: boolean;
  }[];
  selectedIndex: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
  currentComponent: string;
  setCurrentComponent: React.Dispatch<React.SetStateAction<string>>;
  visiblePageIndexs: number[];
  setVisiblePageIndexs: React.Dispatch<React.SetStateAction<number[]>>;
}

export default function AppButtons({
  pages,
  selectedIndex,
  setSelectedIndex,
  currentComponent,
  setCurrentComponent,
  visiblePageIndexs,
  setVisiblePageIndexs,
}: Props) {
  const navigate = useNavigate();
  const theme = useTheme();
  const filteredPages = pages.filter((x) => !x.exclude);
  function renderButtonBgColor() {
    if (theme.palette.mode === "dark") {
      return "#16161e";
    } else {
      return "#cbccd1";
    }
  }

  function renderButtonColor(index: number) {
    if (theme.palette.mode === "dark") {
      return selectedIndex === index ? "#8388a8" : "#44475c";
    } else {
      return selectedIndex === index ? "#4c505e" : "#828594";
    }
  }

  function renderBorderButton(index: number) {
    return selectedIndex === index ? "2px solid #3d59a1" : "none";
  }

  function renderPageButton(index: number, name: string, route: string) {
    return (
      <Box
        key={index}
        sx={{
          height: "33px",
          display: "inline-block",
          borderBottom: renderBorderButton(index),
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <Button
          key={index}
          disableRipple
          disableElevation
          disableFocusRipple
          onClick={() => {
            setSelectedIndex(index);
            setCurrentComponent("button");
            navigate(route);
          }}
          sx={{
            height: "31px",
            borderRadius: 0,
            px: 2,
            textTransform: "none",
            backgroundColor: renderButtonBgColor(),
            color: renderButtonColor(index),
            "&.MuiButtonBase-root:hover": {
              color: theme.palette.mode === "dark" ? "#8388a8" : "#828594",
              backgroundColor: renderButtonBgColor(),
            },
            transition: "none",
          }}
        >
          <Box
            sx={{ color: "#6997d5", width: 20, height: 20, mr: 0.4, ml: -1 }}
          >
            <VscMarkdown />
          </Box>
          {name}
          <Box
            component={Paper}
            sx={{
              ml: 1,
              mr: -1,
              backgroundColor: renderButtonBgColor(),
              color: theme.palette.mode === "dark" ? "white" : "#4c505e",
              "&.MuiPaper-root:hover": {
                bgcolor: theme.palette.mode === "dark" ? "#202330" : "#828594",
              },
              width: 20,
              height: 20,
              transition: "none",
            }}
            elevation={0}
            onClick={(e: any) => {
              e.stopPropagation();
              setVisiblePageIndexs(
                visiblePageIndexs.filter((x) => x !== index)
              );
            }}
          >
            <VscChromeClose />
          </Box>
        </Button>
      </Box>
    );
  }

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        display: "inline-block",
        overflowX: "auto",
        overflowY: "hidden",
        whiteSpace: "nowrap",
        backgroundColor: theme.palette.mode === "dark" ? "#16161e" : "#cbccd1",
        "&::-webkit-scrollbar": {
          height: "3px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor:
            theme.palette.mode === "dark" ? "#535353" : "#8c8c8c",
        },
        "&::-webkit-darkScrollbar-thumb": {
          backgroundColor:
            theme.palette.mode === "dark" ? "#ffffff" : "#8c8c8c",
        },
      }}
    >
      {filteredPages.map(({ index, name, route }) =>
        renderPageButton(index, name, route)
      )}
    </Container>
  );
}
