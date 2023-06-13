import React from "react";

function Products() {
  const products = [
    {
      id: 1,
      title: "Onion",
      category: "veg",
    },
    {
      id: 2,
      title: "Tomato",
      category: "veg",
    },
    {
      id: 3,
      title: "Apple",
      category: "Fruit",
    },
    {
      id: 4,
      title: "Orange",
      category: "Fruit",
    },
  ];

  return (
    <div>
      <table
        style={{ border: "1px solid black", width: "500px", height: "200px" }}
      >
        <tr>
          <th>ID</th>
          <th>title</th>
          <th>category</th>
        </tr>
        {products.map((pd) => {
          return (
            <tr>
              <td>{pd.id}</td>
              <td>{pd.title}</td>
              <td>{pd.category}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Products;
