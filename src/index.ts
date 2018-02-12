/* tslint:disable:object-literal-sort-keys object-literal-key-quotes */
import { omit } from '@cotto/utils.ts'

const rules = {
  // prettier
  'prettier': false,
  // tslint-eslint
  'ter-indent': [true, 2],
  // tslint-react
  'jsx-no-multiline-js': false,
  'jsx-no-lambda': false,
  // tslint
  'adjacent-overload-signatures': true,
  'align': {
    'options': [
      'parameters',
      'arguments',
      'statements',
      'elements',
      'members',
    ],
  },
  'array-type': {
    'options': 'array',
  },
  'arrow-parens': {
    'options': ['ban-single-arg-parens'],
  },
  'await-promise': true,
  'ban-types': {
    'options': [
      ['Object', 'Avoid using the `Object` type. Did you mean `object`?'],
      ['Boolean', 'Avoid using the `Boolean` type. Did you mean `boolean`?'],
      ['Number', 'Avoid using the `Number` type. Did you mean `number`?'],
      ['String', 'Avoid using the `String` type. Did you mean `string`?'],
      ['Symbol', 'Avoid using the `Symbol` type. Did you mean `symbol`?'],
    ],
  },
  'callable-types': false,
  'forin': false,
  'indent': {
    options: ['spaces', 2],
  },
  'interface-name': false,
  'linebreak-style': {
    options: ['LF'],
  },
  'max-line-length': {
    options: [120],
  },
  'member-access': false,
  'no-consecutive-blank-lines': {
    options: [2],
  },
  'no-duplicate-imports': true,
  'no-duplicate-switch-case': true,
  'no-duplicate-variable': true,
  'no-empty-interface': false,
  'no-for-in-array': true,
  'no-inferrable-types': true,
  'no-invalid-template-strings': true,
  'no-irregular-whitespace': true,
  'no-mergeable-namespace': true,
  'no-parameter-properties': true,
  'no-return-await': true,
  'no-sparse-arrays': true,
  'no-switch-case-fall-through': true,
  'no-unbound-method': true,
  'no-unnecessary-callback-wrapper': true,
  'no-unnecessary-qualifier': true,
  'no-unsafe-any': true,
  'no-unsafe-finally': true,
  'no-unused-expression': {
    options: [
      'allow-fast-null-checks',
    ],
  },
  'object-literal-key-quotes': {
    options: ['as-needed'],
  },
  'ordered-imports': false,
  'promise-function-async': true,
  'quotemark': {
    options: [
      'single',
      'avoid-escape',
    ],
  },
  'semicolon': {
    options: ['never'],
  },
  'space-before-function-paren': {
    options: {
      anonymous: 'always',
      asyncArrow: 'always',
      constructor: 'never',
      method: 'never',
      named: 'never',
    },
  },
  'space-within-parens': {
    options: [0],
  },
  'switch-default': true,
  'triple-equals': {
    options: [
      'allow-undefined-check',
      'allow-null-check',
    ],
  },
  // TODO: auto fixが来たら追加したい
  // 'type-literal-delimiter': true,
  'use-default-type-parameter': true,
  'use-isnan': true,
  'variable-name': {
    options: [
      'ban-keywords',
      'check-format',
      'allow-pascal-case',
      'allow-leading-underscore',
      'allow-trailing-underscore',
    ],
  },
}

module.exports = {
  defaultSeverity: 'warn',
  extends: ['tslint:recommended', 'tslint-react', 'tslint-eslint-rules'],
  rules,
  jsRules: omit(rules, require('./ts-only')),
}
