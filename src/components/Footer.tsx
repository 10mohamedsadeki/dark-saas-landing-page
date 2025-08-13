import TwiterIcon from "../assets/icons/x.svg";
import InstaIcon from "../assets/icons/insta.svg";
import TiktokIcon from "../assets/icons/tiktok.svg";
import YoutubeIcon from "../assets/icons/youtube.svg";

export const Footer = () => {
  return (
    <footer className="py-5 bg-black text-white/60 border-t border-white/40">
      <div className="container ">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          <div className="text-center">
            © 2024 Your Company, Inc. All rights reserved
          </div>
          <ul className="flex justify-center gap-2.5">
            <li>
              <TwiterIcon className="text-white/60" />
            </li>
            <li>
              <InstaIcon className="text-white/60" />
            </li>
            <li>
              <TiktokIcon className="text-white/60" />
            </li>
            <li>
              <YoutubeIcon className="text-white/60" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
