import { React } from "react";
import { Card, Inline, Button, Text, Grid, Stack } from "@sanity/ui";
import { commaSeparate } from "./utilities/commaSeparate.js";

function BookPreview(props) {
  if (props.book) {
    return (
      <>
        <Grid columns={2}>
          <Stack space={4} as="dl">
            <Stack space={2}>
              <Text as="dt" size={2} weight="semibold">Title</Text>
              <Text as="dd" size={3}>{props.book.title}{props.book.subtitle?': ' + props.book.subtitle : ''}</Text>
            </Stack>
            <Stack space={2}>
              <Text as="dt" size={2} weight="semibold">Author(s)</Text>
              <Text as="dd" size={3}>{props.book.authors?.map(commaSeparate)}</Text>
            </Stack>
            <Stack space={2}>
              <Text as="dt" size={2} weight="semibold">Year</Text>
              <Text as="dd" size={3}>{props.book.year}</Text>
            </Stack>
            <Stack space={2}>
              <Text as="dt" size={2} weight="semibold">Publisher</Text>
              <Text as="dd" size={3}>{props.book.publisher?.map(commaSeparate)}</Text>
            </Stack>
            <Stack space={3}>
              <Text as="dt" size={2} weight="semibold">Pages</Text>
              <Text as="dd" size={3}>{props.book.pages}</Text>
            </Stack>
          </Stack>
          <Card tone="transparent" padding={2}>
            <img src={props.book.image} style={{maxWidth: `10em`}} alt={`cover of ${props.book.title}`} />
          </Card>
        </Grid>
        <Card padding={6} style={{textAlign: 'center'}}>
          <Inline space={[3, 3, 4]}>
            <Button
              fontSize={[2, 2, 3]}
              mode="ghost"
              padding={[3, 3, 4]}
              text="Looks good, create book!"
            />
          </Inline>
        </Card>
      </>
    )
  } 
  if (props.lookedUp && props.book == undefined) {
    return (<p>No books found!</p>)
  } 
}

export { BookPreview };