import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="IoTCity">
    <Container>
      <Title>
        VR을 활용한 피란민 체험 게임 &#34Survival and Escape&#34 <Badge>2022</Badge>
      </Title>
      <P>
        최근 사회적으로 이슈가 되고 있는 전쟁 상황에서 피란민들이 느끼는 고통을 체험할 수 있는 VR 체험형 게임을 제작함. Unity를 이용해 게임을 제작하였으며 타겟 디바이스는 Meta Quest 2 를 이용하였음.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.ismartcity.co.kr/default/mp3/mp3_sub1.php?sub=01/">
          https://www.ismartcity.co.kr/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C(Firmware), Python(Server)</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/temp_eyecatch.png" alt="temp" />

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
