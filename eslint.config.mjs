import nextVitals from "eslint-config-next/core-web-vitals"
import nextTypeScriptConfig from "eslint-config-next/typescript"
import prettierConfig from "eslint-config-prettier"
import { defineConfig, globalIgnores } from "eslint/config"

const eslintConfig = defineConfig([
    ...nextVitals,
    ...nextTypeScriptConfig,
    prettierConfig,
    globalIgnores(["**/*.d.ts", ".next/**", "out/**", "build/**", "next-env.d.ts"])
])

export default eslintConfig
