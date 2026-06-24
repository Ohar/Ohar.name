const path = require('path');

const dwPcClassList = require('./src/constants/dwPcClassList');
const quotesList = require('./src/constants/quotesList');

const generateDwPcClassPathById = require('./src/utils/generateDwPcClassPathById.js');

const DwPcClassTemplate = path.resolve(`./src/templates/DwPcClassTemplate.jsx`);
const QuotePageTemplate = path.resolve(`./src/templates/QuotePageTemplate.jsx`);

const pagePromiseGenerator = createPageAction => ({list, template, generatePathById, getSlug = ({id}) => id}) => new Promise(
  resolve => {
    resolve(
      list.forEach(
        (item, index) => {
          const slug = getSlug(item, index)

          createPageAction(
            {
              path: generatePathById(slug),
              component: template,
              context: {
                slug
              }
            }
          );
        }
      )
    );
  }
)

const pageToGenerateList = [
  {
    list: quotesList,
    generatePathById: quoteId => `/quotes/${quoteId}`,
    getSlug: (_, index) => index,
    template: QuotePageTemplate,
  },
  {
    list: dwPcClassList,
    generatePathById: generateDwPcClassPathById,
    template: DwPcClassTemplate,
  },
]

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  return Promise
    .all(
      pageToGenerateList.map(pagePromiseGenerator(createPage))
    )
    .catch(
      e => console.error('Fail createPages', e)
    )
}
