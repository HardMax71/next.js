// Prints a stack trace to stderr while it loads, wrapped the way the evaluate runtime
// wraps console.error, like a PostCSS plugin that logs an Error's stack when it is
// imported. Then behaves like pool_test_worker.js.
const stack = new Error('logged while the worker loads').stack
process.stderr.write(`TURBOPACK_OUTPUT_B\n${stack}\nTURBOPACK_OUTPUT_E\n`)

require('./pool_test_worker.js')
