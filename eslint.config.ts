import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import { globalIgnores } from 'eslint/config'
// @ts-expect-error - eslint-plugin-import não tem tipos oficiais
import importPlugin from 'eslint-plugin-import'
import pluginVue from 'eslint-plugin-vue'

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },
  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  pluginVue.configs['flat/essential'],
  {
    rules: {
      'vue/multi-word-component-names': 0,
    },
  },
  vueTsConfigs.recommended,
  skipFormatting,

  // Plugin para ordenar imports
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      'import/order': [
        'error',
        {
          groups: [
            'builtin', // Node.js built-ins (fs, path, etc.)
            'external', // Dependências externas (vue, react, etc.)
            'internal', // Aliases (@/, ~/, etc.)
            'parent', // Parent imports (`../`)
            'sibling', // Sibling imports (`./`)
            'index', // Index imports (`./index`)
          ],
          pathGroups: [
            {
              pattern: '{vue,vue-router,pinia}', // Agrupa Vue e seus pacotes
              group: 'external',
              position: 'before', // Coloca antes de outros imports externos
            },
            {
              pattern: '@/**', // Aliases (ex: `@/components`)
              group: 'internal',
            },
          ],
          'newlines-between': 'always', // Linha em branco entre grupos
          alphabetize: {
            order: 'asc', // Ordem A-Z
            caseInsensitive: true,
          },
        },
      ],
    },
  },
)
