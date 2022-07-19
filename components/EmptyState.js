import { Box, Button, Heading, Text } from "@chakra-ui/react";
import AddSiteModal from "./AddSiteModal";

import DashboardShell from "./DashboardShell";

export default function EmptyState() {
  return (
    <Box width="100%" backgroundColor="white" borderRadius="8px" p={8}>
      <Heading size="md">You havent added any sites.</Heading>
      <Text>Welcome 👋 Let's get started.</Text>
      <AddSiteModal />
    </Box>
  );
}
