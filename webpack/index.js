import webpack from 'webpack';
import CleanPlugin from 'clean-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import htmlTemplate from 'html-webpack-template';
import autoprefixer from 'autoprefixer';

export const indexTemplate = (options) => ({
  plugins: [
    new HtmlWebpackPlugin({
      template: htmlTemplate,
      title: options.title,
      appMountId: options.appMountId,
      inject: false,
    }),
  ],
});

export const loadJSX = (include) => ({
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel?cacheDirectory'],
        include,
      },
    ],
  },
});

export const loadIsparta = (include) => ({
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['isparta'],
        include,
      },
    ],
  },
});

export const lintJSX = (include) => ({
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['eslint'],
        include,
      },
    ],
  },
});

export const enableReactPerformanceTools = () => ({
  module: {
    loaders: [
      {
        test: require.resolve('react'),
        loader: 'expose?React',
      },
    ],
  },
});

export const devServer = (options) => {
  const ret = {
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      stats: 'errors-only',
      host: options.host,
      port: options.port,
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin({ multiStep: true }),
    ],
  };

  if (options.poll) {
    ret.watchOptions = {
      aggregateTimeout: 300,
      poll: 1000,
    };
  }

  return ret;
};

export const setupCSS = (paths) => ({
  postcss: () => [autoprefixer],
  module: {
    loaders: [
      {
        test: /\.(css|scss)$/,
        loaders: [
          'style',
          'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', // eslint-disable-line max-len
          'postcss?sourceMap',
          'resolve-url',
          'sass?sourceMap',
        ],
        include: paths,
      },
    ],
  },
});

export const extractCSS = (paths) => ({
  module: {
    loaders: [
      {
        test: /\.(css|scss)$/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!resolve-url!sass'), // eslint-disable-line max-len
        include: paths,
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('[name].[chunkhash].css'),
  ],
});

export const minify = () => ({
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
    }),
  ],
});

export const setFreeVariable = (key, value) => {
  const env = {};
  env[key] = JSON.stringify(value);

  return {
    plugins: [new webpack.DefinePlugin(env)],
  };
};

export const extractBundle = (options) => {
  const entry = {};
  entry[options.name] = options.entries;

  return {
    entry,
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        names: [options.name, 'manifest'],
        minChunks: Infinity,
      }),
    ],
  };
};

export const clean = (path) => ({
  plugins: [
    new CleanPlugin([path], { root: process.cwd() }),
  ],
});
