import { Text, Box } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { LANGUAGE_VERSIONS } from "../constants/options";
const languages = Object.entries(LANGUAGE_VERSIONS);

function LanguageSelector({ language, onSelect }) {
  return (
    <Box ml={2} mb={4}>
      <Text mb={2} fontSize="large">
        Select Language:
      </Text>
      <Menu isLazy>
        <MenuButton as={Button}>{language}</MenuButton>
        <MenuList bg="#110c1b">
          {languages.map(([lang, version]) => (
            <MenuItem
              key={lang}
              onClick={() => onSelect(lang)}
              color={lang === language ? "blue.500" : ""}
              bg={lang === language ? "gray.900" : "transparent"}
              _hover={{
                color: "blue.400",
                bg: "gray.900",
              }}
            >
              {lang}
              &nbsp;
              <Text as="span" color="gray.600" fontSize="sm">
               ({version})
              </Text>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
}

export default LanguageSelector;
