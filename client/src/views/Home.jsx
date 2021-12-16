import React from "react";
import bootstrap from "react-bootstrap";
import NavMain from "../NavBar/NavMain";
import Cards from "./Components/Cards";
import home from "../views/Components/home.css";

export default function Home() {
  return (
    <>
      <div className="home page">
        <div className=" text-center d-flex flex-column align-items-center ">
          <img
            className="page-title"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Bugatti_logo.svg/langfr-460px-Bugatti_logo.svg.png"
            alt="Logo"
            style={{ width: "84px" }}
          />
          <img
            className="home-cover"
            src="https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-e273a881495acbebe4fc6f0a150b8678.jpg"
            style={{ display: "block", height: "auto", width: "100%",}}
            alt="Bugatti"
          />
        </div>
        <br /> <label htmlFor="Model"></label>
        <div className="container">
          <main>
            <article>
              <img
                src="https://scontent-frx5-1.cdninstagram.com/v/t51.2885-15/263877091_945388906068522_6461271918849752392_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=i4yrzfDUygQAX83VfiW&_nc_ht=scontent-frx5-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT8P3redgBlzI4_oNsr-JpYLcNtoshKiFJiWGAJ1bIgrRQ&oe=61C028A7"
                alt=""
              />{" "}
            </article>
            <aside>
              <div className="card">
                {" "}
                <img
                  src="https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-3eff22d2677fcf823cf09a98c3d2be66.webp"
                  alt=""
                />{" "}
              </div>
              <div className="card">
                <img
                  src="https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-a4b8659aca1db6d7c159ff712a57f0d6.webp"
                  alt=""
                />{" "}
              </div>
            </aside>
            <footer>Footer</footer>
          </main>
        </div>
      </div>
    </>
  );
}
