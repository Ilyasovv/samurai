import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../comman/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.jpg";
const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div>
        <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350" />
      </div>
      <div className={s.descriptionBlock}>
        <img
          className={s.userImg}
          src={props.profile.photos.large || userPhoto}
        />

        <div className={s.userName}>{props.profile.fullName}</div>
        <div className={s.userTitle}>
          <div>{props.profile.contacts.instagram || ""}</div>
          <div>{props.profile.lookingForAJobDescription || ""}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
