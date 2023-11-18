const path = require('path');

const dwPcClassList = require('./src/constants/dwPcClassList');
const quotesList = require('./src/constants/quotesList');

const generateDwPcClassPathById = require('./src/utils/generateDwPcClassPathById.js');

const DwPcClassTemplate = path.resolve(`./src/templates/DwPcClassTemplate.jsx`);
const QuotePageTemplate = path.resolve(`./src/templates/QuotePageTemplate.jsx`);

const pagePromiseGenerator = createPageAction => ({list, template, generatePathById}) => new Promise(
  resolve => {
    resolve(
      list.forEach(
        ({id}) => {
          createPageAction(
            {
              path: generatePathById(id),
              component: template,
              context: {
                slug: id
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
    generatePathById: id => `/quotes/${id}`,
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
