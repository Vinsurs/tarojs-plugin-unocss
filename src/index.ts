import type { IPluginContext } from '@tarojs/service'
import webpackChain from 'webpack-chain'
import unocssWebpack, { WebpackPluginOptions } from '@unocss/webpack'
import type { UserConfigDefaults } from 'unocss'
import { presetUno, transformerDirectives } from 'unocss'

type IUnoPluginOptions = {
  webpackPluginOptions?: WebpackPluginOptions
  userConfigDefaults?: UserConfigDefaults
}
/**
 * A Unocss plugin for TaroJs
 */
export default (ctx: IPluginContext, pluginOpts: IUnoPluginOptions) => {
  const { webpackPluginOptions = {}, userConfigDefaults = {} } = pluginOpts || {}
  ctx.modifyWebpackChain(({ chain }: { chain: webpackChain }) => {
    const isH5 = process.env.TARO_ENV === 'h5'
    if (isH5 && !userConfigDefaults.separators) {
      userConfigDefaults.separators = ["_"]
    }
    chain
      .plugin("unocssWebpackPlugin")
      .use(unocssWebpack, [
        {
          ...webpackPluginOptions,
          transformers: [
            transformerDirectives(),
            ...webpackPluginOptions.transformers||[]
          ],
        } as WebpackPluginOptions,
        {
          ...userConfigDefaults,
          presets: [
            presetUno({ preflight: false, arbitraryVariants: false }),
            ...userConfigDefaults.presets||[]
          ],
        } as UserConfigDefaults
      ])
  })
}
