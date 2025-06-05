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

describe("Cart Functionality", () => {
  beforeEach(() => {
    clearCart()
  })

  // -----------------------------------
  //  addToCart
  // -----------------------------------
  test("adds a valid product to the cart", () => {
    const product = { id: 1111, name: "Ball", price: 30 }
    addToCart(product)
    expect(getCartItemCount(cart)).toBe(1)
  })

  test("throws error when product is null", () => {
    expect(() => addToCart(null)).toThrow("Invalid product")
  })

  test("throws error when product is missing price", () => {
    const invalidProduct = { id: 100, name: "Toy" }
    expect(() => addToCart(invalidProduct)).toThrow("Invalid product")
  })

  // -----------------------------------
  //  getCartItemCount
  // -----------------------------------
  test("returns 0 if input is not an array", () => {
    expect(getCartItemCount("not-an-array")).toBe(0)
  })

  test("returns correct count for valid array", () => {
    const input = [
      { id: 1, price: 20, amount: 1 },
      { id: 2, price: 10, amount: 2 }
    ]
    expect(getCartItemCount(input)).toBe(2)
  })

  // -----------------------------------
  // getItem
  // -----------------------------------
  test("returns item at index 0", () => {
    const product = { id: 2001, name: "Duck", price: 10 }
    addToCart(product)
    const result = getItem(0)
    expect(result).toStrictEqual({
      id: expect.any(Number),
      amount: 1,
      item: product
    })
  })

  test("returns undefined for invalid index", () => {
    const result = getItem(999)
    expect(result).toBeUndefined()
  })

  // -----------------------------------
  // getTotalCartValue
  // -----------------------------------
  test("returns 0 for empty cart", () => {
    expect(getTotalCartValue([])).toBe(0)
  })

  test("returns 0 if input is not an array", () => {
    expect(getTotalCartValue("invalid")).toBe(0)
  })

  test("returns correct total value for valid cart", () => {
    const testCart = [
      { price: 50, amount: 1 },
      { price: 25, amount: 2 }
    ]
    expect(getTotalCartValue(testCart)).toBe(100)
  })

  // -----------------------------------
  // removeFromCart
  // -----------------------------------
  test("throws error if item ID is not a number (removeFromCart)", () => {
    expect(() => removeFromCart("abc")).toThrow("Invalid item ID")
  })

  test("throws error if item is not found (removeFromCart)", () => {
    expect(() => removeFromCart(9999)).toThrow("Item not found in cart")
  })

  test("removes item if valid ID is provided", () => {
    const product = { id: 3000, name: "Frisbee", price: 15 }
    addToCart(product)
    const cartItem = cart.find(ci => ci.item.id === 3000)
    const result = removeFromCart(cartItem.id)
    expect(result).toBe("Item removed from cart")
    expect(cart.length).toBe(0)
  })

  // -----------------------------------
  // editCart
  // -----------------------------------
  test("throws error if item ID is not a number (editCart)", () => {
    expect(() => editCart("xyz", { name: "NewName" })).toThrow("Invalid item ID")
  })

  test("throws error if item is not found (editCart)", () => {
    expect(() => editCart(8888, { name: "Ghost" })).toThrow("Item not found in cart")
  })

  test("throws error if name is not a string (editCart)", () => {
    const product = { id: 4001, name: "Car", price: 50 }
    addToCart(product)
    const cartItem = cart.find(ci => ci.item.id === 4001)
    expect(() => editCart(cartItem.id, { name: 123 })).toThrow("Invalid name")
  })

  test("updates item name successfully (editCart)", () => {
    const product = { id: 4002, name: "Boat", price: 45 }
    addToCart(product)
    const cartItem = cart.find(ci => ci.item.id === 4002)
    const result = editCart(cartItem.id, { name: "Ship" })
    expect(result).toBe("Item updated successfully")
    expect(cartItem.name).toBe("Ship")
  })

  // -----------------------------------
  // clearCart
  // -----------------------------------
  test("empties the cart and returns confirmation message", () => {
    const product = { id: 5000, name: "Plane", price: 60 }
    addToCart(product)
    const result = clearCart()
    expect(result).toBe("Cart cleared")
    expect(cart.length).toBe(0)
  })
})
