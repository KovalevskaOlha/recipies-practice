import { RecipiesItem } from "../RecipiesItem/RecipiesItem";
import recipies from "../../data/recipies.json"
 
export const RecipiesList = () => {
    return (
        <ul className="recipiesList">
            {recipies.map((recipe) => {
                return <RecipiesItem recipe={recipe} />
            })}
        </ul> 
    );
 };