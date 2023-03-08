import { test, assert } from 'vitest'
import { listAssets } from './assets'
import { balances } from '../services/contracts'

test('ok', async () => {
  const results = await listAssets('vh-NTHVvlKZqRxc8LyyTNok65yQ55a_PJ1zWLb9G2JI', 2).runWith({ balances }).toPromise()
  console.log(results)
  assert.ok(true)
})