const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 1st method
      css:{
        loaderOptions:{
          "sass":{
            additionalData: `
            @import "@/assets/temp.scss";
            `
          }
        }
      }

  // 2nd method:
        // chainWebpack:config =>{
        //   config.module
        //   .rule("scss")
        //   .test(/\.scss$/)
        //   .use(['style-loader','css-loader','sass-loader'])
        //   .end()
        // }
})