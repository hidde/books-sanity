export const concert = {
    name: 'concert',
    type: 'document',
    title: 'Concert',
    preview: {
      select: {
        artist: 'artist.name',
        city: 'venue.city',
        date: 'date'
      },
      prepare(selection) {
        const {artist, city, date} = selection
        return {
          title: artist,
          subtitle: `${city} (${date?.split('-')[0] || 'Unknown date'})`
        }
      }    
    },
    orderings: [
      {
        title: 'Event Date',
        name: 'eventDateDesc',
        by: [
          {field: 'date', direction: 'desc'}
        ]
      },
    ],
    fields: [
      {
        name: 'artist',
        type: 'reference',
        to: [{type: 'artist'}],
        title: 'Artist'
      },
      {
        name: 'artist_support',
        type: 'reference',
        to: [{type: 'artist'}],
        title: 'Supporting artist'
      },
      {
        name: 'venue',
        title: 'Venue',
        type: 'reference',
        to: [{type: 'concertVenue'}],
      },
      {
        name: 'at_festival',
        title: 'Festival that this was at',
        type: 'reference',
        to: [{type: 'festival'}],
      },
      {
        name: 'date',
        title: 'Date',
        type: 'date'
      },
      {
        name: 'rating',
        title: 'Rating',
        type: 'string'
      },
      {
        name: 'notes',
        title: 'Notes',
        type: 'array',
        of: [{type: 'block'}]
      },
      {
        name: 'images',
        title: 'Images (because POID)',
        type: 'array',
        of: [
          {
            name: 'photo',
            title: 'Image',
            type: 'object',
            fields: [
              {
                name: 'image',
                title: 'Image',
                type: 'image'
              },
              {
                name: 'alt',
                title: 'Text alternative',
                type: 'string'
              }    
            ]
          },
        ]
      }
    ]
  }