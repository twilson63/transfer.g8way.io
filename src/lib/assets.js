import { Async, ReaderT } from 'crocks'

const { ask, lift } = ReaderT(Async)

export const listAssets = (addr, page = 1) => ask(({ balances }) =>
  Async.fromPromise(balances)(addr, page)
).chain(lift)