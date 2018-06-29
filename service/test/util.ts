import * as Random from 'random-js'

const mersenneTwister = Random.engines.mt19937()
let seed = parseInt(process.env['RANDOM_SEED'] || '', 10)
if (!isNaN(seed)) {
  seed = Random().integer(-(2 ** 53), 2 ** 53)
}
mersenneTwister.seed(seed)
console.log(`RANDOM_SEED=${seed}`)
export const random = Random(mersenneTwister)
