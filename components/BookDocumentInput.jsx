import { React } from "react";
import {ISBNLookup} from './ISBNLookup.jsx'
import { Box, Button, Card, Stack, Text, TextInput } from "@sanity/ui";
import { useCallback, useState } from "react";
import { set } from "sanity";

export function BookDocumentInput(props) {
  const { onChange, renderDefault } = props;

  const [title, setTitle] = useState("");

  const handleImport = useCallback(() => {
    onChange([set(title, ["title"])]);
    setTitle("");
  }, [title]);

  return (
    <Stack space={5}>
      <Card border padding={4} radius={3} tone="primary">
        <Text as="h2" weight="bold">
          Import book details from elsewhere
        </Text>

        <Box marginTop={4}>
          <Text htmlFor="book-title">Title</Text>
          <TextInput
          id=""
            onChange={(event) => setTitle(event.currentTarget.value)}
            value={title}
          />
        </Box>

        <Stack marginTop={4}>
          <Button onClick={handleImport} tone="primary" text="Import" />
        </Stack>
      </Card>

      <ISBNLookup ISBNLookup onChange={(event) => console.log('change happened', event)}></ISBNLookup>

      {renderDefault(props)}
    </Stack>
  );
}
