const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const { uglify } = require('rollup-plugin-uglify');
const env = process.env.NODE_ENV;

const config = {
    input: 'src/index.js',
    plugins: [
        babel(),
        commonjs()
    ],
    output: {
        file: 'dist/bundle.js',
        format: 'umd',// amd表示采用AMD标准，cjs为CommonJS标准，esm（或es）为ES模块标准
        name: 'PMA'// 设置 umd 必须设置name
    }
};

if (env === 'production') {
    config.plugins.push(
        uglify({
            compress: {
                pure_getters: true,
                unsafe: true,
                unsafe_comps: true,
            }
        })
    )
}


export default config;