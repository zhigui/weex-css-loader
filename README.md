# weex-css-loader

This is a part from [weex-vue-loader](https://github.com/weexteam/weex-vue-loader).
In weex-loader your can't use other pre-processors. `weex-css-loader ` allows you to use other loaders to process your style.

## Install

`npm install weex-css-loader --save-dev`


## Usage
``` js
module: {
  rules: [
    {
      test: /\.vue$/,
      loader: 'weex-loader',
      options: {
        loaders: {
          stylus: ['weex-css-loader', {
            loader: 'stylus-loader',
            options: {
              import: [
                path.join(__dirname, '../path/to.styl')
              ]
            }
          }]
        }
      }
    }
  ]
}
```
