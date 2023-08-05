import { books } from "../data";
import "./home.css";
import { VscTriangleDown } from "react-icons/vsc";
import { useState } from "react";

export const Home = () => {
  const [showMoveOptions, setShowMoveOptions] = useState(false);
  const [selectedId, setSelectedId] = useState();

  const clickHandler = (id) => {
    setSelectedId(id);
    setShowMoveOptions(!setShowMoveOptions);
  };
  return (
    <div>
      <h2>Currently Reading</h2>
      <div className="card-container">
        {books.map(
          ({ id, title, bookType, author, coverImg, currentlyReading }) =>
            currentlyReading && (
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
            )
        )}
      </div>

      <h2>Want to Read</h2>
      <div className="card-container">
        {books.map(
          ({ id, title, bookType, author, coverImg, wantToRead }) =>
            wantToRead && (
              <div className="book-card" key={id}>
                <img src={coverImg} alt={title} />
                <span className="icon" onClick={() => clickHandler(id)}>
                  <VscTriangleDown className="down-arrow" />
                </span>
                {showMoveOptions && selectedId === id ? (
                  <div>
                    <span>Move to..</span>
                    <span>Currently Reading</span>
                    <span>Want to Read</span>
                    <span>Read</span>
                    <span>None</span>
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
        {books.map(
          ({ id, title, bookType, author, coverImg, read }) =>
            read && (
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
            )
        )}
      </div>
    </div>
  );
};
