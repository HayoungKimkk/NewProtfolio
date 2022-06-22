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
  <Layout title="Survival and Escape">
    <Container>
      <Title>
        VR을 활용한 피란민 체험 게임 &#34;Survival and Escape&#34; <Badge>2022</Badge>
      </Title>
      <P>
        최근 사회적으로 이슈가 되고 있는 전쟁 상황에서 피란민들이 느끼는 고통을 체험할 수 있는 VR 체험형 게임을 제작함. Unity를 이용해 게임을 제작하였으며 타겟 디바이스는 Meta Quest 2 를 이용하였음.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows, Meta Queat 2</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Unity 2022(Game Engine), C#(Logic)</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/vrgame_eyecatch.png" alt="VrGameTitleImage" />

      <ul>
        <li>유니티를 애용해 3DVR 게임을 구현하는게 프로젝트의 목표.</li>
        <li>VR이기에 가능한 접근법들을 위해 팀원들과 2주(80시간)이상의 브레인스토밍을 진행함.</li>
        <li>개발을 위해 필요했던 영역은 그래픽, 인게임 로직이 있었다.</li>
        <li>개발인원이 적었기 때문에 그래픽은 에셋을 구매하여 시간을 절약하기로 하고 로직적인 부분을 구현하기 위해 노력함.</li>
        <li>내가 맡은 부분은 인벤토리 시스템과 아이템의 로직 구현.</li>
        <li>유니티에서 이러한 부분을 구현하는데 있어 자주 쓰이는 기능인 Scriptable Object(이후 SO라 부름)를 이해하고 구현하는데 상당히 많은 시간을 소모함.</li>
        <li>이는 기존 프로그래밍에서 OOP와 같은 방식(함수형 프로그래밍, 리액트의 컴포넌트 등)이라고 할 수 있음.</li>
        <li>따라서 게임의 구성 요소로써 아이템과 인벤토리와 같은 시스템이 가져야 할 기능들을 구현하고 유기적으로 연결되게 하는 것이 필수적이었음.</li>
        <li>이를 위해 서로 다른 오브젝트에서 상호작용할 수 있도록 데이터베이스 SO를 만들어 각 오브젝트의 ID값만으로 각각 아이템의 속성값을 참조할 수 있도록 하였음.</li>
        <li>아이템과 인벤토리 시스템을 구현한 뒤 이를 UI에서 사용할 수 있도록 사용자 시점에 맞추어 Vector값이 조정되는 UI를 제작하였음.</li>
        
      </ul>

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
