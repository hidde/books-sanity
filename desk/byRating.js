export default function getItemsByRating(S, ratings) {
  const items = [];

  for (const rating of ratings) {
    items.push(
      S.listItem()
        .title(`${rating} stars`)
        .child(
          S.documentList()
          .title(`${rating} stars`)        
          .menuItems(
            S.documentTypeList('book')
              .getMenuItems()
          )              
          .filter(`rating == ${rating}`)                       
        )
    )
  }

  return items
}