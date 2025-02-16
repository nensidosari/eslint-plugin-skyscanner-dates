const { RuleTester } = require('eslint');

const { rules } = require('../src');

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 6,
  },
});

ruleTester.run('no-new-date-with-args', rules['no-new-date-with-args'], {
  valid: [
    {
      code: 'const a = Date.now()',
    },
    {
      code: 'const date = new Date()',
    },
  ],
  invalid: [
    {
      code: 'const date = new Date(1234);',
      errors: [
        {
          message:
            'Deprecated new Date(args) expression, this can easily cause timezone issues. Use date-fns/parseISO instead.',
        },
      ],
    },
    {
      code: 'const date = new Date("Fri Mar 08 2019 15:46:56 GMT+0000 (Greenwich Mean Time)");',
      errors: [
        {
          message:
            'Deprecated new Date(args) expression, this can easily cause timezone issues. Use date-fns/parseISO instead.',
        },
      ],
    },
    {
      code: 'const arg = 7; const date = new Date(arg);',
      errors: [
        {
          message:
            'Deprecated new Date(args) expression, this can easily cause timezone issues. Use date-fns/parseISO instead.',
        },
      ],
    },
  ],
});
