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
        인천스마트시티 IoT 플랫폼 <Badge>2020~2021</Badge>
      </Title>
      <P>
        인천광역시 영종, 청라, 송도에서 사용되는 시스템 중 데이터 수집보드 펌웨어 개발과 데이터 수집서버 개발에 참여하였습니다.
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
