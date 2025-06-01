/*import { isCartItem, isProduct } from "../validation.js"
// Examples of a valid product and a valid cart item. You may use these when testing below.
const exampleProduct = {
	id: 1001,
	name: 'Badanka',
	price: 500
}

const exampleCartObject = {
	id: 2001,
	amount: 1,
	item: exampleProduct
}

// Group tests using "describe"
describe('Validation', () => {

	// Använd en "test" eller "it" (de är synonymer) för varje testfall
	/* Exempel på syntax:
	test('beskriv testfallet', () => {
		// här skriver du testkoden
		// avsluta alltid med "expect"
	})
	


	// ---------------------------------------------
	// Följande testfall ska du implementera. Det är tillåtet att använda Joi. Gör i så fall ett schema för varje sorts objekt du vill kunna validera. Du får även ändra texten och du t.ex. vill skriva på svenska i stället för engelska.
	// (Ta bort dessa kommentarer när du är klar)

	// 1. it returns true for a valid cart object
	// 2. it returns false for invalid cart objects

	// 3. it returns true for a valid product
	// 4. it returns false for invalid cart objects
})  */


import{isCartItem, isProduct } from "../validation.js"

const exampleProduct = {
	id: 1001,
	name: 'Badanka',
	price: 500
}

const exampleCartObject = {
	id: 2001,
	amount: 1,
	item: exampleProduct
}


describe("Validation", () => {
	test("returns true for a valid cart item", () => {
		// Arrange
		const input = exampleCartObject

		// Act
		const result = isCartItem(input)

		// Assert
		expect(result).toBe(true)
	})

	test("returns false if cart item is missing amount", () => {
		// Arrange
		const invalidCart = {
			id: 2001,
			item: exampleProduct
		}

		// Act
		const result = isCartItem(invalidCart)

		// Assert
		expect(result).toBe(false)
	})

	test("returns false if cart item is missing id", () => {
		// Arrange
		const invalidCart = {
			amount: 2001,
			item: exampleProduct
		}

		// Act
		const result = isCartItem(invalidCart)

		// Assert
		expect(result).toBe(false)
	})

	test("returns false if cart item is missing item", () => {
		// Arrange
		const invalidCart = {
			id: 2001,
			amount: 2
		}

		// Act
		const result = isCartItem(invalidCart)

		// Assert
		expect(result).toBe(false)
	})

	//  Invalid ID
  test("returns false if id is string", () => {
		// Arrange
		const invalidCart = {
			id: '2001',
			amount: 2,
			item: exampleProduct
		}

		// Act
		const result = isCartItem(invalidCart)

		// Assert
		expect(result).toBe(false)
	})

	//Invalid Amount
	test("returns false if amount is a string",() => {
		//Arrange
		const invalidCart = {
			id:2001,
			amount:'2',
			item: exampleProduct

		}

		//Act
		const result = isCartItem(invalidCart)

		//Assert
		expect(result).toBe(false)
	})
	//Invalid item
	test("returns false if item is not a object",() => {
		//Arrange
		const invalidCart = {
			id:2001,
			amount: 2,
			item: "NotAnOject"
    }
			//Act
		    const result = isCartItem(invalidCart)

			//Assert
			expect(result).toBe(false)
		
	}) 


	//id is null
	test("returns false if id is null", () => {
		// Arrange
		const invalidCart = {
			id: null,
			amount: 2,
			item: exampleProduct
		}

		// Act
		const result = isCartItem(invalidCart)

		// Assert
		expect(result).toBe(false)
	})

	// Amount null
		test("returns false if amount is null", () => {
		// Arrange
		const invalidCart = {
			id: 4,
			amount: null,
			item: exampleProduct
		}

		// Act
		const result = isCartItem(invalidCart)

		// Assert
		expect(result).toBe(false)
	})
	// item null
	
	test("returns false if item is null",() => {
		//Arrange
		const invalidCart = {
			id:4,
			amount:2,
			item: null
		}
		//Act
		const result = isCartItem(invalidCart)

		//Assert
		expect(result).toBe(false)
	})

	

	//isProduct test cases
	//Valid product
	test("returns true for a valid product object", () => {
		// Arrange
		const validProduct = { id: 1001, name: 'Toy Car', price: 99 }

		// Act
		const result = isProduct(validProduct)

		// Assert
		expect(result).toBe(true)
	})

	//id is a string
	test("returns false if id is a string", () => {
		// Arrange
		const validProduct = { id: '1001', name: 'Toy Car', price: 99 }

		// Act
		const result = isProduct(validProduct)

		// Assert
		expect(result).toBe(false)
	})

	//name is a number-false
	test("returns false if name is a number", () => {
	// Arrange
	const invalidProduct = { id: 1001, name: 12345, price: 99 }

	// Act
	const result = isProduct(invalidProduct)

	// Assert
	expect(result).toBe(false)
})
	// price is a string-false
	test("returns false if price is a string", () => {
	// Arrange
	const invalidProduct = { id: 1001, name: "Toy Car", price: "99" }

	// Act
	const result = isProduct(invalidProduct)

	// Assert
	expect(result).toBe(false)
})

	//id is missing
	test("returns false if id is a string", () => {
		// Arrange
		const validProduct = {  name: 'Toy Car', price: 99 }

		// Act
		const result = isProduct(validProduct)

		// Assert
		expect(result).toBe(false)
	})
	//name  is missing
	test("returns false if name is missing", () => {
	// Arrange
	const invalidProduct = { id: 1001, price: 99 }

	// Act
	const result = isProduct(invalidProduct)

	// Assert
	expect(result).toBe(false)
})

	// price is missing
test("returns false if price is missing", () => {
	// Arrange
	const invalidProduct = { id: 1001, name: 'Toy Car' }

	// Act
	const result = isProduct(invalidProduct)

	// Assert
	expect(result).toBe(false)
})

	//empty object
	test("returns false if empty object is passed", () => {
		// Arrange
		const validProduct = {  }

		// Act
		const result = isProduct(validProduct)

		// Assert
		expect(result).toBe(false)
	})
})