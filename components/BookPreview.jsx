import { React } from "react";
import { Card, Inline, Button, Text, Grid, Stack } from "@sanity/ui";
import { commaSeparate } from "./utilities/commaSeparate.js";

function BookPreview({bookDetails: book, lookedUp}) {
  if (book) {
    return (
      <Card tone="primary" padding={4} radius={2}>
        <Grid columns={2}>
          <Stack space={4} as="dl">
            <Stack space={2}>
              <Text as="dt" size={2} weight="semibold">Title</Text>
              <Text as="dd" size={3}>{book.title}{book.subtitle?': ' + book.subtitle : ''}</Text>
            </Stack>
            <Stack space={2}>
              <Text as="dt" size={2} weight="semibold">Author(s)</Text>
              <Text as="dd" size={3}>{book.authors?.map(commaSeparate)}</Text>
            </Stack>
            <Stack space={2}>
              <Text as="dt" size={2} weight="semibold">Year</Text>
              <Text as="dd" size={3}>{book.year}</Text>
            </Stack>
            <Stack space={2}>
              <Text as="dt" size={2} weight="semibold">Publisher</Text>
              <Text as="dd" size={3}>{book.publishers?.map(commaSeparate)}</Text>
            </Stack>
            <Stack space={3}>
              <Text as="dt" size={2} weight="semibold">Pages</Text>
              <Text as="dd" size={3}>{book.pages}</Text>
            </Stack>
          </Stack>
          <Card padding={2} radius={2} style={{display: 'flex', placeContent: 'center', height: 'auto'}}>
            <img src={book.image} style={{maxWidth: `10em`}} alt={`cover of ${book.title}`} />
          </Card>
        </Grid>
      </Card>
    )
  } 
  if (lookedUp && book == undefined) {
    return (<p>No books found!</p>)
  } 
}

export { BookPreview };