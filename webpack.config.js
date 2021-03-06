var Encore = require('@symfony/webpack-encore')

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev')
}

Encore
  // directory where compiled assets will be stored
  .setOutputPath('public/dist/')
  // public path used by the web server to access the output path
  .setPublicPath('/dist')
  // only needed for CDN's or sub-directory deploy
  .setManifestKeyPrefix('dist/')

  /*
   * ENTRY CONFIG
   *
   * Add 1 entry for each "page" of your app
   * (including one that's included on every page - e.g. "app")
   *
   * Each entry will result in one JavaScript file (e.g. app.js)
   * and one CSS file (e.g. app.css) if your JavaScript imports CSS.
   */
  .addEntry('ie11', './src/ie11.js')
  .addEntry('entry', './src/entry.js')

  // will require an extra script tag for runtime.js
  // but, you probably want this, unless you're building a single-page app
  .disableSingleRuntimeChunk()

  /*
   * FEATURE CONFIG
   *
   * Enable & configure other features below. For a full
   * list of features, see:
   * https://symfony.com/doc/current/frontend.html#adding-more-features
   */
  .cleanupOutputBeforeBuild()
  .enableBuildNotifications()
  .enableSourceMaps(!Encore.isProduction())
  // enables hashed filenames (e.g. app.abc123.css)
  // .enableVersioning(Encore.isProduction())

  // enables @babel/preset-env polyfills
  .configureBabelPresetEnv((config) => {
    config.useBuiltIns = 'usage'
    config.corejs = 3
  })

  .configureBabel(function (babelConfig) {
    babelConfig.plugins.push('@babel/plugin-proposal-class-properties')
  })

  // enables Sass/SCSS support
  .enableSassLoader()

  // uncomment if you use API Platform Admin (composer req api-admin)
  .enableReactPreset()

  .configureUrlLoader({
    images: {
      esModule: false
    }
  })

  // Enable copy of static assets
  .copyFiles({
    from: './src/images',
    // if versioning is enabled, add the file hash too
    // to: 'images/[path][name].[hash:8].[ext]',
    to: 'images/[path][name].[ext]',
    // only copy files matching this pattern
    pattern: /\.(png|jpg|jpeg)$/
  })

// For production we want to use a relative output path.
// @TODO There must be a better way to do this.
if (Encore.isProduction()) {
  Encore.setPublicPath('.')
}

module.exports = Encore.getWebpackConfig()
