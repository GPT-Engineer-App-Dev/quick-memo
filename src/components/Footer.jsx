import { Box, Text, Link } from '@chakra-ui/react';

const Footer = () => (
  <Box as="footer" p={4} bg="gray.100" textAlign="center">
    <Text fontSize="sm">
      © 2023 NoteApp, Inc. All rights reserved.
    </Text>
    <Link href="/privacy-policy" color="teal.500" fontSize="sm">
      Privacy Policy
    </Link>
  </Box>
);

export default Footer;