import antfu from '@antfu/eslint-config'

export default antfu(
  {},
  {
    files: [
      'packages/admin/**/*.{js,vue}',
    ],
    unocss: true
  }
)