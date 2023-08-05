import { books } from "../../data.js";
import "./home.css";
import { VscTriangleDown } from "react-icons/vsc";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const [showMoveOptions, setShowMoveOptions] = useState(false);
  const [selectedId, setSelectedId] = useState();
  const [booksData, setBooksData] = useState(books);

  const clickHandler = (id) => {
    setSelectedId(id);
    setShowMoveOptions(!showMoveOptions);
  };

  const changeCategory = (bookId, type) => {
    setBooksData((prev) =>
      prev.map((book) =>
        book.id === bookId
          ? {
              ...book,
              currentlyReading: type === "currentlyReading" ? true : false,
              wantToRead: type === "wantToRead" ? true : false,
              read: type === "read" ? true : false
            }
          : book
      )
    );
    setShowMoveOptions(!showMoveOptions);
  };
  return (
    <div>
      <button onClick={() => navigate("/search")}>Go to Search</button>
      <h2>Currently Reading</h2>
      <div className="card-container">
        {booksData.map(
          ({ id, title, bookType, author, coverImg, currentlyReading }) =>
            currentlyReading && (
              <div className="book-card" key={id}>
                <img src={coverImg} alt={title} />
                <span className="icon" onClick={() => clickHandler(id)}>
                  <VscTriangleDown className="down-arrow" />
                </span>
                {showMoveOptions && selectedId === id ? (
                  <div className="dropdown">
                    <p>Move to..</p>
                    <span
                      onClick={() => changeCategory(id, "currentlyReading")}
                    >
                      Currently Reading
                    </span>
                    <span onClick={() => changeCategory(id, "wantToRead")}>
                      Want to Read
                    </span>
                    <span onClick={() => changeCategory(id, "read")}>Read</span>
                    <span onClick={() => changeCategory(id, "none")}>None</span>
                  </div>
                ) : (
                  <></>
                )}
                <div>
                  <h3>{title}</h3>
                  <p>{author}</p>
                </div>
              </div>
            )
        )}
      </div>

      <h2>Want to Read</h2>
      <div className="card-container">
        {booksData.map(
          ({ id, title, bookType, author, coverImg, wantToRead }) =>
            wantToRead && (
              <div className="book-card" key={id}>
                <img src={coverImg} alt={title} />
                <span className="icon" onClick={() => clickHandler(id)}>
                  <VscTriangleDown className="down-arrow" />
                </span>
                {showMoveOptions && selectedId === id ? (
                  <div className="dropdown">
                    <p>Move to..</p>
                    <span
                      onClick={() => changeCategory(id, "currentlyReading")}
                    >
                      Currently Reading
                    </span>
                    <span onClick={() => changeCategory(id, "wantToRead")}>
                      Want to Read
                    </span>
                    <span onClick={() => changeCategory(id, "read")}>Read</span>
                    <span onClick={() => changeCategory(id, "none")}>None</span>
                  </div>
                ) : (
                  <></>
                )}
                <div>
                  <h3>{title}</h3>
                  <p>{author}</p>
                </div>
              </div>
            )
        )}
      </div>

      <h2>Read</h2>
      <div className="card-container">
        {booksData.map(
          ({ id, title, bookType, author, coverImg, read }) =>
            read && (
              <div className="book-card" key={id}>
                <img src={coverImg} alt={title} />
                <span className="icon" onClick={() => clickHandler(id)}>
                  <VscTriangleDown className="down-arrow" />
                </span>
                {showMoveOptions && selectedId === id ? (
                  <div className="dropdown">
                    <p>Move to..</p>
                    <span
                      onClick={() => changeCategory(id, "currentlyReading")}
                    >
                      Currently Reading
                    </span>
                    <span onClick={() => changeCategory(id, "wantToRead")}>
                      Want to Read
                    </span>
                    <span onClick={() => changeCategory(id, "read")}>Read</span>
                    <span onClick={() => changeCategory(id, "none")}>None</span>
                  </div>
                ) : (
                  <></>
                )}
                <div>
                  <h3>{title}</h3>
                  <p>{author}</p>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};
