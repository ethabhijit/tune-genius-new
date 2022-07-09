import JustinRogersImage from "../../assets/images/justin__rogers.png";

import "./ProfileInfo.css";

import { BsDiscord, BsTwitter } from "react-icons/bs";
import { FaYoutube, FaTiktok } from "react-icons/fa";

const ProfileInfo = () => {
  return (
    <div className="profile__info__container">
      <div className="profile__info__wrapper">
        <div className="profile__info__wrapper__col">
          <img src={JustinRogersImage} alt="Justin Rogers" />
        </div>
        <div className="profile__info__wrapper__col">
          <h3>Justin Rogers</h3>
          <h6>
            Join my investor <BsDiscord color="#5865F2" fontSize="1.4rem" />
          </h6>
          <h6>My socials</h6>
          <div className="profile__info__social__icons__container">
            <FaYoutube fontSize="1.4rem" color="#fff" />
            <FaTiktok fontSize="1.4rem" color="#fff" />
            <BsTwitter fontSize="1.4rem" color="#fff" />
          </div>
          <h6>My wallet: justinrogers.eth</h6>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
