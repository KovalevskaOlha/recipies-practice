import styled from "styled-components";

const Item = styled.li`
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

const Img = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 15px;
`;

const Title = styled.h2`
  font-size: 1.3rem;
  font-weight: 700;
  margin: 12px 0;
  color: #222;
`;

const Text = styled.p`
  font-size: 1rem;
  color: #444;
  margin: 6px 0;
`;

const DifficultyText = styled.p`
  font-size: 1rem;
  font-weight: 600;
  margin: 6px 0;
  color: ${(props) =>
    props.difficulty <= 1
      ? "#4CAF50"
      : props.difficulty === 2
      ? "#FF9800"
      : "#F44336"};
`;

export const RecipiesItem = ({
  recipe: { name, time, servings, calories, difficulty, image },
}) => {
  return (
    <Item>
      <Img src={image} alt={name} />
      <Title>{name}</Title>
      <Text>Time: {time}</Text>
      <Text>Calories: {calories}</Text>
      <DifficultyText difficulty={difficulty}>
        Difficulty: {difficulty}
      </DifficultyText>
      <Text>Servings: {servings}</Text>
    </Item>
  );
};
