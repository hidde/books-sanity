import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'e86znw0z',
  dataset: 'production'
});

async function getData(field) {
  const items = [];

  await client
    .fetch(`*[_type == "book"] { ${field} }`)
    .then(
      (documents) => {  
        for (let i=0; i < documents.length; i++) {
          if (field == "whenRead") {
            items.push(documents[i][field])
          } 
          else {
            documents[i][field].forEach(
              (item) => {
                items.push(item);
              }
            )
          }
        }
      }
    );
    
  return items
}

export default getData;