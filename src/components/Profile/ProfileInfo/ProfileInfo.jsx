import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../comman/Preloader/Preloader";

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
        <img src={props.profile.photos.large} />
        <div>{props.profile.fullName}</div>
        <div>
          <div>Instagram: {props.profile.instagram}</div>
          <div>GitHub: {props.profile.lookingForAJobDescripion}</div>
        </div>
        s
      </div>
    </div>
  );
};

export default ProfileInfo;
