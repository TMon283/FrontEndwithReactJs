import React, { useReducer } from 'react';

const products = [
  { id: 1, 
    name: "Apple iPhone 13", 
    description: "Smartphone mới nhất của Apple" 
  },
  { id: 2, 
    name: "Samsung Galaxy S21", 
    description: "Smartphone flagship của Samsung" 
  },
  { id: 3, 
    name: "OnePlus 9 Pro", 
    description: "Smartphone hiệu suất cao từ OnePlus" 
  },
  { id: 4, 
    name: "Google Pixel 6", 
    description: "Điện thoại thông minh của Google" 
  },
  { id: 5, 
    name: "Xiaomi Mi 11", 
    description: "Điện thoại thông minh giá rẻ" 
  },
];

type Action = { type: "search"; payload: string };

const searchReducer = (state: string, action: Action): string => {
  switch (action.type) {
    case "search":
      return action.payload;
    default:
      return state;
  }
};

export default function Search() {
  const [keyword, dispatch] = useReducer(searchReducer, "");

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div>
      <h1>Tìm kiếm sản phẩm</h1>

      <input
        type="text"
        placeholder="Nhập tên sản phẩm..."
        value={keyword}
        onChange={(e) =>
          dispatch({ type: "search", payload: e.target.value })
        }
      />
      <div>
        {filteredProducts.map((product) => (
          <div key={product.id} style={{ width: "200px" }}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
