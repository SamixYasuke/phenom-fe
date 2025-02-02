const Leaderboard = () => {
  const users = [
    {
      name: "BIG BOSTICS",
      amount: "₦13,461,800.00",
      image:
        "https://backend.phenomnet.com/images/users/9518345bc6ff185e5049814ea42c278e62a92764-2GSfK.jpeg",
      rank: 1,
    },
    {
      name: "Emerald",
      amount: "₦10,891,300.00",
      image:
        "https://backend.phenomnet.com/images/users/c27ce156135116511e8ef8bd0aaa4a66a15d9ce0-2vRTJ.jpg",
      rank: 2,
    },
    {
      name: "SupremeNetwork",
      amount: "₦10,033,300.00",
      image:
        "https://backend.phenomnet.com/images/users/8794f2cb14022405eaa8e746dc4be3383685faef-wDmxq.jpg",
      rank: 3,
    },
    {
      name: "Onah Praise",
      amount: "₦1,062,500.00",
      image: "https://backend.phenomnet.com/images/users/no-avatar.png",
      rank: 89,
    },
    {
      name: "MABDELLMEDIA",
      amount: "₦1,047,500.00",
      image:
        "https://backend.phenomnet.com/images/users/ae2d25631ca5fdd8f086c9a8c1c9be91d92d4e88-kfE1v.jpg",
      rank: 90,
    },
    {
      name: "VIANNEY01",
      amount: "₦1,044,900.00",
      image: "https://backend.phenomnet.com/images/users/no-avatar.png",
      rank: 91,
    },
    {
      name: "DMykel",
      amount: "₦1,043,400.00",
      image: "https://backend.phenomnet.com/images/users/no-avatar.png",
      rank: 92,
    },
    {
      name: "BOBBY",
      amount: "₦1,037,700.00",
      image:
        "https://backend.phenomnet.com/images/users/09601658ba70c97c39405f53f11362a2ccccce3b-BvSi2.jpeg",
      rank: 93,
    },
  ];

  return (
    <div className="text-primary-text space-y-1 flex flex-wrap -mx-2">
      {users.map((user, index) => (
        <div key={index} className="w-full sm:w-4/12 px-2">
          <div className="card relative flex flex-row items-center gap-[10px] p-[15px] backdrop-blur-[18px] bg-gradient-to-r from-white/10 to-white/21 before:content-[''] before:box-border before:border-0 before:border-solid before:border-gray-200 after:content-[''] after:box-border after:border-0 after:border-solid after:border-gray-200">
            <img
              className="w-16 h-16 rounded-full"
              src={user.image}
              alt="Bordered avatar"
            />
            <div className="flex flex-col items-start">
              <span className="font-semibold text-lg text-gray-300">
                {user.name}
              </span>
              <span className="text-md text-gray-400">{user.amount}</span>
            </div>
            <span className="font-extrabold text-pretty text-6xl abs text-primary-text/50">
              {user.rank}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Leaderboard;
