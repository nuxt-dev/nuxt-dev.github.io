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
            normal: "always",
            void: "always",
            component: "always",
          },
        },
      ],
      "vue/max-attributes-per-line": [
        "warn",
        {
          singleline: 6,
          multiline: 1,
        }
      ],
      "vue/singleline-html-element-content-newline": "off",
    },
  }
)
