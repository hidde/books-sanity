import getData from './getData.js';
import getItemsByRating from "./byRating";
import getItemsByAuthor from "./byAuthor";
import getItemsByYear from "./byYear";
import getItemsByPublisher from "./byPublisher";

const authors  = await getData("authors");
const publishers = await getData("publishers");
const years = await getData("whenRead");

const structure = (S) =>
  S.list()
    .title('Browse books')
    .items(
      [
        ...S.documentTypeListItems(),
        S.listItem()
          .title('Authors')
          .child(
            S.list()
            .title('Authors')
            .id('by-author')
            .items(getItemsByAuthor(S, authors))
          ),
        S.listItem()
          .title('Year read')
          .child(
            S.list()
            .title('Year read')
            .id('by-year')
            .items(
              [
                ...getItemsByYear(S, years),
                S.listItem()
                .title('Not in a year')
                .id('no-year')
                .child(
                  S.documentList()
                  .title('Books not in a year')        
                  .menuItems(
                    S.documentTypeList('book')
                      .getMenuItems()
                  )              
                  .filter(`_type == "book" && whenRead == null`)                       

                )
              ]
            )
          ),
        S.listItem()
          .title('Publishers')
          .child(
            S.list()
            .title('Publishers')
            .id('by-publisher')
            .items(getItemsByPublisher(S, publishers))
          ),
        S.listItem()
          .title('Ratings')
          .child(
            S.list()
            .title('Ratings')
            .id('by-rating')
            .items(getItemsByRating(S, [5, 4, 3, 2, 1]))
          )
      ]
    )

export { structure }