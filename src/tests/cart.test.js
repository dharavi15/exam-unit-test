// importera här
import {  getCartItemCount , getItem , getTotalCartValue , addToCart , removeFromCart ,editCart,clearCart} from "../cart"


describe('Cart', () => {
	beforeEach(() => {
		// Denna kod körs före varje test. Det är för att rensa kundvagnen, så inte saker ligger kvar från föregående test.
		clearCart()
	})


	// -------------------------------------------------- //
	// Skriv dina testfall här

	// Du får ett test att börja med
	test('addToCart lägger till en ny produkt i kundvagnen', () => {
		const itemCountBefore = getCartItemCount()
		const input = { id: 1002, name: 'Vattenpistol', price: 40 }

		// addToCart returnerar inget - den påverkar kundvagnen
		// vi behöver använda getCartItemCount för att se om det har lagts till en ny produkt i kundvagnen
		addToCart(input)
		const itemCountAfter = getCartItemCount()

		expect(itemCountAfter).toBe(itemCountBefore + 1)
	})




})

test('dummy test in cart.test.js', () => {
  expect(true).toBe(true)
})


const cartProducts = [
      { id: 2001, amount: 1 , price: 100},
      { id: 2002, amount: 2 ,  price: 50}
    ]

	const newCartProduct = { id: 2003, amount: 3 , price: 300}

describe('cart check', () => {
  test('returns correct count for a cart with multiple items', () => {
	//Arrange
    const cart = cartProducts
	//Act
    const result = getCartItemCount(cart)
    //Assert
    expect(result).toBe(2)
  })

  test('returns 0 for an empty cart', () => {
	//Arrange
    const cart = []
	//Act
    const result = getCartItemCount(cart)
    //Assert
    expect(result).toBe(0)
  })

test('returns 0 if a cart is a number', () => {
	//Arrange
    const cart = 123;
	//Act
    const result = getCartItemCount(cart)
    //Assert
    expect(result).toBe(0)
  })


  //getItem test cases
  test('returns the correct item for index 0', () => {
	//Arrange
    const cart = 0
	//Act
    const result = getItem(cart)
    //Assert
    
	expect(result).toStrictEqual({ id: 1, name: 'Toy Car' })
  })


   test('returns the correct item for index 1', () => {
	//Arrange
    const cart = 1
	//Act
    const result = getItem(cart)
    //Assert
    
	expect(result).toStrictEqual({ id: 2, name: 'Water Gun' })
  })

  test('returns the undefined for negative items', () => {
	//Arrange
    const cart = -1
	//Act
    const result = getItem(cart)
    //Assert
    
	expect(result).toBe(undefined)
  })


   test('returns undefined for non-number index', () => {
	//Arrange
    const cart = "0"
	//Act
    const result = getItem(cart)
    //Assert
    
	expect(result).toBe(undefined)
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

  //testcases for addToCart


  //test cases for removeFromCart
   test('returns Invalid item ID if id is passed as a string', () => {
	//Arrange

    const id = "1"
	//Act
    const result = removeFromCart(id)
    //Assert
    
	expect(result).toStrictEqual("Invalid item ID")
  })
  
   test('returns Item removed from cart if valid id is passed', () => {
	//Arrange

    const id = 1
	//Act
    const result = removeFromCart(id)
    //Assert
    
	expect(result).toStrictEqual("Item removed from cart")
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


   test('returns Item updated successfully message when valid input is passed', () => {
	//Arrange

    const itemId = 2
    const newValues = { price: 15 }
	//Act
    const result = editCart(itemId,newValues)
    //Assert
    
	expect(result).toStrictEqual("Item updated successfully")
  })
  

  //Empty itemId is passed
  test('returns Invalid item ID message when itemId is missing', () => {
  // Arrange
  const itemId = undefined
  const newValues = { price: 100 }

  // Act
  const result = editCart(itemId, newValues)

  // Assert
  expect(result).toBe("Invalid item ID")
})



  //clearCart
  test('clears the cart and returns confirmation message', () => {
  // Arrange
  const cart = cartProducts

  // Act
  const result = clearCart()

  // Assert
  expect(cart.length).toBe(2)
  expect(result).toBe("Cart cleared")
})
})
