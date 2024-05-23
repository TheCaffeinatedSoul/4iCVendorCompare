import {
  FaInstagram,
  FaLinkedinIn,
  FaRegCopyright,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbPhone } from "react-icons/tb";
import { FiMail } from "react-icons/fi";
import { BrandName } from "./brand-name";

export const Footer = () => {
  return (
    <div className="flex justify-between items-center md:w-full p-6 bg-secondary">
      <div className="flex items-center gap-4">
        <BrandName />
        <div className="flex flex-col text-xs">
          <div>4i Apps Solutions,</div>
          <div>2nd Floor, HQ, Kazhipattur,</div>
          <div>Chennai - 603103</div>
        </div>
        <div className="flex flex-col text-xs">
          Contact Us :
          <div className="flex items-center gap-2">
            <TbPhone />
            +91 44 6638 0000
          </div>
          <div className="flex items-center gap-2">
            <TbPhone />
            +91 44 6638 0100
          </div>
          <a
            className="flex items-center gap-2 text-blue-500"
            href="mailto:sales@4iapps.com"
          >
            <FiMail />
            sales@4iapps.com
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-evenly gap-4">
          <a
            className="flex flex-col items-center text-xs"
            href="https://www.instagram.com/4iappssolutions/"
          >
            <FaInstagram color="#E1306C" />
            Instagram
          </a>
          <a
            className="flex flex-col items-center text-xs"
            href="https://www.twitter.com/4iAppsOracle"
          >
            <FaXTwitter />
            Twitter
          </a>
          <a
            className="flex flex-col items-center text-xs"
            href="https://in.linkedin.com/company/4i-apps-solutions-private-limited"
          >
            <FaLinkedinIn color="skyblue" />
            LinkedIn
          </a>
          <a
            className="flex flex-col items-center text-xs"
            href="https://www.youtube.com/user/4iAppsSolutions"
          >
            <FaYoutube color="red" />
            YouTube
          </a>
        </div>
        <div className="flex items-center justify-end gap-1 text-xs">
          <FaRegCopyright />
          All rights reserved
        </div>
      </div>
    </div>
  );
};
