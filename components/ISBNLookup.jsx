import { React, useState } from "react";
import { Card, Stack, Text, TextInput, Button, Box } from "@sanity/ui";
import { SearchIcon } from "@sanity/icons";
import { BookPreview } from "./BookPreview.jsx"; 
import { set } from "sanity";

function ISBNLookup({setBookDetails, bookDetails, ...rest}) {
  const [isbn, setIsbn] = useState('');
  let [lookedUp, setLookedUp] = useState(false);

  function lookUpIsbn(e) {
    const fetchUrl = `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`;
    
    e.preventDefault();
    
    if (!isbn) return

    fetch(fetchUrl)
    .then((response) => response.json())
    .then((data) => {
      const book = data[Object.keys(data)[0]];
      console.log("book",book);
      const restructuredData = {
        title: book.title,
        subtitle: book.subtitle, 
        authors: Array.from(book.authors).map(author => author.name),
        year: book.publish_date?.slice(-4),
        image: book.cover?.large,
        pages: book.number_of_pages,
        publishers: Array.from(book.publishers).map(publisher => publisher.name)
      };
      setBookDetails(restructuredData);  
      setLookedUp(true);
      console.log('bookdetails success', bookDetails);
      return restructuredData || null
    }).catch((error) => {
      setLookedUp(true);
      setBookDetails(undefined);
      console.log(error);
    })
  }

  function handleChange(e) {
    setIsbn(e.target.value)
  }


  return (  
    <Stack space={5}>
      <Stack space={3}>
        <Text as="label" htmlFor="isbnNo" size={2} weight="semibold">ISBN number</Text>

        <Card sizing="border">
          <TextInput
            id="isbnNo"
            placeholder="ISBN or book title"
            value={isbn}
            onChange={handleChange}
            onSubmit={handleChange}
              suffix={
              <Box padding={1}>
                <Button
                  icon={SearchIcon}
                  mode="bleed"
                  padding={2}
                  text="Look up"
                  type="submit" onClick={lookUpIsbn}
                />
              </Box>
            }
          />
        </Card>
      </Stack>
      <BookPreview bookDetails={bookDetails} lookedUp={lookedUp} />
    </Stack>
  )
}

export {ISBNLookup}