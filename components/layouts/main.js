import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Artem's homepage" />
        <meta name="author" content="Artem Fedorov" />
        <meta name="author" content="artem_fedorov" />
        <link rel="apple-touch-icon" href="/images/icons/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/images/icons/favicon.ico" type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@artemijan" />
        <meta name="twitter:creator" content="@artemijan" />
        <meta name="twitter:image" content="/images/contents/card.png" />
        <meta property="og:site_name" content="Artem Fedorov's website" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/contents/card.png" />
        <title>Fedorov Artem - Website</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
