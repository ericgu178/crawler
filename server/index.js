require("asset-require-hook")({
    extensions: ["svg", "css", "less", "jpg", "png", "gif"],
    name: '/static/media/[name].[ext]'
});
process.env.NODE_ENV = 'development'

require("@babel/register")();
require("@babel/polyfill");
require("./app");