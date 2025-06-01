/*
Din uppgift:
- skriv testfall för alla funktionerna nedan i cart.test.js (RED)
- skriv kod här för att implementera funktionerna (GREEN)

Tips:
- börja med att identifiera VAD som ska testas.
- om du testar t.ex. removeFromCart får du använda addToCart i början av testet. Den kommer nämligen ha sina egna tester

*/
// function getCartItemCount()
// function getItem(index)
// function getTotalCartValue()
// function addToCart(newItem)
// function removeFromCart(itemId)
// function editCart(itemId, newValues)
// function clearCart()
// -------------------------------------------------- //

import { isCartItem, isProduct } from "./validation.js"

const cart = [
  { id: 1, name: 'Toy Car' },
  { id: 2, name: 'Water Gun' }
]
let idCounter = 2002
// -------------------------------------------------- //


// Din kod börjar här
// Du får en funktion att börja med
function addToCart(newItem) {
	if( !isProduct(newItem) ) {
		return false
	}

	const newId = idCounter
	const index = cart.findIndex(ci => ci.item.id === newItem.id)
	if( index === -1 ) {
		const cartItem = { id: idCounter, amount: 1, item: newItem }
		idCounter++
		cart.push(cartItem)
	} else {
		cart[index].amount++
	}
}


function getCartItemCount(cart) {
  if (!Array.isArray(cart)) return 0

  return cart.length
}


function getItem(index) {
  if (typeof index !== 'number' || index < 0 || index >= cart.length) {
    return undefined
  }

  return cart[index]
}

function getTotalCartValue(cart) {
  if (!Array.isArray(cart)) {
    return 0
  }
 else{
  let total = 0

  // Loop through each item in the cart
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i]

    // Check if both price and amount are numbers
    if (typeof item.price === 'number' && typeof item.amount === 'number') {
      total = total + item.price * item.amount
    } else {
      // If price or amount is invalid, skip this item
      continue
    }
  }
 
  return total
 }
}


 function removeFromCart(itemId)
  {
	if (typeof itemId == 'number'){
	 let index = -1

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === itemId) {
      index = i
      break
    }
  }

  if (index !== -1) {
    cart.splice(index, 1)
    return "Item removed from cart"
  } else {
    return "Item not found in cart"
  }}
	else { 
		return "Invalid item ID"
	}
 }
  


function editCart(itemId, newValues) {
  if (typeof itemId !== 'number') {
    return "Invalid item ID"
  }

  let index = -1

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === itemId) {
      index = i
      break
    }
  }

  if (index === -1) {
    return "Item not found in cart"
  }

  const item = cart[index]


  // Update name if valid
  if ('name' in newValues) {
    if (typeof newValues.name !== 'string') return "Invalid name"
    item.name = newValues.name
  }

  return "Item updated successfully"
}

function clearCart() {
  cart.length = 0
  return "Cart cleared"
}


export { getCartItemCount, getItem, getTotalCartValue,addToCart, removeFromCart , editCart ,clearCart}



