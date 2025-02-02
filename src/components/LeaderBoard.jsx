import users from "@/utils/leaderboard-users";

const Leaderboard = () => {
  return (
    <div className="text-primary-text space-y-1 flex flex-wrap -mx-2">
      {users.map((user, index) => (
        <div key={index} className="w-full sm:w-6/12 md:w-4/12 px-2">
          <div
            style={{
              background: `linear-gradient(150deg, rgba(255, 255, 255, 0.1) 70%, rgba(255, 255, 255, 0.21) 70%)`,
            }}
            className="card overflow-hidden relative flex flex-row items-center justify-between gap-[10px] p-[15px] border border-gray-700 shadow-md"
          >
            <div className="flex items-center gap-3">
              <img
                className="w-16 h-16 rounded-full"
                src={user.image}
                alt={user.name}
              />
              <div className="flex flex-col items-start">
                <span className="font-semibold text-lg text-gray-300">
                  {user.name}
                </span>
                <span className="text-md text-gray-400">{user.amount}</span>
              </div>
            </div>
            <span className="font-extrabold text-pretty text-6xl abs text-primary-text/50 text-gray-300">
              {user.rank}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Leaderboard;
