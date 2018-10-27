#!/usr/bin/env node

const program = require('commander')
const shell = require('shelljs')
const package = require('../package.json')

program
  .version(package.version)
  .command('create <name>')
  // .description('创建一个新项目')
  .action((name) => {
    if (!shell.which('git')) {
      shell.echo('Sorry, this script requires git')
      shell.exit(1)
    }
    shell.mkdir(name)
    shell.exec(`git clone --depth=1 https://github.com/ArcherZhao/tiny-wxapp.git ${name}`)
    shell.cd(name)
    shell.rm('-rf', '.git')
  })

program.parse(process.argv)