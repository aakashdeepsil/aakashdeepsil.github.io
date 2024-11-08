import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { Container, Title, Button, Grid, Link, Text } from '@components';

const Home = (): JSX.Element => (
  <Container>
    <Grid gridTemplateColumns={['1fr', '1fr', '1fr 2fr']} gridGap="2rem" alignItems="center">
      <Container justifyContent="center" alignItems="center">
        <Image src="/img/profile.png" alt="A cool picture of Aakashdeep Sil" width={394} height={700} />
      </Container>
      <Container justifyContent="center" alignItems="center">
        <Title>Aakashdeep Sil</Title>
        <Title fontSize="2rem" color="rgba(0, 0, 0, 0.6)" fontWeight="500" as="h2">
          Ex - Member of Technical Staff @ Oracle
        </Title>
        <Title fontSize="1.5rem" color="rgba(0, 0, 0, 0.6)" fontWeight="500" as="h2">
          Python | Golang | Java | AWS | Azure | Kubernetes | Docker | High-Performance Computing | Jenkins | Terraform | Ansible | Linux | Slurm
        </Title>
        <Container maxWidth="700px" gridGap="2rem" marginTop="2rem" alignItems="center">
          <Text textAlign="justify">
            I&apos;m a Software Engineer with expertise in Cloud, DevOps, Site Reliability, Backend and Flutter Mobile Application Development.
          </Text>
          
          {/* Button */}
          <Link href="/about">
            <Button>More about me &rarr;</Button>
          </Link>
        </Container>
      </Container>
    </Grid>

    <Container alignItems="center" paddingY="4rem">
      <Container maxWidth="600px" alignItems="center" alignContent="center">
        <Title fontSize="3rem" as="h3">
          Get in touch
        </Title>
        <Text textAlign="center">
          I&apos;m actively looking for job opportunities in the United States. If you think I can be a good fit for your team, feel free to reach out to me.
        </Text>
        <Grid gridGap="2rem" marginTop="2rem" gridTemplateColumns={['1fr', 'repeat(1, 1fr)']} justifyItems="stretch" alignItems="center">
          <Link href="mailto:aakashdeep.work@gmail.com">
            <Button width="100%">
              <motion.span initial={{ display: 'inline-block' }} animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }} transition={{repeat: Infinity, repeatType: 'reverse', duration: 2.5}}>
                👋
              </motion.span>{' '}
              Say hello
            </Button>
          </Link>
        </Grid>
      </Container>
    </Container>
  </Container>
);

export default Home;