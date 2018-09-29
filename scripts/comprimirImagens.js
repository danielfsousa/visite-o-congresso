const path = require('path')
const walk = require('walk-sync')
const tinify = require('tinify')

const PASTA_IMAGENS = 'assets/images'
tinify.key = process.env.TINYPNG_API_KEY

const juntarPath = p => path.join(PASTA_IMAGENS, p)
const obterPathDeImagens = () => walk(PASTA_IMAGENS, { directories: false }).map(juntarPath)
const comprimir = file => tinify.fromFile(file).toFile(file)

obterPathDeImagens().map(comprimir)
