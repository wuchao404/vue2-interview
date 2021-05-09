module.exports= {
    chainWebpack: config => {
        config.module.test(/\.tsx?$/).use('ts-loader').loader('ts-loader').end();
    }
}