import React from "react";
import {
  Container,
  Paper,
  Title,
  Text,
  Button,
  Group,
  Stack,
  Center,
} from "@mantine/core";
import { useRouter } from "next/router";

const Unauthorized: React.FC = () => {
  const router = useRouter();
  return (
    <Container size={460} my={40}>
      <Paper shadow="md" p="xl" radius="md" withBorder>
        <Stack align="center">
          <Title order={2}>401 - Unauthorized</Title>
          <Text c="dimmed" ta={Center}>
            Please contact your psychologist for access.
          </Text>
          <Group mt="md">
            <Button onClick={() => router.replace("/")}>Login</Button>
          </Group>
        </Stack>
      </Paper>
    </Container>
  );
};

export default Unauthorized;
