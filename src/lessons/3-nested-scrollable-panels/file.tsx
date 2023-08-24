export default function Home() {
  return (
    <div className="flex text-white h-screen">
      <div className="bg-gray-800 p-3 space-y-2 overflow-y-scroll">
        {[...Array(40)].map((_, i) => (
          <div className="bg-white text-gray-800 w-12 h-12 rounded-full flex items-center justify-center">{i * i}</div>
        ))}
      </div>
      <div className="bg-gray-700 w-60 flex flex-col">
        <div className="px-3 h-12 flex shadow-md items-center">TailwindCSS</div>
        <div className="p-3 flex-1 overflow-y-scroll space-y-2">
          {[...Array(80)].map((_, i) => (
            <p>channel {i}</p>
          ))}

        </div>
      </div>
      <div className="bg-gray-600 flex-1 flex flex-col">
        <div className="px-3 h-12 flex items-center shadow-md">#general</div>
        <div className="p-3 flex-1 overflow-y-scroll space-y-4">{[...Array(40)].map(() => (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        ))}</div>
      </div>
    </div>
  );
}
