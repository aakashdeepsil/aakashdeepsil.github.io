import styled from 'styled-components';
import Container from './Container';
import Grid from './Grid';
import Link from './Link';
import Text from './Text';
import React from 'react';
import { SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si';
import { MdMail } from 'react-icons/md';

const StyledFooter = styled.footer`
  width: 100%;
  height: 100px;
  padding: 60px 20px 100px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 0;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-bottom: 30px;
  margin-top: 20px;
  justify-content: center;
`;

const links = [
  {
    url: 'https://github.com/aakashdeepsil',
    icon: SiGithub,
  },
  {
    url: 'https://twitter.com/aakashdeepsil',
    icon: SiTwitter,
  },
  {
    url: 'mailto:aakashdeep.work@gmail.com',
    icon: MdMail,
  },
  // {
  //   url: 'https://www.malt.fr/profile/antoineordonez',
  //   icon: Malt,
  // },
  {
    url: 'https://www.linkedin.com/in/aakashdeepsil/',
    icon: SiLinkedin,
  },
];

const Footer = (): JSX.Element => (
  <StyledFooter>
    <Container paddingY="25px">
      <Grid gridGap="30px">
        <Link href="/">Home</Link>
        <Link href="/portfolio/about">About</Link>
        <Link href="/portfolio/projects">Projects</Link>
        <Link href="mailto:aakashdeep.work@gmail.com">Contact</Link>
      </Grid>
    </Container>
    <FooterGrid>
      {links.map(({ url, icon: Icon }) => (
        <Link key={url} target="_blank" opacity={0.7} href={url}>
          <Icon size={22} />
        </Link>
      ))}
    </FooterGrid>
    <Text margin={0} fontSize="0.9rem" color="rgba(0, 0, 0, 0.7)">
      © Aakashdeep Sil {new Date().getFullYear()}
    </Text>
  </StyledFooter>
);

export default Footer;
