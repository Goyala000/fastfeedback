import Head from "next/head";
import {
  Button,
  Heading,
  Code,
  Text,
  Flex,
  Icon,
  Center,
} from "@chakra-ui/react";
import { GiFeatheredWing } from "react-icons/gi";
import { auth } from "firebase";

import { useAuth } from "@/lib/auth";
import DashboardShell from "@/components/DashboardShell";
import Link from "next/link";

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
        <Center mb={30}>
          <GiFeatheredWing size="44px" />
        </Center>

        {/* {auth.user ? (
          <Button onClick={(e) => auth.signOut()}>Sign Out</Button>
        ) : (
          <Button mt={4} size="sm" onClick={(e) => auth.signInWithGitHub()}>
            Sign In
          </Button>
        )} */}
        {auth.user ? (
          <Link href="/dashboard" passHref>
            <Button>View Dashboard</Button>
          </Link>
        ) : (
          <Button mt={4} size="sm" onClick={(e) => auth.signInWithGitHub()}>
            Sign In
          </Button>
        )}
      </main>
    </Flex>
  );
}
