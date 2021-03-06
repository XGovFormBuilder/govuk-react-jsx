import examples from '../../../../.cache/govuk-frontend-examples/checkboxes.json';

// Insert additional examples here if desired

// See https://github.com/alphagov/govuk-frontend/pull/1595
examples.examples.push({
  name: 'empty conditionals',
  data: {
    idPrefix: 'foo',
    name: 'foo',
    items: [
      {
        value: 'foo',
        text: 'Foo',
        conditional: {
          html: false,
        },
      },
    ],
  },
});

export default examples;
