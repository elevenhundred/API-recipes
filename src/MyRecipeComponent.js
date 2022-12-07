export default function MyRecipeComponent({
    label,
    image,
    calories,
    ingredients
  }) {
    return (
      <div>
        <div className="container">
          <h2> {label.toUpperCase()} </h2>
          <img src={image} alt="food" width="300px" />
          <h3> {calories.toFixed()} calories</h3>
          <ul className="list">
            {ingredients.map((ingredient, index) => {
              return (
                <li key={index}>
                  <img
                    src="https://img.icons8.com/external-filled-color-icons-papa-vector/512/external-Confirm-business-tools-filled-color-icons-papa-vector.png"
                    className="icon"
                    width="32px"
                    height="32px"
                    alt="tick"
                  />
                  {ingredient}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
  