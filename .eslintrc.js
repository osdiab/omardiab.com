const eslintExtends = [
  "eslint:recommended",
  "plugin:@typescript-eslint/recommended",
  "plugin:astro/recommended",
  "plugin:jsx-a11y/strict",
  // Excludes ESLint's rules that conflict with prettier
  "prettier",
];
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: eslintExtends,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "unused-imports", "jsx-a11y"],
  rules: {
    "@typescript-eslint/consistent-type-definitions": ["warn", "interface"], // interfaces more performant
    // -- eslint plugin unused import start
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      // allow trailing underscore
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    // -- eslint plugin unused import end
  },
  settings: { react: { version: "detect" } },
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {
        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
      },
    },
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        ...eslintExtends,
      ],
      rules: {
        "react/react-in-jsx-scope": "off", // not necessary anymore
        "react/prop-types": "off", // typescript handles types already
      },
    },
  ],
};
