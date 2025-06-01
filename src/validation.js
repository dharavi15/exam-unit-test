// Remember to use RED, GREEN, REFACTOR
// 1. pick one test case in validation.test.js
// 2. write the code, verify that the test is RED
// 3. write code in this file so that the test case becomes GREEN
// 4. refactor as neccessary before you move on to the next
// 5. repeat

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



