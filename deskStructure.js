export const myStructure = (S) =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Homepage News')
        .child(
          S.document()
            .schemaType('announcement')
            .documentId('announcement')),
      ...S.documentTypeListItems().filter(listItem => !['announcement'].includes(listItem.getId()))
    ])
      