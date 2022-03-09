import { Container, Badge } from '@chakra-ui/react'
import { Title, Meta } from '../../components/skills'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'

const Skill = () => (
  <Layout title="AWS">
    <Container>
      <Title>
        Software Development <Badge>JS/Python/Shell scripting</Badge>
      </Title>
      <Paragraph>
        Any software engineer should know in details how computer performs each instruction
        written by him. If something is unclear or hidden in abstraction from developer 
        then it may bring some issues later. Tha&apos;s why It&apos;s important to understand
        technology or language you are writing code in.
      </Paragraph>
      <Meta>FE experience</Meta>
      <Paragraph>
        I was working on a LMS (learning management system) project for our client in US. We 
        were writing SPA (single page application) using angular 1. I&apos;m not sure this 
        framework is relevant novadays, but it&apos;s good experience for FE developer to learn
        about different approaches used in angular 1 and angular 2.
      </Paragraph>
      <Paragraph>
        I don&apos;t have any experience with other than angular frameworks (except of react, 
        but react is not a framework), but a framework is just a tool for me to create large 
        and scalable apps, so it&apos;s not an issue to learn something new.
      </Paragraph>
      <Meta>BE experience</Meta>
      <Paragraph>
        TBD
      </Paragraph>
    </Container>
  </Layout>
)

export default Skill
