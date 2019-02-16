const fs = require('fs')
const rollup = require('rollup')
const UglifyJS = require("uglify-es")
const prettyBytes = require('pretty-bytes')
const gzipSize = require('gzip-size')

const build = async (inputFile, outputFile, format, name) => {
    const bundle = await rollup.rollup({
        input: inputFile
    })
    const output = await bundle.generate({
        file: outputFile,
        format: format,
        name: name
    })
    const result = UglifyJS.minify(output.output[0].code)
    console.log(prettyBytes(result.code.length))
    console.log(prettyBytes(gzipSize.sync(result.code)))
    fs.writeFileSync(outputFile, result.code)
}

build('src/index.js', 'dist/button.min.js', 'umd', 'button')


