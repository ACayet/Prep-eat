export interface Recipe {
    _id: string;
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
