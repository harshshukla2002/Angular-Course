export class Ingredient {
  public name: string;
  public amount: number;

  constructor(ingredientName: string, ingredientAmount: number) {
    this.name = ingredientName;
    this.amount = ingredientAmount;
  }
}
