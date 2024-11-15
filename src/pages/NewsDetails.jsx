import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNavbar from "../components/layout-component/RightNavbar";

const NewsDetails = () => {
  const { data } = useLoaderData();
  const news = data[0];
  console.log(news);
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
        <section className="col-span-9">
          <div className="card bg-base-100">
            <figure className="px-10 pt-10">
              <img src={news?.image_url} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body text-start">
              <h2 className="card-title">{news?.title}</h2>
              <p>{news?.details}</p>
              <div className="card-actions justify-start">
                <Link
                  to={`/category/${news?.category_id}`}
                  className="btn btn-primary"
                >
                  Back to Category
                </Link>
              </div>
            </div>
          </div>
        </section>
        <aside className="col-span-3">
          <RightNavbar />
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
