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
          <Box sx={{ px: { xs: 2 } }}>
            <Grid
              display="flex"
              justifyContent="flex-start"
              sx={{ mb: { xs: 0.5, md: 1 } }}
            >
              <Typography
                variant="h1"
                fontWeight={{ xs: "bold", sm: "bold" }}
                sx={{ fontSize: { xs: "2rem", md: "3.5rem" } }}
              >
                Nora Jentzsch
              </Typography>
            </Grid>
            <Grid
              display="flex"
              justifyContent="flex-start"
              sx={{ mb: { xs: 0.5, md: 1 } }}
            >
              <Typography
                variant="h4"
                gutterBottom={false}
                sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }}
              >
                A passionate frontend developer & UI/UX designer
              </Typography>
            </Grid>
            <Grid
              display="flex"
              justifyContent="flex-start"
              sx={{ mb: { xs: 1, md: 2 } }}
            >
              <Typography
                variant="h5"
                gutterBottom={false}
                sx={{ fontSize: { xs: "0.9rem", md: "1.25rem" } }}
              >
                From front to back all over the fullstack
              </Typography>
            </Grid>
            <Grid display="flex" justifyContent="flex-start">
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
