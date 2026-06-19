import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const user = "norajentzsch";
const domain = "proton.me";
export const email = `${user}@${domain}`;

export const links = [
  {
    index: 0,
    title: "Find me on Github",
    href: "https://github.com/hiekkan",
    icon: <FaGithub />,
  },
  {
    index: 1,
    title: "Find me on LinkedIn",
    href: "https://www.linkedin.com/in/nora-jentzsch/",
    icon: <FaLinkedin />,
  },
  {
    index: 2,
    title: "Send me an Email",
    href: `mailto:${email}`,
    icon: <FaEnvelope />,
  },
];
