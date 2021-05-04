import S from '@sanity/desk-tool/structure-builder'
import { MdSettings } from "react-icons/md";
import SocialPreview from 'part:social-preview/component'

const hiddenDocTypes = listItem =>
  !['category', 'person', 'siteSettings'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        )
        .icon(MdSettings),
      S.listItem()
        .title('People')
        .schemaType('person')
        .child(S.documentTypeList('person').title('People')),
      // S.listItem()
      //   .title('Categories')
      //   .schemaType('category')
      //   .child(S.documentTypeList('category').title('Categories')),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])

//   export const getDefaultDocumentNode = ({ schemaType }) => {
//   // Add the social preview view only to those schema types that support it
//   if (['blog.post', 'marketing.page'].includes(schemaType) {
//     return S.document().views([
//       S.view.form(),
//       S.view.component(SocialPreview()).title('Social & SEO'),
//     ])
//   }
//   return S.document().views([S.view.form()])
// }
