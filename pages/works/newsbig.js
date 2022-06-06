import {
  Container,
  Badge,
  List,
  ListItem,
} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Newsbig">
    <Container>
      <Title>
        빅데이터 뉴스분석 서비스 &#34;신문물&#34; <Badge>2022</Badge>
      </Title>
      <P>
        빅데이터 분석을 통해 유저가 원하는 뉴스를 추천해주는 서비스. Hardoop을 이용하여 Wordcount를 진행하였으며, 감정분석, 비중분석을 통해 각각의 기사가 가지고 있는 감정수치와 키워드를 추출하여 뉴스 추천에 사용하였음.
      </P>
      <List ml={4} my={4}>
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
