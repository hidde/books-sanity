export const coffeeStore =   {
    name: 'coffeeStore',
    type: 'document',
    title: 'Store',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'city',
        type: 'string',
        title: 'City'
      },
      {
        name: 'country',
        type: 'string',
        title: 'Country',
        initialValue: 'The Netherlands'
      },
      {
        name: 'selfRoasts',
        type: 'boolean',
        title: 'Roasted by store'
      }
    ]
  };