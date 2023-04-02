import { Button, Box, Paper } from "@mui/material";
import React from "react";
import { VscMarkdown, VscChromeClose } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/system";

interface Props {
  pages: {
    index: number;
    name: string;
    route: string;
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

  function renderButtonBgColor(index: number) {
    return selectedIndex === index ? "#1e1e1e" : "#2d2d2d";
  }

  function renderButtonColor(index: number) {
    return selectedIndex === index ? "#8388a8" : "#44475c";
  }

  function renderCloseButtonBgColor(index: number) {
    return selectedIndex === index ? "#1a1b26" : "#2d2d2d";
  }

  function renderCloseButtonColor(index: number) {
    return selectedIndex === index ? "#white" : "#1a1b26";
  }

  function renderCloseButtonHoverBgColor(index: number) {
    return selectedIndex === index ? "#333c43" : "#333c43";
  }

  function renderCloseButtonHoverColor(index: number) {
      return selectedIndex !== index ? "#817d7a" : "#white";
  }

  function renderBorderButton(index: number) {
    return selectedIndex === index ? "5px solid #3d59a1" : "none";
  }

  function renderPageButton(index: number, name: string, route: string) {
    return (
      <Box
        key={index}
        sx={{
          display: "inline-block",
          borderBottom: renderBorderButton(index), 
          alignItems: "center",
          alignContent: "center"
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
            borderRadius: 0,
            px: 2,
            textTransform: "none",
            backgroundColor: "#1a1b26",
            color: renderButtonColor(index),
            fontFamily: "Segoe WPC,Segoe UI,sans-serif",
            "&.MuiButtonBase-root:hover": {
              color: "#8388a8",
              backgroundColor: "#1a1b26"
            },
            transition: "none",
          }}
        >
          <Box
            sx={{ color: "#6997d5", width: 20, height: 20, mr: 0.4, ml: -1}}
          >
            <VscMarkdown />
          </Box>
          {name}
          <Box
            component={Paper}
            sx={{
              ml: 1,
              mr: -1,
              backgroundColor: "#1a1b26",
              color: "white",
              "&.MuiPaper-root:hover": {
                bgcolor: "#202330",
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
        backgroundColor: "#252527",
        "&::-webkit-scrollbar": {
          height: "3px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor:
            "#535353",
        },
        "&::-webkit-darkScrollbar-thumb": {
          backgroundColor:
            "#ffffff",
        },
      }}
    >
      {pages.map(({ index, name, route }) =>
        renderPageButton(index, name, route)
      )}
    </Container>
  );
}
