import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export interface List {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const list: List[] = [
  { id: 1, name: "Iphone 11", price: 10000, description: "may dep" },
  { id: 2, name: "Iphone 12", price: 20000, description: "may dep" },
  { id: 3, name: "Iphone 13", price: 30000, description: "may dep" },
  { id: 4, name: "Iphone 14", price: 40000, description: "may dep" },
];

export default function ProductList() {
  const navi = useNavigate();
  const [searchParams, setSearch] = useSearchParams();

  const [name, setName] = useState<string>("");           
  const [searchResult, setSearchResult] = useState<List[]>(list); 

  const handleClick = (id: number) => {
    navi(`/products/${id}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleClick2 = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSearch({ search: name }); 
    const searchData = list.filter((i) =>
      i.name.toLowerCase().includes(name.toLowerCase().trim())
    );
    setSearchResult(searchData);
    localStorage.setItem("flag", "1");
  };

  useEffect(() => {
    const searchValue = searchParams.get("search") || "";
    setName(searchValue);
    if (searchValue) {
      const filtered = list.filter((i) =>
        i.name.toLowerCase().includes(searchValue.toLowerCase().trim())
      );
      setSearchResult(filtered);
    } else {
      setSearchResult(list);
    }
  }, [searchParams]);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div
        style={{
          width: "100%",
          height: "100px",
          backgroundColor: "burlywood",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Trang chi tiet san pham</h1>
        <p>danh sach san pham</p>
      </div>

      <div style={{ display: "flex", gap: "20px" }}>
        <input
          type="text"
          placeholder="nhap san pham ban muon tim kiem"
          style={{ width: "350px", height: "30px", borderRadius: "5px" }}
          onChange={handleChange}
          value={name}
        />
        <button
          onClick={handleClick2}
          style={{
            width: "100px",
            height: "35px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Tim kiem
        </button>
      </div>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {searchResult.length > 0 ? (
          searchResult.map((v) => (
            <div
              key={v.id}
              style={{
                display: "flex",
                flexDirection: "column",
                width: "150px",
                border: "1px solid black",
                textAlign: "center",
              }}
            >
              <p>Ten: {v.name}</p>
              <p>Gia: {Number(v.price).toLocaleString()}</p>
              <button style={{ color: "blue" }} onClick={() => handleClick(v.id)}>
                Xem chi tiet
              </button>
            </div>
          ))
        ) : (
          <p>Không tìm thấy sản phẩm nào</p>
        )}
      </div>
    </div>
  );
}
