import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: 'e86znw0z',
  dataset: 'books',
  apiVersion: '2022-12-25'
})

const FIELD_TO_REMOVE = 'whenRead'

const fetchDocuments = () => client.fetch(`*[_type == "book" && whenRead[0] && whenRead[0] != null] {_id, _rev}`)

const buildPatches = docs => docs.map(doc => ({
  id: doc._id,
  patch: {
    set: {
      "whenRead": doc.whenRead ? doc.whenRead[0] : doc.whenRead
    },
    ifRevisionID: doc._rev
  }
}));

const createTransaction = patches =>
  patches.reduce((tx, patch) => tx.patch(patch.id, patch.patch), client.transaction())

const commitTransaction = tx => tx.commit()

const editNextBatch = async () => {
  const documents = await fetchDocuments()
  const patches = buildPatches(documents)

  if (patches.length === 0) {
    console.log('No more documents to unset!')
    return null
  }

  console.log(
    `Editing batch:\n %s`,
    patches.map(patch => `${patch.id} => ${JSON.stringify(patch.patch)}`).join('\n')
  )
  const transaction = createTransaction(patches)
  await commitTransaction(transaction)
  return editNextBatch()
}

editNextBatch().catch(err => {
  console.error(err)
  process.exit(1)
})