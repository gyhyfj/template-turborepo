#!/usr/bin/env zx
/* eslint-disable */
// @ts-check
import 'zx/globals'

const msgPath = path.resolve('.git/COMMIT_EDITMSG')
const msg = fs.readFileSync(msgPath, 'utf-8').trim()

const commitRE =
  /^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release)(\(.+\))?: .{1,50}/

if (!commitRE.test(msg)) {
  console.error(
    `\n${chalk.bgRed.white(' ERROR ')} ${chalk.red(
      `invalid commit message format`
    )}\n`
  )
  process.exit(1)
}
