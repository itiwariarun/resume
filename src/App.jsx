/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./App.css";
import image from "./download.jpg";
import Widget from "./Widget";
import data from "./data.json";
import edu from "./edu.json";
import Strwidg from "./Strwidg";
import bio from "./bio.js";
function App() {
  const [posts, setPosts] = useState([]);
  const [grade, setgrade] = useState([]);

  useEffect(() => {
    setPosts(data);
    setgrade(edu);
  }, []);

  return (
    <>
      <main className="p-5 md:flex md:justify-center md:p-10">
        <div className="grid min-h-screen border-2 xl:w-2/3 md:grid-cols-2">
          <section className="min-w-full min-h-full p-4 bg-[#e6e6e6]">
            <article className="flex flex-col items-center justify-center max-w-sm mx-auto">
              <figure>
                <img
                  src={image}
                  className="rounded-full mt-14 w-80 h-80"
                  alt="imagesrc"
                />
              </figure>
              <article className="px-3 sm:px-6">
                <hgroup>
                  <h1 className="pt-6 text-5xl font-bold text-[#2b2b24]">
                    {bio.name}
                  </h1>
                  <h2 className="text-lg font-bold tracking-[0.2rem] uppercase text-[#2b2b24] ">
                    {bio.post}
                  </h2>
                  <h3 className="pt-16 pb-4 text-lg font-bold uppercase text-[#2b2b24]">
                    About Me
                  </h3>
                  <p className="text-xs font-normal text-[#2b2b24]">
                    {bio.about}
                  </p>
                </hgroup>
                <div className="pt-20 pb-10 space-y-3 text-sm font-bold uppercase text-[#2b2b24]">
                  <Strwidg name="Interior Design" b="80" c="40" />
                  <Strwidg name="3D Modelling" b="80" c="24" />
                  <Strwidg name="Photography" b="60" c="60" />
                </div>
                <hgroup>
                  <h2 className="pb-4 text-lg font-bold uppercase text-[#2b2b24]">
                    CONTACTS
                  </h2>
                  <article className="pb-4 text-xs font-thin text-[#2b2b24]">
                    <p>{bio.email}</p>
                    <p>{bio.number}</p>
                  </article>
                </hgroup>
              </article>
            </article>
          </section>
          <section className="min-w-full min-h-full p-4 bg-white ">
            <article className="max-w-sm px-3 mx-auto sm:px-6">
              <h2 className="pb-2 text-lg font-bold tracking-wider text-[#2b2b24]">
                EDUCATION
              </h2>
              <hgroup className="pt-2 text-xs font-normal text-[#2b2b24]">
                {grade.map((grad) => (
                  <span key={grad.id} className="">
                    <h3 className="flex justify-between pt-3 text-sm font-bold uppercase text-[#2b2b24]">
                      {grad.head} <span>{grad.year}</span>
                    </h3>
                    <p className="pt-0.5">{grad.sub}</p>
                  </span>
                ))}
              </hgroup>
              <hgroup>
                <h3 className="pt-12 pb-2 text-lg font-bold tracking-wider text-[#2b2b24]">
                  LANGUAGES
                </h3>
                <p className="text-xs font-normal text-[#2b2b24]">
                  {bio.language}
                </p>
                <div className="flex py-5 pt-10 space-x-2">
                  <Widget percentage="90" name="English" />
                  <Widget percentage="60" name="German" />
                  <Widget percentage="30" name="Italian" />
                </div>
              </hgroup>
              <article>
                <h2 className="pt-20 pb-6 text-lg font-bold tracking-wider text-[#2b2b24]">
                  EXPERIENCE
                </h2>
                {posts.map((post) => (
                  <ul key={post.id}>
                    <li className="flex justify-between pt-5 pb-1 text-sm font-bold uppercase text-[#2b2b24]">
                      {post.head}
                      <span>{post.year}</span>
                    </li>
                    {post.subhead.map((sub) => (
                      <li
                        key={sub.id}
                        className="py-0.5 text-xs font-semibold text-[#2b2b24]"
                      >
                        {sub.title}
                      </li>
                    ))}
                  </ul>
                ))}
              </article>
            </article>
          </section>
        </div>
      </main>
    </>
  );
}
export default App;
