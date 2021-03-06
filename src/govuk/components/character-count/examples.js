import examples from '../../../../.cache/govuk-frontend-examples/character-count.json';

// See https://github.com/alphagov/govuk-frontend/pull/1553
examples.examples.push({
  name: 'with classes on the form group',
  data: {
    name: 'more-detail',
    id: 'more-detail',
    maxlength: 10,
    formGroup: {
      classes: 'class-on-the-form-group',
    },
    label: {
      text: 'Can you provide more detail?',
    },
  },
});

// See https://github.com/alphagov/govuk-frontend/pull/1650
examples.examples.push({
  name: 'with classes on the character count hint',
  data: {
    name: 'more-detail',
    id: 'more-detail',
    maxlength: 10,
    countMessage: {
      classes: 'class-on-the-count-message',
    },
    label: {
      text: 'Can you provide more detail?',
    },
  },
});

export default examples;
