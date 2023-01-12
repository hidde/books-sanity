export default function getItemsByYear(S, years) {      
  const yearItems = [];
  let temp = [];
  let counter = 0;
  
  function normalize(str) {
    str = str.toString().replace(/[,.&-]/g, '');

    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
      if (+match === 0) return ""; 
      return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
  }
  
  for (let year of years) {

    counter++;

    if (temp.indexOf(normalize(year)) > 0) {
      year = `${year} (duplicate; #${counter})`;
    } else {
      if (year && year.length <= 4 && typeof(year) === 'string') {
        temp.push(normalize(year));
      }
    }
  }

  years = [...new Set(temp.sort())];

  for (let year of years) {
    yearItems.push(
      S.listItem()
        .title(`${year}`)
        .id(`${year}-${counter}`)
        .child(
          S.documentList()
          .title(`Books read in ${year}`)        
          .menuItems(
            S.documentTypeList('book')
              .getMenuItems()
          )              
          .filter(`whenRead == "${year}"`)                       
        )
    )
  } 

  return yearItems
}