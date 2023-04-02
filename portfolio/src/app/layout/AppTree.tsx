import * as React from "react";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { VscMarkdown } from "react-icons/vsc";

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

  const page: Page = pages.find((x) => x.route === pathname)!;

  useEffect(() => {
    if (page) {
      setSelectedIndex(page.index);
    }
  }, [page, setSelectedIndex]);

  function renderTreeItemBgColor(index: number) {
      return selectedIndex === index ? "#202330" : "#1a1b26";
  }

  function renderTreeItemColor(index: number) {
      return selectedIndex === index && currentComponent === "tree"
        ? "#8388a8"
        : "#44475c";
  }

  return (
    <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ minWidth: 220 }}
      defaultExpanded={["-1"]}
    >
      <TreeItem
        nodeId="-1"
        label="HOME"
        color="#1a1b26"
        onClick={() => {
          navigate("/");
          setSelectedIndex(-1);
        }}
        sx={{
          color: "white",
          fontFamily: "Segoe WPC,Segoe UI,sans-serif",
          "&:hover": {
            backgroundColor: "#1a1b26",
          },
          "&& .MuiTreeItem-content": {
            padding: 0,
            fontFamily: "Segoe WPC,Segoe UI,sans-serif !important"
          },
          "&& .Mui-selected": {
            backgroundColor: renderTreeItemBgColor(-1),
            fontFamily: "Segoe WPC,Segoe UI,sans-serif"
          },
          ".MuiTreeItem-label": {
            fontSize: "0.9rem",
            fontFamily: "Segoe WPC,Segoe UI,sans-serif !important"
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
              fontFamily: "Segoe WPC,Segoe UI,sans-serif",
              backgroundColor: renderTreeItemBgColor(index),
              ".MuiTreeItem-label": {
                fontFamily: "Segoe WPC,Segoe UI,sans-serif"
              },
              "&:hover": {
                background: "#13131a",
              },
              "&& .Mui-selected": {
                backgroundColor: renderTreeItemBgColor(index),
                color: renderTreeItemColor(index),
                fontFamily: "Segoe WPC,Segoe UI,sans-serif"
              },
              "&& .MuiTreeItem-content": {
                padding: 0,
                fontFamily: "Segoe WPC,Segoe UI,sans-serif"
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
