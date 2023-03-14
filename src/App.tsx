import { useState } from 'react'
import { Button, Image, Link, Text, Container, Heading, Stack } from '@chakra-ui/react';
import reactLogo from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
      <Stack spacing={{ base: '4', md: '5' }} align="center">
        <Stack direction='row'>
          <Link href="https://vitejs.dev" target="_blank">
            <Image src="/vite.svg" boxSize='100px' className="logo react" alt="Vite logo" />
          </Link>
          <Link href="https://reactjs.org" target="_blank">
            <Image src={reactLogo} boxSize='100px' className="logo react" alt="React logo" />
          </Link>
        </Stack>
        <Heading size={{ base: 'sm', md: 'md' }}>Vite + React Typescript</Heading>
        <Button size="lg" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </Stack>

      <Stack py={{ base: '3', md: '6' }} align="center">
        <Text>
          Edit <code>src/App.tsx</code> and save to test HMR
        </Text>
        <Text color="gray.500">
          Click on the Vite and React logos to learn more
        </Text>
      </Stack>
    </Container>
  )
}

export default App
