export const coffee = {
    name: 'coffee',
    type: 'document',
    title: 'Coffee',
    preview: {
      select: {
        title: 'title',
        store: 'store.name',
        date: 'date'
      },
      prepare(selection) {
        const {title, store, date} = selection
        return {
          title: `${title} (from ${store})`,
          subtitle: date ? `Had this from ${date}` : `""`
        }
      }    
    },
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
        name: 'notes',
        type: 'array',
        type: 'array', 
        of: [{type: 'block'}],
        title: 'Notes / extra info'
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image of the coffee'
      }
    ]  
};
