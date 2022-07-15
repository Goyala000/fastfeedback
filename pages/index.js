import Head from "next/head";
import { Button, Heading, Code, Text, Flex, Icon } from "@chakra-ui/react";
import { auth } from "firebase";

import { useAuth } from "@/lib/auth";
import DashboardShell from "@/components/DashboardShell";

export default function Home() {
  const auth = useAuth();
  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      h="100vh"
    >
      <Head>
        <title>Fast Feedback</title>
      </Head>

      <main>
        <DashboardShell />
        <Heading>Fast Feedback</Heading>
        <Text>
          Current User: <Code>{auth?.user?.email}</Code>
        </Text>

        {auth.user ? (
          <Button onClick={(e) => auth.signOut()}>Sign Out</Button>
        ) : (
          <Button mt={4} size="sm" onClick={(e) => auth.signInWithGitHub()}>
            Sign In
          </Button>
        )}
      </main>
    </Flex>
  );
}
