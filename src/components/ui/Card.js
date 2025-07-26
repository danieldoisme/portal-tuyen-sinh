const CalendarIcon = () => (
  <svg
    className="w-4 h-4 mr-2 text-red-600"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
      clipRule="evenodd"
    ></path>
  </svg>
);

const Card = ({ image, date, title, href = "#" }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group transition-shadow duration-300 hover:shadow-xl">
      <a href={href} className="block">
        <img className="w-full h-48 object-cover" src={image} alt={title} />
        <div className="p-6">
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <CalendarIcon />
            <span>{date}</span>
          </div>
          <h3 className="text-lg font-bold text-gray-800 h-20 group-hover:text-red-700 transition-colors duration-300 line-clamp-3">
            {title}
          </h3>
        </div>
      </a>
    </div>
  );
};

export default Card;
