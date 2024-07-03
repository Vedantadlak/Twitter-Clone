import Image from "next/image";
import { BsBell, BsBookmark, BsEnvelope, BsTwitterX } from "react-icons/bs";
import { BiHash, BiHomeCircle, BiSolidHome, BiUser } from "react-icons/bi";
import FeedCard from "@/components/FeedCards";


interface TwitterSideBarButton {
  title: string;
  icon: React.ReactNode;
}

const SideBarMenuItems: TwitterSideBarButton[] = [
  {
    title: "Home",
    icon: <BiSolidHome />,
  },
  {
    title: "Explore",
    icon: <BiHash />,
  },
  {
    title: "Notification",
    icon: <BsBell />,
  },
  {
    title: "Messages",
    icon: <BsEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />,
  },
  {
    title: "Profile",
    icon: <BiUser />,
  },
];

export default function Home() {
  return (
    <div >
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 pt-1 ml-20">
          <div className="text-3xl h-fit w-fit m-2 hover:bg-gray-800 rounded-full p-2 cursor-pointer transition-all">
            <BsTwitterX />
          </div>
          <div className="mt-2 text-xl font-semibold pr-4">
            <ul>
              {SideBarMenuItems.map((item) => (
                <li
                  className="flex justify-start gap-4 items-center hover:bg-gray-800 rounded-full px-5 py-2 w-fit cursor-pointer"
                  key={item.title}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 px-3 ">
              <button className="bg-[#1d9bf0] hover:cursor-pointer opacity-95 py-4 px-2 rounded-full w-full">
                Post
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-5 border-r-[1px] border-l-[1px] border-gray-600">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
