
const Sort = ({ sort, setSort }) => {

    const handleSortChange = (e) => {
      console.log('Sort this file by', {sort})
      setSort(e.target.value)
    }

  return (
    <div className="flex justify-center mb-10">
          <select
          className="select select-bordered"
          name="sort"
          id="sort"
          value={sort}
          onChange={handleSortChange}
          defaultValue=""
        >
          <option value="" disabled>
            Select Sort Order
          </option>
          <option className=" hover:bg-[#383838]" value="asc">Average Cost (Low to High)</option>
          <option className=" hover:bg-[#383838]" value="desc">Average Cost (High to Low)</option>
        </select> 
 
    </div>
  );
};

export default Sort;
