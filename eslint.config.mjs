// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  {
    rules: {
      // 'vue/no-v-html': 'off',
      "no-case-declarations": "off",
      "vue/html-self-closing": [
        "error",
        {
          html: {
            normal: "always",
            void: "always",
            component: "always",
          },
        },
      ],
      "vue/max-attributes-per-line": [
        "warn",
        {
          singleline: 5,
          multiline: 1,
        }
      ],
      "vue/singleline-html-element-content-newline": "off",
    },
  }
).override(
  "nuxt/typescript/rules",
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off'
    },
  },
)
