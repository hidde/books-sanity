import {BookDocumentInput} from '../components/BookDocumentInput.jsx'

export const schemaTypes = [
  {
    name: 'book',
    type: 'document',
    title: 'Books',
    components: {
      input: BookDocumentInput
    },
    fieldsets: [
      {
        name: 'lookup',
        title: 'Find a book',
      },
      {
        name: 'bookinfo',
        title: 'About the book',
        hidden: ({document}) => !document?.enterManually
      }
    ],
    fields: [
      // {
      //   name: 'barcode',
      //   type: 'string',
      //   title: 'Barcode',
      //   fieldset: 'lookup',
      //   components: {
      //     field: BarCode
      //   }
      // },
      // {
      //   name: 'isbn',
      //   type: 'string',
      //   title: 'Look up by ISBN number',
      //   components: {
      //     field: ISBNLookup
      //   }
      // },
      {
        name: 'enterManually',
        type: 'boolean',
        title: 'Enter manually',
      },
      {
        name: 'title',
        type: 'string',
        title: 'Title',
        fieldset: 'bookinfo'
      },
      {
        name: 'authors',
        type: 'array',
        of: [
          {
            name: 'author',
            type: 'string',
            title: 'Author'
          }
        ],
        title: 'Author(s)',
        fieldset: 'bookinfo'
      },
      {
        name: 'year',
        type: 'string',
        title: 'Year',
        fieldset: 'bookinfo'
      },
      {
        name: 'image',
        type: 'image',
        title: 'Book cover',
        fieldset: 'bookinfo'
      },
      {
        name: 'pages',
        type: 'number',
        title: 'Pages',
        fieldset: 'bookinfo'
      },
      {
        name: 'publishers',
        type: 'array',
        of: [
          {
            name: 'publisher',
            type: 'string',
            title: 'Publisher'
          }
        ],
        title: 'Publisher(s)',
        fieldset: 'bookinfo'
      },
      {
        name: 'language',
        type: 'string',
        title: 'Language',
        fieldset: 'bookinfo'
      },
      {
        name: 'rating',
        type: 'number',
        title: 'Rating',
        fieldset: 'bookinfo'
      },
    ],
    orderings: [
      {
        title: 'Year',
        name: 'year',
        by: [
          {
            field: 'year',
            direction: 'desc'
          }
        ]
      }
    ]
  }
]




orderings: [
  {
    title: 'Year',
    name: 'year',
    by: [
      {
        field: 'year',
        direction: 'desc'
      }
    ]
  }
]