import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice"; // Dùng ./ vì cùng cấp src/

const ProductList = () => {
  const dispatch = useDispatch();

  // State lưu các sản phẩm đã add
  const [addedToCart, setAddedToCart] = useState({});

  // Mảng plantsArray với category → plants
  const plantsArray = [
    {
      category: "Aromatic Plants",
      plants: [
        {
          name: "Lavender",
          image: "https://tinyurl.com/4c2jnfhm",
          description: "Aromatic plant used for relaxation.",
          cost: 12,
        },
        {
          name: "Mint",
          image: "https://tinyurl.com/3f9r3vsv",
          description: "Refreshing and perfect for teas.",
          cost: 8,
        }
      ]
    },
    {
      category: "Medicinal Plants",
      plants: [
        {
          name: "Aloe Vera",
          image: "https://tinyurl.com/yy8k2e6d",
          description: "Great for skin treatment.",
          cost: 15,
        },
        {
          name: "Cactus",
          image: "https://tinyurl.com/y3c3tfh7",
          description: "Easy to maintain.",
          cost: 20,
        }
      ]
    }
  ];

  // Hàm xử lý Add to Cart
  const handleAddToCart = (product) => {
    dispatch(addItem(product));

    setAddedToCart((prevState) => ({
      ...prevState,
      [product.name]: true,
    }));
  };

  return (
    <div className="product-grid">

      {plantsArray.map((category, index) => (
        <div key={index}>
          <h1>
            <div>{category.category}</div>
          </h1>

          <div className="product-list">
            {category.plants.map((plant, plantIndex) => (
              <div className="product-card" key={plantIndex}>
                
                <img
                  className="product-image"
                  src={plant.image}
                  alt={plant.name}
                />

                <div className="product-title">{plant.name}</div>

                <div className="product-description">{plant.description}</div>

                <div className="product-cost">${plant.cost}</div>

                <button
                  className="product-button"
                  onClick={() => handleAddToCart(plant)}
                  disabled={addedToCart[plant.name]}
                >
                  {addedToCart[plant.name] ? "Added ✓" : "Add to Cart"}
                </button>

              </div>
            ))}
          </div>
        </div>
      ))}

    </div>
  );
};

export default ProductList;
