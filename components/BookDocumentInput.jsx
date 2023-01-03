import { React, useCallback, useState } from "react";
import { ISBNLookup } from './ISBNLookup.jsx'
import { Button, Card, Inline, Stack } from "@sanity/ui";
import { set } from "sanity";

export function BookDocumentInput(props) {
  const { onChange, renderDefault } = props;

  const [bookDetails, setBookDetails] = useState(undefined);

  const handleImport = useCallback(() => {
    console.log(bookDetails)
    onChange([set(bookDetails.title, ["title"])]);
    onChange([set(bookDetails.authors, ["authors"])]);
    onChange([set(bookDetails.year, ["year"])]);
    onChange([set(bookDetails.pages, ["pages"])]);
    onChange([set(bookDetails.publishers, ["publishers"])]);
    onChange([set(true, ["enterManually"])])
  });

  return (
    <Stack space={5}>
      {props?.value?.title ? false : <ISBNLookup bookDetails={bookDetails} setBookDetails={setBookDetails}></ISBNLookup>}
      <Card padding={2} style={{'display': bookDetails != undefined ? 'block' : 'none', textAlign: 'center'}}>
        <Inline space={[2]}>
          <Button
            fontSize={[2]}
            mode="ghost"
            tone="brand"
            padding={[3, 3, 4]}
            text="Use for this book"
            onClick={handleImport}
          />
        </Inline>
      </Card>
      {renderDefault(props)}
    </Stack>
  );
}
