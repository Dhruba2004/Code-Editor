import { Box } from "@chakra-ui/react";
import CodeEdiitor from "./components/CodeEdiitor";
function App() {
  return (
    <>
      <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
        <CodeEdiitor/>
      </Box>
    </>
  );
}

export default App;
