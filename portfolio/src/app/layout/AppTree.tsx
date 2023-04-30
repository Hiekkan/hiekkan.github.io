import * as React from "react";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { VscMarkdown } from "react-icons/vsc";
import { useTheme } from "@mui/system";

interface Page {
  index: number;
  name: string;
  route: string;
}

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

export default function AppTree({
  pages,
  selectedIndex,
  setSelectedIndex,
  currentComponent,
  setCurrentComponent,
  visiblePageIndexs,
  setVisiblePageIndexs,
}: Props) {
  const navigate = useNavigate();
  let { pathname } = useLocation();
  const theme = useTheme();

  const page: Page = pages.find((x) => x.route === pathname)!;

  useEffect(() => {
    if (page) {
      setSelectedIndex(page.index);
    }
  }, [page, setSelectedIndex]);

  function renderTreeItemBgColor(index: number) {
    if (theme.palette.mode === "dark") {
      return selectedIndex === index ? "#202330" : "#16161e";
    } else {
      return selectedIndex === index ? "#d5d6db" : "#cbccd1"
    }
  }

  function renderTreeItemColor(index: number) {
    if (theme.palette.mode === "dark") {
      return selectedIndex === index && currentComponent === "tree" ? "#8388a8" : "#44475c";
    } else {
      return selectedIndex === index ? "#4c505e" : "#828594";
    }
  }

  return (
    <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ 
        minWidth: 220, 
        fontSize: "0.9rem",
        ".MuiTreeItem-label": {
          fontSize: "0.9rem",
        },
        "&& .Mui-expanded": {
          fontSize: "0.9rem",
        },
        "&& .MuiTreeItem-content .MuiTreeItem-label": {
          padding: 0,
          fontSize: "0.9rem",
        },
      }}
      defaultExpanded={["-1"]}
    >
      <TreeItem
        nodeId="-1"
        label="HOME"
        color={theme.palette.mode === "dark" ? "#16161e" : "#cbccd1"}
        onClick={() => {
          navigate("/");
          setSelectedIndex(-1);
        }}
        sx={{
          color: theme.palette.mode === "dark" ? "white" : "#4c505e",
          "&:hover": {
            backgroundColor: theme.palette.mode === "dark" ? "#16161e" : "#cbccd1",
          },
          "&& .MuiTreeItem-content .MuiTreeItem-label": {
            padding: 0,
            fontSize: "0.9rem",
          },
          "&& .Mui-selected": {
            backgroundColor: renderTreeItemBgColor(-1),
            fontSize: "0.9rem",
          },
          "&& .Mui-focused": {
            backgroundColor: renderTreeItemBgColor(-1),
            fontSize: "0.9rem",
          },
          ".MuiTreeItem-label": {
            fontSize: "0.9rem",
          },
          "&& .Mui-expanded": {
            fontSize: "0.9rem",
          },
        }}
      >
        {pages.map(({ index, name, route }) => (
          <TreeItem
            key={index}
            nodeId={index.toString()}
            label={name}
            sx={{
              color: renderTreeItemColor(index),
              backgroundColor: renderTreeItemBgColor(index),
              "&:hover": {
                background: theme.palette.mode === "dark" ? "#13131a" : "#cbccd1",
              },
              "&& .Mui-selected": {
                backgroundColor: renderTreeItemBgColor(index),
                color: renderTreeItemColor(index),
              },
              "&& .MuiTreeItem-content .MuiTreeItem-label": {
                fontSize: "0.9rem",
                padding: 0,
              },
              ".MuiTreeItem-label": {
                fontSize: "0.9rem",
              },
              "&& .Mui-focused": {
                backgroundColor: renderTreeItemBgColor(-1),
                fontSize: "0.9rem",
              },
              "&& .Mui-expanded": {
                fontSize: "0.9rem",
              },
            }}
            icon={<VscMarkdown color="#6997d5" />}
            onClick={() => {
              if (!visiblePageIndexs.includes(index)) {
                const newIndexs = [...visiblePageIndexs, index];
                setVisiblePageIndexs(newIndexs);
              }
              navigate(route);
              setSelectedIndex(index);
              setCurrentComponent("tree");
            }}
          />
        ))}
      </TreeItem>
    </TreeView>
  );
}
