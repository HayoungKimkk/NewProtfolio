import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        유저경험을 최우선으로 생각하는 개발자 김하영입니다.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            김하영
          </Heading>
          <p>Embedded 개발자 ( Robotics / IoT / Bigdata )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/profile_photo.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          로봇공학을 전공하며 소프트웨어의 기본을 배웠습니다. 가장 관심있는 분야는
          IoT, Bigdata입니다. 본격적으로 개발을 배우기 시작한건 삼성 청년 SW
          아카데미에(SSAFY) 입과했을 뒤부터 입니다. 학부 과정에서는 로봇 제어와 관련된 
          MCU제어쪽을 배우고 졸업을 하게 됬습니다. 하지만 그 이후 SW 개발자로 취직을 
          하고 프로그래밍에 흥미를 느끼고 더 배워보고 싶다고 생각하게 되어 SSAFY에 지원
          하였고, 이를 통해 더욱 다양한 것을 할 수 있는 개발자가 되었습니다.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              진행한 프로젝트
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          이력
        </Heading>
        <BioSection>
          <BioYear>2020</BioYear>
          광운대학교 로봇학부 졸업
        </BioSection>
        <BioSection>
          <BioYear>2020-2021</BioYear>
          인천스마트시티 SW 개발직무 주임 연구원으로 근무<br/>
          &emsp;&emsp;&emsp;IoT 스마트시티 플랫폼 개발 참여
        </BioSection>
        <BioSection>
          <BioYear>2021-2022</BioYear>
          삼성 청년 SW 아카데미 교육 수료
        </BioSection>
        <BioSection>
          <BioYear>2022-지금</BioYear>
          개발 진행중
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          ☕커피, 🎧음악, 🖥︎신기술, 📽︎영화, 🌐IoT
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/HayoungKimkk" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                HayoungKim Github
              </Button>
            </Link>
          </ListItem>
        </List>

        {/* <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel (&gt;100k subs)
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid> */}

        {/* <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box> */}
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
