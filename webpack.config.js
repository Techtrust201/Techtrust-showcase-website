const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.tsx', // Votre point d'entrée TypeScript
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  // Activez la résolution des extensions .ts et .tsx dans les imports
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // Utilisez cette regex pour cibler les fichiers TypeScript
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
      // La configuration pour babel-loader est supprimée car ts-loader s'en chargera
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3000, // Vous pouvez spécifier le port ici
  },
};
