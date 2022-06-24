import mockProducts from "../mockProducts.json";
export class APIClient {
  static async getProducts() {
    return mockProducts;
  }
}
