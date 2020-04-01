module.exports = env => {

  const {
    mode,
    watch
  } = env
    /**
     * If `env` is not defined : 
     *  here are set the default values. */
    || {
      mode: 'development',
      watch: true
    }
  
  return {
    mode,
    /**
     * `env.watch` is parsed as a string when
     *  set though the command lines, so `false`
     *  is kinda detected here. */
    watch: watch === true,
    output: {
      filename: '[name].js'
    },
    module: {
      rules: [
        {
          test: /\.svg$/,
          use: [
            {
              loader: "babel-loader"
            },
            {
              loader: "react-svg-loader",
              options: {
                jsx: true
              }
            }
          ]
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [{
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/react'
              ]
            }
          }]
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    }
  }
}