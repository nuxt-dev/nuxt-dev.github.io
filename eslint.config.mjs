// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  {
    rules: {
      "no-case-declarations": "off",
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
    },
  }
)
