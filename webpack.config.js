const path = require('path');

//webpack.config.js
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },


    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader"
                //options: {
                  //presets: ['env']
                //}
            },
            {
                test: /\.css$/,
                  use: [
                      { loader: 'style-loader'},
                      {
                          loader: 'css-loader',
                          options: {
                            modules: true
                          }
                      }
                ]
            }
        ]
    }
};
