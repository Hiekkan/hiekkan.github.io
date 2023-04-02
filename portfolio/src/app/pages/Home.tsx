import {
    Box,
    Grid,
    IconButton,
    Link,
    Stack,
    Tooltip,
    Typography,
  } from "@mui/material";
  import React, { useEffect } from "react";
  import { links } from "./Links";
  
  interface Props {
    setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
  }
  
  export default function Home({ setSelectedIndex }: Props) {
    useEffect(() => {
      setSelectedIndex(-1);
    }, [setSelectedIndex]);
  
    return (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: `calc(100vh - 20px - 33px)` }}
      >
        <Grid item xs={3}>
          <Stack direction={{ xs: "column", sm: "row-reverse" }} spacing={2}>
            <Box display="flex" sx={{ justifyContent: "center" }}>
              {/*<img src={logo} width="100px" alt="logo" />*/}
            </Box>
            <Box>
              <Grid
                display="flex"
                justifyContent={{ xs: "center", sm: "flex-start" }}
              >
                <Typography variant="h3">Dunno</Typography>
              </Grid>
              <Grid
                display="flex"
                justifyContent={{ xs: "center", sm: "flex-start" }}
              >
                <Typography variant="subtitle1" gutterBottom>
                    Hehe
                </Typography>
              </Grid>
              <Grid
                display="flex"
                justifyContent={{ xs: "center", sm: "flex-start" }}
              >
                <Stack direction="row" spacing={0.4}>
                  {links.map((link) => (
                    <Tooltip key={link.index} title={link.title} arrow>
                      <Link
                        target="_blank"
                        href={link.href}
                        underline="none"
                        color="inherit"
                      >
                        <IconButton color="inherit">{link.icon}</IconButton>
                      </Link>
                    </Tooltip>
                  ))}
                </Stack>
              </Grid>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    );
  }
  