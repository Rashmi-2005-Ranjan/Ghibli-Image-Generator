const GhibliStyleDropdown = ({ value, onChange }) => (
  <div>
    <label
      htmlFor="ghibli-style"
      className="text-md font-semibold mb-2 block text-gray-200"
    >
      Select Ghibli Style
    </label>
    <select
      id="ghibli-style"
      value={value}
      onChange={onChange}
      className="w-full p-3 rounded-lg bg-gray-900 text-gray-100 border border-gray-700 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition"
    >
      <option value="analog-film">Analog Film</option>
      <option value="anime">Anime</option>
      <option value="cinematic">Cinematic</option>
      <option value="comic-book">Comic Book</option>
      <option value="digital-art">Digital Art</option>
    </select>
  </div>
);

export default GhibliStyleDropdown;
