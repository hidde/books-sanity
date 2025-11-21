export const vinyl = {
  name: 'record',
  type: 'document',
  title: 'Record',
  fields: [
	 {
	  name: 'cover',
	  type: 'image',
	  title: 'Vinyl cover'
	},
	{
		name: 'images',
		title: 'Own images of the vinyl',
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
	},
	{
	  name: 'title',
	  type: 'string',
	  title: 'Title'
	},
	{
	  name: 'artist',
	  type: 'reference',
	  to: [{ type: 'artist' }],
	  title: 'Artist'
	},
	{
	  name: 'year',
	  type: 'string',
	  title: 'Year released'
	},
	{
	  name: 'year_acquired',
	  type: 'string',
	  title: 'Year acquired'
	},
	{
	  name: 'label',
	  type: 'string',
	  title: 'Label'
	},
	{
	  name: 'country',
	  type: 'string',
	  title: 'Country'
	},
	{
	  name: 'tracks',
	  type: 'array',
	  of: [
		{
		  type: 'object',
		  name: 'track',
		  fields: [
			  { type: 'string', name: 'trackId', title: 'ID' },
			  { type: 'string', name: 'trackTitle', title: 'Track name' },
				{
					type: 'array',
					name: 'trackFeatured',
					title: 'Featured artists',
					of: [
						{ type: 'reference', to: [{ type: 'artist' }] }
					]
				}
		   ],
		  preview: {
			select: {
			  trackId: 'trackId',
			  trackTitle: 'trackTitle',
			  trackFeatured: 'trackFeatured',
			  trackLength: 'trackLength'
			},
			prepare({trackId, trackTitle, trackFeatured, trackLength}) {
			  return {
				title: `${trackId ? trackId + ': ' : ''} ${trackTitle}${trackFeatured ? '(with ' + trackFeatured.length + ' featured artists)' : ''}`
			  }
			}
		  }
		 }
	  ],
	  title: 'Track(s)'
	},
	{
	  name: 'genre',
	  type: 'array',
	  of: [
		{
		  name: 'genre',
		  type: 'string',
		  title: 'Genre'
		}
	  ],
	  title: 'Genre(s)'
	},
	{
	  name: 'tag',
	  type: 'array',
	  of: [
		{
		  name: 'tag',
		  type: 'string',
		  title: 'Tag'
		}
	  ],
	  title: 'Tag(s)'
	},
	{
		name: 'special_edition',
		type: 'string',
		title: 'Special edition info'
	},
	{
	  name: 'notes',
	  title: 'Notes',
	  type: 'array',
	  of: [{ type: 'block' }]
	}
  ]
};
