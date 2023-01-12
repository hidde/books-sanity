export default function getItemsByAuthor(S, authors) {      
  const authorItems = [];

  // deduplicate
  authors = [...new Set(authors.sort())];

  for (const author of authors) {
    authorItems.push(
      S.listItem()
        .title(`${author}`)
        .child(
          S.documentList()
          .title(`Books by ${author}`)        
          .menuItems(
            S.documentTypeList('book')
              .getMenuItems()
          )              
          .filter(`"${author}" in authors`)                       
        )
    )
  } 

  console.log(authorItems);

  return authorItems
}