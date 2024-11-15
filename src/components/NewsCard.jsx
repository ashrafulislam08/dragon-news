import { FaRegEye, FaStar, FaShareAlt, FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";

function NewsCard({ news }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {/* Header Section */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <img
            src={news.author.img}
            alt={news.author.name}
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <h2 className="font-semibold text-gray-800">{news.author.name}</h2>
            <p className="text-sm text-gray-500">
              {new Date(news.author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="flex space-x-2 text-gray-600">
          <FaRegBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Image Section */}
      <img
        src={news.image_url}
        alt={news.title}
        className="w-full h-52 object-cover"
      />

      {/* Content Section */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2">{news.title}</h3>
        <p className="text-sm text-gray-600 mb-4">
          {news.details.slice(0, 100)}...{" "}
          <Link
            to={`/news/${news._id}`}
            className="text-blue-500 cursor-pointer"
          >
            Read More
          </Link>
        </p>
      </div>

      {/* Footer Section */}
      <div className="flex justify-between items-center px-4 pb-4 text-gray-700">
        <div className="flex items-center">
          <FaStar className="text-yellow-400 mr-1" />
          <span className="font-semibold">{news.rating.number}</span>
        </div>
        <div className="flex items-center">
          <FaRegEye className="mr-1" />
          <span>{news.total_view}</span>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
