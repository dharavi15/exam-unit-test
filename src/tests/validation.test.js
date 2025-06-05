import { isCartItem, isProduct } from "../validation.js";

const exampleProduct = {
	id: 1001,
	name: 'Badanka',
	price: 500
};

const exampleCartObject = {
	id: 2001,
	amount: 1,
	item: exampleProduct
};

describe("Validation", () => {

	// This test checks if a correct cart item returns true
	test("returns true for a valid cart item", () => {
		const input = exampleCartObject;
		const result = isCartItem(input);
		expect(result).toBe(true);
	});

	// These are all the invalid cart items we want to test
	const invalidCartCases = [
		["missing amount", { id: 2001, item: exampleProduct }],
		["missing id", { amount: 1, item: exampleProduct }],
		["missing item", { id: 2001, amount: 1 }],
		["id is a string", { id: "2001", amount: 1, item: exampleProduct }],
		["id is null", { id: null, amount: 1, item: exampleProduct }],
		["amount is a string", { id: 2001, amount: "1", item: exampleProduct }],
		["amount is null", { id: 2001, amount: null, item: exampleProduct }],
		["item is a string", { id: 2001, amount: 1, item: "NotAnObject" }],
		["item is null", { id: 2001, amount: 1, item: null }],
	];

	// This runs the same test for each invalid cart item
    test.each(invalidCartCases)("returns false for invalid cart", (caseName, invalidCart) => {
	expect(isCartItem(invalidCart)).toBe(false);
    });
});


	describe("Validation - isProduct", () => {

  // This test checks if a correct product object returns true
  test("returns true for a valid product object", () => {
    const validProduct = { id: 1001, name: "Toy Car", price: 99 };
    const result = isProduct(validProduct);
    expect(result).toBe(true);
  });

  // These are all the invalid product objects we want to test
  const invalidProductCases = [
    ["returns false if id is a string", { id: "1001", name: "Toy Car", price: 99 }],
    ["returns false if name is a number", { id: 1001, name: 12345, price: 99 }],
    ["returns false if price is a string", { id: 1001, name: "Toy Car", price: "99" }],
    ["returns false if id is missing", { name: "Toy Car", price: 99 }],
    ["returns false if name is missing", { id: 1001, price: 99 }],
    ["returns false if price is missing", { id: 1001, name: "Toy Car" }],
    ["returns false if empty object is passed", {}],
  ];

  // Loop through each invalid case and test it
  invalidProductCases.forEach(function (testCase) {
    const testName = testCase[0];
    const input = testCase[1];

    test(testName, function () {
      const result = isProduct(input);
      expect(result).toBe(false);
    });
  });

});