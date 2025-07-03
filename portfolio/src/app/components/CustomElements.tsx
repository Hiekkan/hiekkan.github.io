import { useRef } from "react";
import {
  Box,
  Divider,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { motion } from "framer-motion";
import ImageGalleryLib from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 2, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 2 },
};

export function HeroSection({
  title,
  subtitle,
  description,
  metadata,
}: {
  title: string;
  subtitle?: string;
  description: string;
  metadata: { label: string; value: string }[];
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      variants={fadeInUp}
    >
      <Box sx={{ mb: 6, mt: 6 }}>
        <Typography
          variant="h3"
          fontWeight="bold"
          gutterBottom
          sx={{
            fontFamily: "'Poppins', sans-serif",
            overflowWrap: "break-word",
            wordBreak: "break-word",
            hyphens: "auto",
          }}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography
            variant="h5"
            fontWeight="bold"
            gutterBottom
            sx={{
              fontFamily: "'Poppins', sans-serif",
              overflowWrap: "break-word",
              wordBreak: "break-word",
              hyphens: "auto",
            }}
          >
            {subtitle}
          </Typography>
        )}
        <Divider sx={{ my: 3 }} />
        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "'JetBrains Mono', monospace",
                overflowWrap: "break-word",
                wordBreak: "break-word",
                hyphens: "auto",
              }}
            >
              {description}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            {metadata.map((item, index) => (
              <Box key={index} sx={{ mb: 3 }}>
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  sx={{
                    mb: 0.5,
                    fontFamily: "'JetBrains Mono', monospace",
                    overflowWrap: "break-word",
                    wordBreak: "break-word",
                    hyphens: "auto",
                  }}
                >
                  {item.label}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "'JetBrains Mono', monospace",
                    overflowWrap: "break-word",
                    wordBreak: "break-word",
                    hyphens: "auto",
                  }}
                >
                  {item.value}
                </Typography>
                {index < metadata.length - 1 && <Divider sx={{ mt: 2 }} />}
              </Box>
            ))}
          </Grid>
        </Grid>
        <Divider sx={{ my: 3 }} />
      </Box>
    </motion.div>
  );
}

export function ImageGallery({
  images,
  description,
}: {
  images: { src: string; alt: string }[];
  description: string;
}) {
  const galleryItems = images.map((img) => ({
    original: img.src,
    thumbnail: img.src,
    originalAlt: img.alt,
    thumbnailAlt: img.alt,
  }));

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      variants={fadeIn}
    >
      <Box sx={{ mt: 6, mb: 6 }}>
        <Box sx={{ mb: 3, width: "100%", overflowX: "hidden" }}>
          <ImageGalleryLib
            items={galleryItems}
            showPlayButton={false}
            showFullscreenButton={false}
            showThumbnails={false}
            showBullets={true}
          />
        </Box>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "'JetBrains Mono', monospace",
            mt: 3,
            mb: 2,
            px: 1,
            overflowWrap: "break-word",
            wordBreak: "break-word",
            hyphens: "auto",
          }}
        >
          {description}
        </Typography>
        <Divider sx={{ my: 3 }} />
      </Box>
    </motion.div>
  );
}

export function ImageSection({
  image,
  description,
}: {
  image: { src: string; alt: string };
  description: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      variants={fadeIn}
    >
      <Box sx={{ mt: 6, mb: 6 }}>
        <Box sx={{ mb: 3, width: "100%", overflowX: "hidden" }}>
          <img
            src={image.src}
            alt={image.alt}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              display: "block",
            }}
          />
        </Box>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "'JetBrains Mono', monospace",
            mt: 3,
            mb: 2,
            px: 1,
            overflowWrap: "break-word",
            wordBreak: "break-word",
            hyphens: "auto",
          }}
        >
          {description}
        </Typography>
        <Divider sx={{ my: 3 }} />
      </Box>
    </motion.div>
  );
}

export function TextSection({
  title,
  body,
  bullets,
}: {
  title: string;
  body: string;
  bullets?: string[];
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      variants={fadeInUp}
    >
      <Box sx={{ my: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{
                fontFamily: "'Poppins', sans-serif",
                overflowWrap: "break-word",
                wordBreak: "break-word",
                hyphens: "auto",
              }}
            >
              {title}
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "'JetBrains Mono', monospace",
                whiteSpace: "pre-line",
                overflowWrap: "break-word",
                wordBreak: "break-word",
                hyphens: "auto",
              }}
            >
              {body}
            </Typography>
            {bullets && (
              <List>
                {bullets.map((item, index) => (
                  <ListItem key={index} disableGutters disablePadding>
                    <ListItemText
                      primary={
                        <Typography
                          variant="body1"
                          sx={{
                            fontFamily: "'JetBrains Mono', monospace",
                            overflowWrap: "break-word",
                            wordBreak: "break-word",
                            hyphens: "auto",
                          }}
                        >
                          • {item}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            )}
          </Grid>
        </Grid>
        <Divider sx={{ mt: 3 }} />
      </Box>
    </motion.div>
  );
}

export function QuoteSection({
  quote,
  author,
}: {
  quote: string;
  author?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      variants={fadeIn}
    >
      <Box sx={{ my: 6, px: 2 }}>
        <Box sx={{ borderLeft: 4, borderColor: "#3d59a1", pl: 3 }}>
          <Typography
            variant="body1"
            sx={{
              fontStyle: "italic",
              fontFamily: "'JetBrains Mono', monospace",
              overflowWrap: "break-word",
              wordBreak: "break-word",
              hyphens: "auto",
            }}
          >
            “{quote}”
          </Typography>
          {author && (
            <Typography
              variant="subtitle2"
              sx={{
                mt: 2,
                textAlign: "right",
                fontWeight: "bold",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              — {author}
            </Typography>
          )}
        </Box>
        <Divider sx={{ my: 3 }} />
      </Box>
    </motion.div>
  );
}

export function VideoSection({
  videoSrc,
  description,
}: {
  videoSrc: string;
  description: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleAnimationComplete = () => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        console.warn(
          "Video playback failed, possibly due to browser restrictions."
        );
      });
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      onAnimationComplete={handleAnimationComplete}
    >
      <Box sx={{ my: 6 }}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            paddingTop: "56.25%",
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <video
            ref={videoRef}
            src={videoSrc}
            muted
            loop
            controls
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </Box>

        <Typography
          variant="body1"
          sx={{
            fontFamily: "'JetBrains Mono', monospace",
            mt: 3,
            overflowWrap: "break-word",
            wordBreak: "break-word",
            hyphens: "auto",
          }}
        >
          {description}
        </Typography>

        <Divider sx={{ my: 3 }} />
      </Box>
    </motion.div>
  );
}

export function CallToActionSection({
  heading,
  text,
}: {
  heading: string;
  text: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Box
        sx={{
          my: 8,
          py: 6,
          px: 4,
          textAlign: "center",
          backgroundColor: "#2d2f3a",
          borderRadius: 2,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          sx={{
            fontFamily: "'Poppins', sans-serif",
            color: "white",
            overflowWrap: "break-word",
            wordBreak: "break-word",
            hyphens: "auto",
          }}
        >
          {heading}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "'JetBrains Mono', monospace",
            color: "#ccc",
            mb: 3,
            overflowWrap: "break-word",
            wordBreak: "break-word",
            hyphens: "auto",
          }}
        >
          {text}
        </Typography>
        <a
          href="https://www.linkedin.com/in/nora-jentzsch/"
          style={{ textDecoration: "none" }}
        >
          <Box
            component="button"
            sx={{
              px: 4,
              py: 1.5,
              fontSize: "1rem",
              fontFamily: "'Poppins', sans-serif",
              backgroundColor: "#3d59a1",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              "&:hover": { backgroundColor: "#597bd4" },
            }}
          >
            Auf LinkedIn kontaktieren
          </Box>
        </a>
      </Box>
    </motion.div>
  );
}
