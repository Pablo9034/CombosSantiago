import { z } from "astro:content"
import Combos from './combos.json';

const CombosSchema = z.array(
    z.object({
        title: z.string(),
        price: z.string(),
        content: z.array(z.object({ item: z.string(), weight: z.string() }))
    })
);

export const getCombos = ()=> {
    const combos = CombosSchema.parse(Combos);
    return combos;
}