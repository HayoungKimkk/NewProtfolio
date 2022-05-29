import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbIotCity from '../public/images/works/IoTCity_eyecatch.jpg'
import thumbCarIot from '../public/images/works/CarIot_eyecatch.png'
import thumbNewsBig from '../public/images/works/newsbig_eyecatch.png'
import thumbVrGame from '../public/images/works/vrgame_eyecatch.png'
import thumbTemp from '../public/images/works/temp_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="ioTCity" title="스마트시티 IoT 플랫폼" thumbnail={thumbIotCity}>
            인천 스마트시티 전역에서 사용되는 IoT 플랫폼 개발 참여
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="carIot" title="차키줘바" thumbnail={thumbCarIot}>
            IoT를 활용한 개인차량 공유 서비스 플랫폼 개발
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="newsbig" title="신문물" thumbnail={thumbNewsBig}>
            빅데이터를 활용한 뉴스 분석, 추천 서비스 플랫폼 개발
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="vrgame" title="Survival and Escape" thumbnail={thumbVrGame}>
            VR기기를 이용해 전쟁 피란민들이 겪는 위험을 체험할 수 있는 게임 개발
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="TBD1" title="TBD1" thumbnail={thumbTemp}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem id="TBD2" title="TBD2" thumbnail={thumbTemp}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="TBD3" title="TBD3" thumbnail={thumbTemp}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
