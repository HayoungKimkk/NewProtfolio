import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbTemp from '../public/images/contents/temp_eyecatch.png'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="TBD"
            thumbnail={thumbTemp}
            href=""
          />
          <GridItem
            title="TBD"
            thumbnail={thumbTemp}
            href=""
          />
          <GridItem
            title="TBD"
            thumbnail={thumbTemp}
            href=""
          />
          <GridItem
            title="TBD"
            thumbnail={thumbTemp}
            href=""
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="TBD"
            thumbnail={thumbTemp}
            href=""
          />
          <GridItem
            title="TBD"
            thumbnail={thumbTemp}
            href=""
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="TBD"
            thumbnail={thumbTemp}
            href=""
          />
          <GridItem
            title="TBD"
            thumbnail={thumbTemp}
            href=""
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
