import type { IPluginContext } from '@tarojs/service';
import { WebpackPluginOptions } from '@unocss/webpack';
import type { UserConfigDefaults } from 'unocss';
type IUnoPluginOptions = {
    webpackPluginOptions?: WebpackPluginOptions;
    userConfigDefaults?: UserConfigDefaults;
};
/**
 * A Unocss plugin for TaroJs
 */
declare const _default: (ctx: IPluginContext, pluginOpts: IUnoPluginOptions) => void;
export default _default;
