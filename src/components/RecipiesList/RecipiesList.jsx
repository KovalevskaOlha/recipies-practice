import { RecipiesItem } from "../RecipiesItem/RecipiesItem";
import recipies from "../../data/recipies.json";
import styled from "styled-components";
 
const List = styled.ul`
 display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
  gap: 30px; 
  padding: 20px;
  margin: 0 auto;
  max-width: 1000px; 
  list-style: none;
`;

export const RecipiesList = () => {
    return (
        <List>
            {recipies.map((recipe) => {
                return <RecipiesItem recipe={recipe} />
            })}
        </List> 
    );
 };