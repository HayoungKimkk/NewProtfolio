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
        IoT 기반 차량공유 서비스 &#34차키줘바&#34 <Badge>2022</Badge>
      </Title>
      <P>
        IoT디바이스를 활용해 개인차량을 공유하는 서비스인 차키줘바의 프로토타입을 제작하였습니다. 온라인 서비스 부분은 구현 완료하였으나, RPI를 이용해 차량을 제어하는 부분은 현존하는 차량의 OBD-2 커넥터를 이용한 통신을 구현할 시간이 부족하여 구현하지 못함.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web 서비스</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python(Arduino), Javascript(Server)</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/temp_eyecatch.png" alt="temp" />

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
