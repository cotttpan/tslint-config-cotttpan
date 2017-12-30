"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:object-literal-sort-keys */
const utils_ts_1 = require("@cotto/utils.ts");
const rules = {
    'adjacent-overload-signatures': true,
    // align: {
    //     options: [
    //         'parameters',
    //         'arguments',
    //         'statements',
    //         'elements',
    //         'members',
    //     ],
    // },
    'array-type': {
        options: 'array',
    },
    'arrow-parens': {
        options: ['ban-single-arg-parens'],
    },
    'arrow-return-shorthand': true,
    'await-promise': true,
    'callable-types': false,
    'class-name': true,
    'comment-format': {
        options: ['check-space'],
    },
    curly: true,
    forin: false,
    'import-spacing': true,
    indent: {
        options: ['spaces', 4],
    },
    'jsdoc-format': true,
    'label-position': true,
    'linebreak-style': {
        options: ['LF'],
    },
    'max-line-length': {
        options: [180],
    },
    'member-ordering': {
        options: {
            order: 'statics-first',
        },
    },
    'new-parens': true,
    'no-angle-bracket-type-assertion': true,
    'no-arg': true,
    'no-bitwise': true,
    'no-boolean-literal-compare': true,
    'no-conditional-assignment': true,
    'no-consecutive-blank-lines': {
        options: [2],
    },
    'no-console': {
        options: [
            'debug',
            'info',
            'log',
            'time',
            'timeEnd',
            'trace',
        ],
    },
    'no-construct': true,
    'no-debugger': true,
    'no-duplicate-imports': true,
    'no-duplicate-super': true,
    'no-duplicate-switch-case': true,
    'no-duplicate-variable': true,
    'no-empty': true,
    'no-eval': true,
    'no-floating-promises': true,
    'no-for-in-array': true,
    'no-implicit-dependencies': {
        options: ['dev'],
    },
    'no-inferrable-types': true,
    'no-internal-module': true,
    'no-invalid-template-strings': true,
    'no-irregular-whitespace': true,
    'no-mergeable-namespace': true,
    'no-misused-new': true,
    'no-parameter-properties': true,
    'no-reference': true,
    'no-reference-import': true,
    'no-return-await': true,
    'no-shadowed-variable': true,
    'no-sparse-arrays': true,
    'no-string-throw': true,
    'no-switch-case-fall-through': true,
    'no-trailing-whitespace': true,
    'no-unbound-method': true,
    'no-unnecessary-callback-wrapper': true,
    'no-unnecessary-initializer': true,
    'no-unnecessary-qualifier': true,
    'no-unsafe-any': true,
    'no-unsafe-finally': true,
    'no-unused-expression': {
        options: [
            'allow-fast-null-checks',
        ],
    },
    'no-use-before-declare': true,
    'no-var-keyword': true,
    'object-literal-key-quotes': {
        options: ['as-needed'],
    },
    'object-literal-shorthand': true,
    'one-line': {
        options: [
            'check-catch',
            'check-finally',
            'check-else',
            'check-open-brace',
            'check-whitespace',
        ],
    },
    'one-variable-per-declaration': {
        options: ['ignore-for-loop'],
    },
    'promise-function-async': true,
    quotemark: {
        options: [
            'single',
            'avoid-escape',
        ],
    },
    radix: true,
    semicolon: {
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
    'trailing-comma': {
        options: {
            multiline: 'always',
            singleline: 'never',
        },
    },
    'triple-equals': {
        options: [
            'allow-undefined-check',
            'allow-null-check',
        ],
    },
    // TODO: auto fixが来たら追加したい
    // 'type-literal-delimiter': true,
    'typedef-whitespace': {
        options: [
            {
                'call-signature': 'nospace',
                'index-signature': 'nospace',
                parameter: 'nospace',
                'property-declaration': 'nospace',
                'variable-declaration': 'nospace',
            },
            {
                'call-signature': 'onespace',
                'index-signature': 'onespace',
                parameter: 'onespace',
                'property-declaration': 'onespace',
                'variable-declaration': 'onespace',
            },
        ],
    },
    'typeof-compare': true,
    'unified-signatures': true,
    'use-default-type-parameter': true,
    'use-isnan': true,
    'variable-name': {
        options: [
            'ban-keywords',
            'check-format',
            'allow-pascal-case',
            'allow-leading-underscore',
        ],
    },
    whitespace: {
        options: [
            'check-branch',
            'check-decl',
            'check-operator',
            'check-separator',
            'check-type',
            'check-typecast',
        ],
    },
};
module.exports = {
    defaultSeverity: 'warn',
    rules,
    jsRules: utils_ts_1.omit(rules, require('./ts-only')),
};
