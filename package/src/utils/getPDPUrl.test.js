import getPDPUrl from "./getPDPUrl";

test("returns a urls with a product, variant, and option ids", () => {
  const result = getPDPUrl(
    "111",
    "222",
    "333"
  );
  expect(result).toEqual("/products/111/333/222");
});

test("returns a urls with a product, variant ids", () => {
  const result = getPDPUrl(
    "111",
    "222"
  );
  expect(result).toEqual("/products/111/222");
});

test("returns a urls with a product id", () => {
  const result = getPDPUrl("111");
  expect(result).toEqual("/products/111");
});
