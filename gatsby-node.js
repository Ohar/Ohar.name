const path = require("path")

const generateCreaturePageUrlById = require("./src/utils/generateCreaturePageUrlById")

const dndCreatureList = require("./src/constants/dnd/dndCreatureList")
const quotesList = require("./src/constants/quotesList")

const DndCreaturePageTemplate = path.resolve(`./src/templates/DndCreaturePageTemplate.jsx`)
const QuotePageTemplate = path.resolve(`./src/templates/QuotePageTemplate.jsx`)

exports.createPages = ({ actions }) => {
  const { createPage } = actions

  return new Promise(
    resolve => {
      resolve(
        // dndCreatureList.forEach(
        //   ({id}) => {
        //     createPage(
        //       {
        //         path: generateCreaturePageUrlById(id),
        //         component: DndCreaturePageTemplate,
        //         context: {
        //           slug: id,
        //         },
        //       },
        //     )
        //   },
        // ),
        quotesList.forEach(
          (quote, id) => {
            createPage(
              {
                path: `/quotes/${id}`,
                component: QuotePageTemplate,
                context: {
                  slug: id,
                },
              },
            )
          },
        ),
      // resolve(
      //   [
      //     () => dndCreatureList.forEach(
      //       ({id}) => {
      //         createPage(
      //           {
      //             path: generateCreaturePageUrlById(id),
      //             component: DndCreaturePageTemplate,
      //             context: {
      //               slug: id,
      //             },
      //           },
      //         )
      //       },
      //     ),
      //     () => quotesList.forEach(
      //       (quote, id) => {
      //         createPage(
      //           {
      //             path: `/quotes/${id}`,
      //             component: QuotePageTemplate,
      //             context: {
      //               slug: id,
      //             },
      //           },
      //         )
      //       },
      //     ),
      //   ]
      //     .forEach(e => e()),
      )
    },
  )
    .catch(
      e => console.error("Fail createPages", e),
    )
}

