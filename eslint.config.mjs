import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import { ReactThreeFiber } from "@react-three/fiber";
import { rules } from "@react-three/eslint-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
    plugins: {
      "@react-three": ReactThreeFiber
    },
    rules: {
      "react/no-unknown-property": "off",
      "react-hooks/exhaustive-deps": "off",
    }
  },
];

export default eslintConfig;
