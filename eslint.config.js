import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
// eslint와 prettier의 충돌 방지
import eslintConfigPrettier from "eslint-config-prettier";
// plugin import하기 - 추가 필수
import importPlugin from "eslint-plugin-import";

export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      import: importPlugin,
    }, // import 추가
    settings: {
      "import/resolver": {
        node: {
          extentions: [".js", ".jsx"],
          // paths: ["src"], // 경로 단순화. src 이후 경로만 적으면 됨
        },
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      // import 관련 룰 추가
      //"import/no-unresolved": "error", // import 경로가 존재하지 않으면 에러
      //"import/named": "error", // 존재하지 않는 export 이름 쓰면 에러
      "import/default": "off",
      //"import/no-duplicates": "error", // 동일 모듈 여러 번 import하면 에러
    },
  },
  eslintConfigPrettier,
];
