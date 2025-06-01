//  Import all cart functions from the cart module
import {
  getCartItemCount,
  getItem,
  getTotalCartValue,
  addToCart,
  removeFromCart,
  editCart,
  clearCart,
  cart
} from "../cart"

// Test suite for cart functions
const cartProducts = [
      { id: 2001, amount: 1 , price: 100},
      { id: 2002, amount: 2 ,  price: 50}
    ]

describe('Cart basic add-to-cart test', () => {
  beforeEach(() => {
    // Clear cart before each test
    clearCart()
  })
//Test for addToCart
  test('addToCart lägger till en ny produkt i kundvagnen', () => {
    //Arrange
    const itemCountBefore = getCartItemCount()
    const input =[ { id: 1111, name: 'Test Item', price: 20 }]
    //Act
    const itemCountAfter = getCartItemCount(input)
    //Assert
    expect(itemCountAfter).toBe(itemCountBefore + 1)
  })
})

//Test for getCartItem
 test('returns correct count for a cart with multiple items', () => {
   //Arrange
   const input =[ { id: 1111, name: 'Test Item', price: 20 },
    { id: 1112, name: 'Test Item2', price: 50 } ]
    //Act
    const result = getCartItemCount(input)
    //Assert
    expect(result).toBe(2) // We added 2 products in beforeEach
  })

 //getItem test cases
test('returns the correct item for index 0', () => {
  //Arrange
const product = { id: 1002, name: 'Vattenpistol', price: 40 }
    addToCart(product)
  //Act
  const result = getItem(0)
  //Assert
  expect(result).toStrictEqual({
    id: expect.any(Number),
    amount: 1,
    item: product
  })
})

  test('returns the correct item for index 1', () => {
    // Arrange
    const item1 = { id: 1002, name: 'Vattenpistol', price: 40 }
    const item2 = { id: 1003, name: 'Water Gun', price: 60 }
    addToCart(item1)
    addToCart(item2)
    // Act
    const result = getItem(1)
    // Assert
    expect(result).toStrictEqual({
      id: expect.any(Number),
      amount: 1,
      item: item2
    })
  })

// getTotalCartValue test cases
  test('returns 0 for empty cart', () => {
	//Arrange
  const cart = []
	//Act
  const result = getTotalCartValue(cart)
  //Assert
	expect(result).toBe(0)
  })

  test('returns 0 if cart is not an array', () => {
	//Arrange
  const cart = "not an array"
	//Act
  const result = getTotalCartValue(cart)
  //Assert
	expect(result).toBe(0)
  })

  test('returns 0 if cart is number', () => {
	//Arrange
  const cart = 123
	//Act
  const result = getTotalCartValue(cart)
  //Assert
  expect(result).toBe(0)
  })

   test('returns total for valid cart items', () => {
	//Arrange
    const cart = cartProducts
	//Act
    const result = getTotalCartValue(cart)
  //Assert
	expect(result).toBe(200)
  })

//test cases for removeFromCart
   test('returns Invalid item ID if id is passed as a string', () => {
	  //Arrange
    const id = "1"
	  //Act
    const result = removeFromCart(id)
    //Assert
    expect(result).toStrictEqual("Invalid item ID")
  })
  

  test('returns Item not found in cart if invalid id is passed', () => {
	//Arrange
   const id = 100
	//Act
    const result = removeFromCart(id)
  //Assert
	expect(result).toStrictEqual("Item not found in cart")
  })
  
  //test cases of editCart
   test('returns Invalid item ID message when invalid itemId is passed', () => {
	//Arrange
    const itemId = "1"
    const newValues = { price: 122 }
	//Act
    const result = editCart(itemId,newValues)
  //Assert  
	expect(result).toStrictEqual("Invalid item ID")
  })

  //Empty itemId is passed
  test('returns Invalid item ID message when itemId is missing', () => {
  // Arrange
  const itemId = "eat"
  const newValues = { price: 100 }

  // Act
  const result = editCart(itemId, newValues)

  // Assert
  expect(result).toBe("Invalid item ID")
})

test('empties the cart and returns confirmation message', () => {
    // Act
    const result = clearCart()

    // Assert
    expect(cart.length).toBe(0)
    expect(result).toBe("Cart cleared")
  })