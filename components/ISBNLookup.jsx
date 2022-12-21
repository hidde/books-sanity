import { React, useState } from "react";
import { Card, Stack, Text, TextInput, Button, Box } from "@sanity/ui";
import { SearchIcon } from "@sanity/icons";
import { BookPreview } from "./BookPreview.jsx"; 

function ISBNLookup(props) {
  const [isbn, setIsbn] = useState('');
  const [bookDetails, setBookDetails] = useState(0);
  let [lookedUp, setLookedUp] = useState(false);

  function lookUpIsbn(e) {
    const fetchUrl = `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`;
    
    e.preventDefault();
    
    if (!isbn) return

    fetch(fetchUrl)
    .then((response) => response.json())
    .then((data) => {
      const book = data[Object.keys(data)[0]];
      const restructuredData = {
        title: book.title,
        subtitle: book.subtitle, 
        authors: Array.from(book.authors),
        year: book.publish_date?.slice(-4),
        image: book.cover?.large,
        pages: book.number_of_pages,
        publisher: Array.from(book.publishers)
      };
      setBookDetails(restructuredData);  
      setLookedUp(true);
      console.log('bookdetails', bookDetails);
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
        <Text as="label" htmlFor="isbnNo" size={2} weight="semibold">ISBN number 0399576169</Text>

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
                  text="Find"
                  type="submit" onClick={lookUpIsbn}
                />
              </Box>
            }
          />
        </Card>
      </Stack>
      <BookPreview book={bookDetails} lookedUp={lookedUp} />
    </Stack>
  )
}

export {ISBNLookup}