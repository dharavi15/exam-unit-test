function isCartItem(maybeCartItem) {
    if (!maybeCartItem) return false

  const hasId = typeof maybeCartItem.id === 'number'
  const hasAmount = typeof maybeCartItem.amount === 'number'
  const hasItem = typeof maybeCartItem.item === 'object' && maybeCartItem.item!==null
  console.log({ hasId, hasAmount, hasItem }) 
  return hasId && hasAmount && hasItem
}

function isProduct(maybeProduct) {
  if (   maybeProduct == null || typeof maybeProduct !== 'object') return false

  const { id, name, price } = maybeProduct

  if (typeof id !== 'number') return false
  if (typeof name !== 'string') return false
  if (typeof price !== 'number') return false

  console.log({ id, name, price })
  return true
}

export { isCartItem, isProduct }