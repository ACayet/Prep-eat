export interface Recipe {
    title: string;
    desc: string;
    categories: [string];
    ingredients: [string];
    directions: [string];
    calories: number;
    fat: number;
    protein: number;
    sodium: number;
    rating: number;
}
