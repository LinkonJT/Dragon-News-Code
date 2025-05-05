// import React from 'react';

// const NewsCard = ({news}) => {
//     return (
//         <div>
//             {news.title}
//             <img src={news.image_url} alt="" />
//         </div>
//     );
// };

// export default NewsCard;


import { FaStar, FaRegEye, FaBookmark } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";

const NewsCard = ({ news }) => {
  const {
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
  } = news;

  const formattedDate = new Date(author.published_date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden relative">
      {/* Top Bar: Author Info and Icons */}
      <div className="flex items-center justify-between px-4 pt-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold text-sm">{author.name}</p>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-gray-500 text-lg">
          <FaBookmark className="cursor-pointer" title="Save" />
          <IoShareSocialOutline className="cursor-pointer" title="Share" />
        </div>
      </div>

      {/* Title */}
      <div className="px-4 py-2">
        <h2 className="font-bold text-base">
          {title}
        </h2>
      </div>

      {/* Thumbnail Image */}
      <img
        src={thumbnail_url}
        alt="News Thumbnail"
        className="w-full h-48 object-cover"
      />

      {/* Details */}
      <div className="px-4 py-2 text-sm text-gray-700">
        {details.length > 200 ? details.slice(0, 200) + "..." : details}
        <span className="text-red-500 ml-1 cursor-pointer">Read More</span>
      </div>

      {/* Footer: Rating and Views */}
      <div className="flex items-center justify-between px-4 py-3 border-t">
        <div className="flex items-center gap-1 text-orange-500">
          {[...Array(rating.number)].map((_, idx) => (
            <FaStar key={idx} />
          ))}
          <span className="text-gray-700 font-semibold ml-1">{rating.number}</span>
        </div>

        <div className="flex items-center text-gray-500 gap-2">
          <FaRegEye />
          <span className="text-sm">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

