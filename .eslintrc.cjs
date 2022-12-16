module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "airbnb", "airbnb/hooks",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 14,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "prettier"
    ],
    "rules": {
        "react/react-in-jsx-scope": 0,
        "import/extensions": 0,
        'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
        "react/function-component-definition": [
          2,
          {
            namedComponents: "arrow-function",
            unnamedComponents: "arrow-function",
          },
        ],
        "import/prefer-default-export": 0,
        "no-shadow": 0,
        "@typescript-eslint/no-shadow": 1,
    },
    "settings": {
        "import/resolver": {
          "node": {
            "extensions": [
              ".js",
              ".ts",
              ".tsx",
              ".jsx"
            ]
          }
        }
      }
};
