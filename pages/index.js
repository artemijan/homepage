import NextLink from 'next/link'
import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub, IoLogoInstagram } from 'react-icons/io5'
import Greeting from '../components/greeting'

const Home = () => (
  <Layout>
    <Container>
      <Greeting />
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Preamble
        </Heading>
        <Paragraph>
          I&apos;m software engineer and full-stack developer based in Ukraine.
          I really like to solve technical problems and learn something new.
          Software isn&apos;t magic, each behaviour or misbehaviour is designed
          by the engineer, intentionally or not!
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/skills">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Tech Skills
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1989</BioYear>
          Born in Mykolaiv Oblast, 57552, Ukraine.
        </BioSection>
        <BioSection>
          <BioYear>2006</BioYear>
          Completed High school education.
        </BioSection>
        <BioSection>
          <BioYear>2011</BioYear>
          Completed Master of Science in Teaching Physics, Astronomy in Kherson
          State University
        </BioSection>
        <BioSection>
          <BioYear>2013</BioYear>
          Completed Master of Software Engineering in Kherson State University
        </BioSection>
        <BioSection>
          <BioYear>2013 to 2019</BioYear>
          Work as a software engineer at Logicify
        </BioSection>
        <BioSection>
          <BioYear>2019 to present</BioYear>
          Work as a software engineer at DataArt
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Software engineering, Music, Watching films, Sports
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/artemijan" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @artemijan
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.instagram.com/a_r_t_e_m_i_4/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @a_r_t_e_m_i_4
              </Button>
            </Link>
          </ListItem>
        </List>
        <Box align="center" my={4}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
