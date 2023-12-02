export const queries = {
  getAllProducts: "SELECT * FROM Products",
  createProduct:
    "INSERT INTO Products (name, description, quantity) VALUES (@name, @description, @quantity)",
  getProductById: "SELECT * FROM Products WHERE Id = @Id",
  deleteProduct: "DELETE FROM [crudsql].[dbo].[Products] WHERE Id = @Id",
  getTotalProducts: "SELECT COUNT(*) FROM [crudsql].[dbo].[Products]",
  updateProductById:
    "UPDATE Products SET Name = @name, Description = @description, Quantity = @quantity WHERE Id = @Id",
};
