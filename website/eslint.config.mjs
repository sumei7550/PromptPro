import nextPlugin from "@next/eslint-plugin-next";

export default [
  {
    ignores: [".next/**", "node_modules/**"],
  },
  {
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: nextPlugin.configs.recommended.rules,
  },
];
