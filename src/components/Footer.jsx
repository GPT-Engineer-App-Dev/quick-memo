import { Box, Text, Link } from '@chakra-ui/react';

const Footer = () => (
  <Box as="footer" width="full" p={4} bg="brand.700" color="white" textAlign="center">
    <Text fontSize="sm">
      © {new Date().getFullYear()} Your Company Name. All rights reserved.
    </Text>
    <Link href="/privacy-policy" color="brand.200" fontSize="sm">
      Privacy Policy
    </Link>
  </Box>
);

export default Footer;