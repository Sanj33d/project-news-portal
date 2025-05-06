import React from "react";
import { EyeIcon, StarIcon } from "lucide-react"; // optional for nice icons
import { CiBookmark, CiShare2 } from "react-icons/ci";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    thumbnail_url,
    details,
    rating,
    total_view,
  } = news;

//   const formatDate = (dateStr) => {
//     const options = { year: "numeric", month: "long", day: "numeric" };
//     return new Date(dateStr).toLocaleDateString(undefined, options);
//   };
  const formattedDate =  new Date(news.author.published_date).toLocaleDateString()
  ;
  return (
    <div className="card bg-base-100 shadow-md rounded-xl mb-6 mx-6">
      {/* Author */}
      <div className="card-body bg-base-200 rounded-t-xl">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src={author.img}
              alt={author.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h2 className="font-bold">{author.name}</h2>
              <p className="text-sm text-gray-500">{formattedDate}</p>
            </div>
          </div>
          <div className="text-gray-400 flex ">
                <CiBookmark size={24} className="cursor-pointer hover:text-primary"></CiBookmark>
                <CiShare2 size={24} className="cursor-pointer hover:text-primary"></CiShare2>
          </div>
        </div>
      </div>

      {/* Thumbnail */}
      <figure className="px-4 pt-4">
        <img src={thumbnail_url} alt={title} className="rounded-xl w-full max-h-60 object-cover" />
      </figure>

      {/* Content */}
      <div className="card-body">
        <h2 className="card-title text-xl">{title}</h2>
        <p className="text-sm text-gray-700">
          {details.length > 250 ? (
            <>
              {details.slice(0, 250)}...
              <span className="text-blue-600 font-semibold cursor-pointer ml-1">Read More</span>
            </>
          ) : (
            details
          )}
        </p>

        {/* Footer */}
        <div className="flex justify-between items-center pt-4 border-t mt-4 text-sm text-gray-600">
          {/* Rating */}
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }, (_, i) => (
              <StarIcon
                key={i}
                size={16}
                className={`${
                  i < rating.number ? "text-yellow-500" : "text-gray-300"
                }`}
                fill={i < rating.number ? "currentColor" : "none"}
              />
            ))}
            <span className="ml-1">{rating.number.toFixed(1)}</span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-1">
            <EyeIcon size={18} className="text-gray-500" />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
