const GhibliStyleDropdown = ({ value, onChange }) => (
  <div className="w-full">
    <label
      htmlFor="ghibli-style"
      className="text-md font-semibold mb-2 block text-white"
    >
      Choose Your Ghibli Style
    </label>
    <select
      id="ghibli-style"
      value={value}
      onChange={onChange}
      className="w-full p-3 bg-[#1e1d1c] text-white border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-700 focus:border-transparent transition-colors"
    >
      <option value="analog-film">🎞️ Analog Film</option>
      <option value="anime">🌸 Classic Anime</option>
      <option value="cinematic">🎬 Cinematic</option>
      <option value="comic-book">📖 Comic Book</option>
      <option value="digital-art">🖌️ Digital Painting</option>
    </select>
  </div>
);

export default GhibliStyleDropdown;
