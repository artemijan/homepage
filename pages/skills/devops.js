import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, Meta } from '../../components/skills'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Skill = () => (
  <Layout title="AWS">
    <Container>
      <Title>
        DevOps <Badge>AWS/Teamcity/Terraform</Badge>
      </Title>
      <P>
        I have deep knowledge in web development, so I do know how communication
        between browser and Web Application happens. Experience of configuring
        balancers, cloudfront, ecs (aws specific) services, network routing,
        helped me to look at web development from other than coding side. Most
        of my experience is related to <b>AWS</b>, but I&apos;m pretty fast at
        learning and really like to get familiar with new technologies. You can
        take a look at my DevOps skills in details below (the list is not full,
        only most important).
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>AWS</Meta>
          <span>
            I have experience with managing an infrastructure in aws via
            terraform and terragrunt. I was managing the following services in
            terraform: cognito, ecs services, elastic search (open search),
            balancer, security groups, kms, rds (databases), provisioning
            (terraform provisioning modules) database users.
          </span>
        </ListItem>
        <ListItem>
          <Meta>Operating systems</Meta>
          <span>
            I&apos;m mostly working with UNIX-like operating systems Linux/Mac OS.
            But also I have an experience with Windows (writing desktop
            application on Delphi). I have rich experience with writing shell
            scripts in bash/fish.
          </span>
        </ListItem>
        <ListItem>
          <Meta>Teamcity</Meta>
          <span>NodeJS, Electron, React Native</span>
        </ListItem>
        <ListItem>
          <Meta>Grafana</Meta>
          <span>NodeJS, Electron, React Native</span>
        </ListItem>
        <ListItem>
          <Meta>Graylog</Meta>
          <span>NodeJS, Electron, React Native</span>
        </ListItem>
        <ListItem>
          <Meta>K8s (kubernetes)</Meta>
          <span>
            I don&apos;t have an experience with this technology, but it&apos;s not an
            issue for me to learn it.
          </span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Skill
