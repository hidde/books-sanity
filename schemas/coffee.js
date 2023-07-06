export const coffee = {
    name: 'coffee',
    type: 'document',
    title: 'Coffee',
    fields: [
      {
        name: 'rating',
        type: 'number',
        title: 'Rating'
      },
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'grower',
        type: 'reference',
        to: [{type: 'grower'}],
        title: 'Grower'
      },
      {
        name: 'tastingNotes',
        type: 'array',
        of: [
          {
            name: 'note',
            type: 'string',
            title: 'Note'
          }
        ],
        title: 'Tastes like'
      },
      {
        name: 'beanVariety',
        type: 'string',
        title: 'Bean variety'
      },
      {
        name: 'process',
        type: 'string',
        title: 'Process'
      },
      {
        name: 'store',
        type: 'reference',
        to: [{type: 'coffeeStore'}],
        title: 'Store'
      },
      {
        name: 'cuppingScore',
        type: 'number',
        title: 'Cupping score'
      },
      {
        name: 'date',
        type: 'date',
        title: 'From which date did I drink this'
      },
      {
        name: 'giftFrom',
        type: 'array',
        of: [
          {
            name: 'name',
            type: 'string',
            title: 'Name'
          }
        ],
        title: 'Gift from'
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image of the coffee'
      }
    ]  
};
