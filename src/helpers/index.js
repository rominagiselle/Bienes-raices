export const propertyPrice = (price) =>
  Number(price).toLocaleString("en-US", {
    style: "currency",
    currency: "EUR",
  });

  export default propertyPrice;