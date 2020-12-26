# Shopify Frontend Summer Internship Challenge 2021

- [**Challenge specification**](https://docs.google.com/document/d/1AZO0BZwn1Aogj4f3PDNe1mhq8pKsXZxtrG--EIbP_-w/edit#)

## Features

The user may:

- Search movies (10 results max) by title
- Save their list of movies to **localStorage**
- Learn more about each movie by clicking on its title
- Go to each movie's respective iMDB page which is provided on the movie modal
- The application will **automatically** save the list on closing
- Animations have been added to show the user when certain actions are done such as
  - Trying to add 5+ movies
  - Saving list

## Design

I designed this app on Figma using an extremely basic design system to follow consistancy.

- [Figma file](https://www.figma.com/file/cMvaLG7wzOhfkRlR0YwOZy/Shopify-Challenge-2021?node-id=1%3A2)
- [Desktop ptototype](https://www.figma.com/proto/cMvaLG7wzOhfkRlR0YwOZy/Shopify-Challenge-2021?node-id=6%3A1159&viewport=213%2C239%2C0.22065918147563934&scaling=min-zoom)
- [Mobile prototype](https://www.figma.com/proto/cMvaLG7wzOhfkRlR0YwOZy/Shopify-Challenge-2021?node-id=36%3A49&viewport=271%2C452%2C0.6339215040206909&scaling=scale-down)

## Development

- React
- TypeScript

## Libraries used

- Styled components
- Polaris components (search bar & modal)

## General notes

**All** components except for the serach bar and modal were developed from scratch and implemented based on the design system that was made as part of this challenge.

The application is fully responsive on mobile devices and it has an accessible score of **97** as tested by Google lighthouse. This was achieved by using semantic elements as well as proper aria labels for actions.
