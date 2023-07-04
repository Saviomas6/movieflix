import { Container, StyledLink } from "../../styles/sharedStyles";
import {
  FooterContainer,
  FooterIcon,
  FooterMainContainer,
  FooterNavTab,
  FooterNavTabs,
} from "./Footer.style";
import { FiTrendingUp } from "react-icons/fi";
import { BiCameraMovie } from "react-icons/bi";
import { MdMonitor } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const navTab = [
    {
      logo: <FiTrendingUp />,
      label: "Trending",
      link: "/",
    },
    {
      logo: <BiCameraMovie />,
      label: "Movies",
      link: "/movies",
    },
    {
      logo: <MdMonitor />,
      label: "TV Series",
      link: "/tvseries",
    },
    {
      logo: <AiOutlineSearch />,
      label: "Search",
      link: "/search",
    },
  ];
  const { pathname } = useLocation();

  return (
    <FooterMainContainer>
      <Container width="90%">
        <FooterContainer>
          {navTab.map((tab) => (
            <StyledLink key={tab?.label} to={tab?.link}>
              <FooterNavTabs>
                <FooterIcon pathname={pathname === tab?.link}>
                  {tab?.logo}
                </FooterIcon>
                <FooterNavTab pathname={pathname === tab?.link}>
                  {tab?.label}
                </FooterNavTab>
              </FooterNavTabs>
            </StyledLink>
          ))}
        </FooterContainer>
      </Container>
    </FooterMainContainer>
  );
};

export default Footer;
