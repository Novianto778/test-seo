import { filterNews } from "@/actions/news";
import { NewsParams } from "@/types/news.type";
import { Search } from "lucide-react";
import "react-day-picker/style.css";

type Props = {
  searchParams: NewsParams;
};

const NewsFilterSidebar = ({ searchParams }: Props) => {
  const fromValue = searchParams.from?.toString();
  const toValue = searchParams.to?.toString();
  return (
    <>
      <form
        action={filterNews}
        className="box rounded-xl border border-gray-300 bg-white p-6 w-full md:max-w-sm"
      >
        <h6 className="font-medium text-base leading-7 text-black mb-5">
          Filter News
        </h6>
        <div className="flex flex-col  mb-5 gap-1">
          <div className="relative w-full">
            <label
              htmlFor="from"
              className="block mb-2 text-sm font-medium text-gray-600 w-full"
            >
              Start Date
            </label>
            <input type="date" name="from" id="from" value={fromValue} />
          </div>
          <p className="px-1 font-bold text-sm leading-6 text-gray-600">to</p>
          <div className="relative w-full">
            <label
              htmlFor="to"
              className="block mb-2 text-sm font-medium text-gray-600 w-full"
            >
              End Date
            </label>
            <input type="date" name="to" id="to" value={toValue} />
          </div>
        </div>

        <label
          htmlFor="countries"
          className="block mb-2 text-sm font-medium text-gray-600 w-full"
        >
          Search
        </label>
        <div className="relative w-full mb-8">
          <input
            value={searchParams.q}
            type="text"
            id="q"
            name="q"
            placeholder="Search for news"
            className="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white"
          />
        </div>
        <button
          // onClick={handleSearch}
          type="submit"
          className="w-full py-2.5 flex items-center justify-center gap-2 rounded-full bg-indigo-600 text-white font-semibold text-xs shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-200  "
        >
          <Search />
          Search
        </button>
      </form>
    </>
  );
};

export default NewsFilterSidebar;
