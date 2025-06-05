function isCartItem(maybeCartItem) { //it's used to check if a given input/parameter is a valid cart item object.
    if (!maybeCartItem) return false //If the input is null, undefined, or any falsy value, the function immediately returns false
  const hasId = typeof maybeCartItem.id === 'number'
  const hasAmount = typeof maybeCartItem.amount === 'number'
  const hasItem = typeof maybeCartItem.item === 'object' && maybeCartItem.item!==null
  console.log({ hasId, hasAmount, hasItem }) //checks to the console,what is passed or failed
  return hasId && hasAmount && hasItem//three conditions must be true. Only then do we return true
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



