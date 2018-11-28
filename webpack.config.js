var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public/build');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
	entry: APP_DIR + '/client/index.js',
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
    },
    resolve: {
      modules: [path.resolve(__dirname, './src'), 'node_modules'],
      extensions: ['*', '.js', '.jsx']
    },
    module : {
        rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              include : APP_DIR + '/client/',
              use: {
                loader: "babel-loader"
              }
            },
            {
              test: /\.css$/,
              use: [ 'style-loader', 'css-loader' ]
            },
            {
              test: /\.(gif|png|jpe?g|svg)$/i,
              use: ['file-loader?name=images/[hash].[ext]&publicPath=build' , { //[hash]-[name].[ext]
                  loader: 'image-webpack-loader',//'url-loader',
                  options: { 
                    mozjpeg: {
                      progressive: true,
                      quality: 65
                    },
                    // optipng.enabled: false will disable optipng
                    optipng: {
                      enabled: false,
                    },
                    pngquant: {
                      quality: '65-90',
                      speed: 4
                    },
                    gifsicle: {
                      interlaced: false,
                    },
                    // the webp option will enable WEBP
                    webp: {
                      quality: 75
                    }
                  } 

                },
              ]
            }

            
          ]
        
        
      }
}; 

module.exports = config;





// {
//   test: /\.(gif|png|jpe?g|svg)$/i,
//   use: [
//     'file-loader',
//     {
//       loader: 'image-webpack-loader',
//       options: {
//         bypassOnDebug: true, // webpack@1.x
//         disable: true, // webpack@2.x and newer
//       },
//     },
//   ]
// }

