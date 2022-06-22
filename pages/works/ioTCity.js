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
      <ul>
        <li>인천스마트시티 사내에서 이용하는 스마트시티 관제용 프로그램인 IoT 플랫폼의 고도화에 참여함</li>
        <li>내가 개발에 참여한 파트는 각종 IoT 장비들로부터 플랫폼으로 전송하는 정보들의 전처리 서버 개발</li>
        <li>플랫폼으로 들어와야하는 Payload는 특정한 JSON타입으로 정해져 있는데 장비가 다양하다보니 Payload가 각기 달라서 이를 처리하기 힘들었음</li>
        <li>이를 해결하기 위해 다양한 종류의 장비로부터 데이터를 수집하고 이를 플랫폼에 재전송하는 서버를 개발할 필요성이 있었음</li>
        <li>이를 위해 Python을 이용해 데이터를 수집하는 서버를 개발함</li>
        <li>Python을 선택한 이유는 개발기간이 짧아 적은 코드로 빠르게 개발할 필요가 있었고 문자열을 다루는데 있어 Python이 더 잘 맞았다고 생각했기 때문</li>
        <li>또한 이 과정에서 기존에 회사에서 사용하던 IoT 장비가 보내는 Payload가 보내는 정보량이 부족했음</li>
        <li>해당 IoT 장비가 내가 개발해본적 있는 ATMEGA의 MCU였기 때문에 직접 Firmware를 수정하여 서버에 보고하는 정보를 추가하고, 기존에 Event Driven 방식으로 보고가 이루어지던 것을 Time Driven하게도 보고가 이루어지도록 변경하였음</li>
        <li>결과적으로 5종류 이상, 100개 이상의 장비를 성공적으로 실서비스에 연동할 수 있었으며 이후 진행된 외부감리에서 미흡사항 없이 감리를 마무리함</li>
      </ul>

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
