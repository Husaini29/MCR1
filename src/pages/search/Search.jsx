import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { books } from "../../data";
import { VscTriangleDown } from "react-icons/vsc";

export const Search = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  const searchedBook =
    searchInput.length > 0
      ? books.filter(({ title }) =>
          title.toLowerCase().includes(searchInput.toLowerCase())
        )
      : books;
  return (
    <div>
      <button onClick={() => navigate("/")}>Go to Home</button>
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      {searchInput.length === 0 && <h2>Start Typing To See Results</h2>}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "center"
        }}
      >
        {searchInput.length > 0 &&
          searchedBook.map(({ id, title, author, coverImg }) => (
            <div className="book-card" key={id}>
              <img src={coverImg} alt={title} />
              <span className="icon">
                <VscTriangleDown className="down-arrow" />
              </span>
              <div>
                <h3>{title}</h3>
                <p>{author}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
