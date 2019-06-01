module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "airbnb",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "global-require": 0,
        "import/no-dynamic-require": 0,
        "react/forbid-prop-types": 0,
        "react/require-default-props": 0,
        "react/no-typos": 0,
        "import/prefer-default-export": 0,
        "no-underscore-dangle": 0,
        "jsx-a11y/anchor-is-valid": 0,
        "jsx-a11y/label-has-for": 0,
        "prefer-const": 0,
        "array-callback-return": 0,
        "no-plusplus": 0,
        "no-param-reassign": 0,
        "jsx-a11y/click-events-have-key-events": 0,
        "jsx-a11y/interactive-supports-focus": 0,
        "no-shadow": 0,
        "no-nested-ternary": 0,
        "jsx-a11y/no-noninteractive-element-interactions": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "no-restricted-syntax": 0,
        "react/no-array-index-key": 0,
        "class-methods-use-this": 0,
        "no-useless-escape": 0,
        "linebreak-style": 0,
        "jsx-quotes": "prefer-single",
    }
};