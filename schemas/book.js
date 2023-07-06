import {BookDocumentInput} from '../components/BookDocumentInput.jsx'

export const book = {
    name: 'book',
    type: 'document',
    title: 'Book',
    components: {
      input: BookDocumentInput
    },
    fieldsets: [
      {
        name: 'lookup',
        title: 'Find a book',
        hidden: ({document}) => document?.title
      },
      {
        name: 'bookinfo',
        title: 'About the book'
      }
    ],
    fields: [

      {
        name: 'enterManually',
        type: 'boolean',
        title: 'Enter manually'
      },
      {
        name: 'unread',
        type: 'boolean',
        title: 'Still reading',
        description: 'I\'m actually still reading this, let it show up as ”Currently reading”, but not in lists of read books',
        fieldset: 'bookinfo'
      },
      {
        name: 'rating',
        type: 'number',
        title: 'Rating',
        fieldset: 'bookinfo'
      },
      {
        name: 'title',
        type: 'string',
        title: 'Title',
        fieldset: 'bookinfo'
      },
      {
        name: 'image',
        type: 'image',
        title: 'Book cover',
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
        name: 'isbn',
        type: 'string',
        title: 'ISBN',
        fieldset: 'bookinfo'
      },
      {
        name: 'whenRead',
        type: 'string',
        title: 'What year do / did I read this book in',
        fieldset: 'bookinfo'
      },
      {
        name: 'order',
        type: 'number',
        title: 'Order',
        hidden: true
      }
    ],
    orderings: [
      {
        title: 'Year',
        name: 'year',
        by: [
          {
            field: 'year',
            direction: 'desc'
          },
          {
            field: '_createdAt',
            direction: 'desc'
          }
        ]
      },
      {
        title: 'When read',
        name: 'whenread',
        by: [
          {
            field: 'whenRead',
            direction: 'desc',
          },
          {
            field: '_createdAt',
            direction: 'desc'
          }
        ]
      }
    ]
  };
