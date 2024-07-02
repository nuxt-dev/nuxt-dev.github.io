// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  {
    rules: {
      // "quotes": ["error", "double"],
      // "semi": ['error', 'always']
      "arrow-parens": ["error", "as-needed", { "requireForBlockBody": true }],
      "vue/html-self-closing": [
        "error",
        {
          html: {
            void: "always",
            // normal: "never",
            // component: "always",
          },
          // svg: "always",
          // math: "always",
        },
      ],
      "vue/singleline-html-element-content-newline": "off",
      // "vue/multiline-html-element-content-newline": "off",
    },
  }
)
