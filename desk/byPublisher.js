export default function getItemsByPublisher(S, publishers) {      
  const publisherItems = [];
  const temp = [];
  let counter = 0;

  // deduplicate
  publishers = [...new Set(publishers.sort())];
  
  function camelize(str) {
    str = str.replace(/[,.&-]/g, '');

    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
      if (+match === 0) return ""; 
      return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
  }
  
  for (let publisher of publishers) {
    counter++;

    if (temp.indexOf(camelize(publisher)) > 0) {
      // all publishers need to have unique names,
      // so we add in a counter to do that and the
      // word 'duplicate' so that they're easy to 
      // CTRL+F in the list of publishers in the Studio
      publisher = `${publisher} (duplicate; #${counter})`;
    } else {
      temp.push(camelize(publisher));
    }

    publisherItems.push(
      S.listItem()
        .title(`${publisher}`)
        .child(
          S.documentList()
          .title(`Books published by ${publisher}`)        
          .menuItems(
            S.documentTypeList('book')
              .getMenuItems()
          )              
          .filter(`"${publisher}" in publishers`)                       
        )
    )
  } 

  return publisherItems
}