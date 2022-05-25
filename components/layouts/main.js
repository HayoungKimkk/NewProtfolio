import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDeskLoader from '../voxel-desk-loader'

const LazyVoxelDesk = dynamic(() => import('../voxel-desk'), {
  ssr: false,
  loading: () => <VoxelDeskLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Hayoung's portfolio" />
        <meta name="author" content="Hayoung Kim" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Hayoung Kim" />
        <meta name="og:title" content="Hayoung Kim" />
        <meta property="og:type" content="website" />
        <title>Hayoung Kim - PortFolio</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelDesk />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
