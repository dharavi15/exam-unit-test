import { isCartItem, isProduct } from "./validation.js"

export const cart = [
  { id: 1, name: 'Toy Car' },
  { id: 2, name: 'Water Gun' }
]
let idCounter = 2002//it is used to generate a unique ID for each new item added to the cart.


 // -----------------------------------
  //  addToCart
  // -----------------------------------

function addToCart(newItem) {
	if( !isProduct(newItem) ) {
	 throw new Error("Invalid product")

	}
	const newId = idCounter
	const index = cart.findIndex(ci => ci.item.id === newItem.id)//We look for an existing cart item with the same id as the product we want to add. If we find it, we get its index. If not, we get -1
	if( index === -1 ) {
		const cartItem = { id: idCounter, amount: 1, item: newItem }//create a new cart item
		idCounter++
		cart.push(cartItem)//push this new item to the cart.
	} else {
		cart[index].amount++  //If the item is already in the cart, we don’t add it again. Instead, we just    increase the amount by 1
	}
}



 // -----------------------------------
  //  getCartItemCount
  // -----------------------------------
function getCartItemCount(cart) {  // the input should be an array that contains all cart items
  if (!Array.isArray(cart)) return 0  //check if the input is actually an array. We use Array.isArray(cart) to do this

  return cart.length // if input is valid array
}



// -----------------------------------
  // getItem
  // -----------------------------------
function getItem(index) {
  if (typeof index !== 'number' || index < 0 || index >= cart.length) {
    return undefined //If any of these conditions are true, we return undefined — which means the input is invalid or out of range
  }
  return cart[index]
}


 // -----------------------------------
  // getTotalCartValue
  // -----------------------------------
//this function adds up the total cost of all valid items in the cart. It checks each item's price and amount, multiplies them, and skips any item with invalid data. 
function getTotalCartValue(cart) { //input should be an array that contains cart items with price and amount
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


// -----------------------------------
  // removeFromCart
  // -----------------------------------
function removeFromCart(itemId) {
  if (typeof itemId !== 'number') {
    throw new Error("Invalid item ID")
  }

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
    throw new Error("Item not found in cart")
  }
}


// -----------------------------------
  // editCart
  // -----------------------------------
function editCart(itemId, newValues) {
  if (typeof itemId !== 'number') {
    throw new Error("Invalid item ID")
  }

  let index = -1
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === itemId) {
      index = i
      break
    }
  }

  if (index === -1) {
    throw new Error("Item not found in cart")
  }

  const item = cart[index]

  // Update name if valid
  if ('name' in newValues) {
    if (typeof newValues.name !== 'string') {
      throw new Error("Invalid name")
    }
    item.name = newValues.name
  }

  return "Item updated successfully"
}



// -----------------------------------
  // clearCart
  // -----------------------------------
function clearCart() {
  cart.length = 0      //sets the length of the cart array to 0. That means it removes all items from the cart.
  return "Cart cleared"
}

export { getCartItemCount, getItem, getTotalCartValue,addToCart, removeFromCart , editCart ,clearCart}





