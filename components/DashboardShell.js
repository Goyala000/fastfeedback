import { Avatar, Box, Flex, Link, Icon, Button } from "@chakra-ui/react";
import { GiFeatheredWing } from "react-icons/gi";

import { useAuth } from "@/lib/auth";

export default function DashboardShell({ children }) {
  const auth = useAuth();

  const { user, signOut } = auth;

  return (
    <Box backgroundColor="gray.100" h="100vh">
      <Flex backgroundColor="white" mb={[8, 16]} w="full">
        <Flex
          alignItems="center"
          justifyContent="space-between"
          pt={4}
          pb={4}
          maxW="1250px"
          margin="0 auto"
          w="full"
          px={8}
          h="60px"
        >
          <Flex align="center">
            <Link mr={8}>
              <GiFeatheredWing size="24px" />
            </Link>

            <Link mr={4}>Sites</Link>

            <Link>Feedback</Link>
          </Flex>
          <Flex justifyContent="center" alignItems="center">
            {user && (
              <Button variant="ghost" mr={2} onClick={() => signOut()}>
                Log Out
              </Button>
            )}
            <Link>
              <Avatar size="sm" src={user?.photoURL} />
            </Link>
          </Flex>
        </Flex>
      </Flex>
      <Flex margin="0 auto" direction="column" maxW="1250px" px={[0, 8, 8]}>
        {children}
      </Flex>
    </Box>
  );
}
