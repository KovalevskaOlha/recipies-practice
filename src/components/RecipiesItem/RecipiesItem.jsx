export const RecipiesItem = ({recipe: {name, time, servings,calories, difficulty, image}}) => {
    return (
        <li className="recipies__item">
            <img className='recipies__img' src={image} alt={name} />
            <h2 className='recipies__title'>{name}</h2>
            <p className='recipies__time'>Time: {time}</p>
            <p className='recipies__calories'>Calories: {calories}</p>
            <p className='recipies__difficulty'>Difficulty: {difficulty}</p>
            <p className='recipies__servings'>Servings: {servings}</p>
        </li>
    )
}