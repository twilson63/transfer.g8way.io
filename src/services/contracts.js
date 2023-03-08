const CONTRACTS_URL = 'https://contracts.warp.cc'
export const balances = (addr, page = 1) => fetch(`${CONTRACTS_URL}/balances?walletAddress=${addr}&page=${page}`)
  .then(res => res.json())
