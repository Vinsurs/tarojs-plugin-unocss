# tarojs-plugin-unocss

> A unocss plugin for [TaroJs](https://docs.taro.zone/en/docs/)

## Usage

### Intallation
```
npm i tarojs-plugin-unocss -D
```

### Apply plugin
`/config/index.js`

```ts

const config = {
  plugins: [
    [ "tarojs-plugin-unocss", {
        // see https://github.com/unocss/unocss/blob/main/packages/webpack/src/index.ts#L12
        webpackPluginOptions?: WebpackPluginOptions
        // see https://github.com/unocss/unocss/blob/main/packages/core/src/types.ts#L754
        userConfigDefaults?: UserConfigDefaults
      }
    ]
  ]
}
```
### Configure unocss
This plugin enables unocss preset `@unocss/preset-uno` and unocss transformer `@unocss/transformer-directives` by default. But you can also customize unocss configuration with `uno.config.ts` file on the top level of your root project.

```ts
// uno.config.ts
import { defineConfig } from "unocss"
export default defineConfig({
  // ...
})
```
> **Note**: in `weapp` platform, since some known restricts of miniprogram, unocss `separators` option is set to `["_"]` by default.