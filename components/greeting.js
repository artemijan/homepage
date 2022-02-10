import { Box, Heading, Image, useColorModeValue } from '@chakra-ui/react'

const Greeting = () => (
  <div>
    <Box
      borderRadius="lg"
      mb={6}
      p={3}
      textAlign="center"
      display="flex"
      flexDirection="column"
      justifyContent={'center'}
      bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
    >
      Hello, I&apos;m a full-stack software engineer based in Ukraine!
      <Image
        maxWidth="35px"
        alignSelf={'center'}
        src="/images/ua.gif"
        alt="Ukraine Flag"
      />
    </Box>

    <Box display={{ md: 'flex' }}>
      <Box flexGrow={1}>
        <Heading as="h2" variant="page-title">
          Fedorov Artem
        </Heading>
        <p>Senior software engineer (Python/Javascript/Docker/AWS/DevOps)</p>
      </Box>
      <Box
        flexShrink={0}
        mt={{ base: 4, md: 0 }}
        ml={{ md: 6 }}
        textAlign="center"
      >
        <Image
          borderColor="whiteAlpha.800"
          borderWidth={2}
          borderStyle="solid"
          maxWidth="100px"
          display="inline-block"
          borderRadius="full"
          src="/images/artem.webp"
          alt="Profile image"
        />
      </Box>
    </Box>
  </div>
)

export default Greeting
