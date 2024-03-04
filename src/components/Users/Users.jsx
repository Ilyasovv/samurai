import React from "react";
import styles from "./Users.module.css";
let Users = (props) => {
  if (props.users.length === 0) {
    debugger;
    props.setUsers([
      {
        id: 1,
        photoUrl:
          "https://sourcesofinsight.com/wp-content/uploads/2011/06/Steve-Jobs-2.jpg",
        followed: true,
        fullName: "Abai",
        status: "i am a boss",
        location: { city: "Biskek", country: "Kyrgyzstan" },
      },
      {
        id: 2,
        photoUrl:
          "https://sourcesofinsight.com/wp-content/uploads/2011/06/Steve-Jobs-2.jpg",

        followed: false,
        fullName: "Misha",
        status: "i am a programmist",
        location: { city: "Moscow", country: "Russia" },
      },
      {
        id: 3,
        photoUrl:
          "https://sourcesofinsight.com/wp-content/uploads/2011/06/Steve-Jobs-2.jpg",

        followed: true,
        fullName: "Tom",
        status: "i am a designer",
        location: { city: "New-York", country: "Amerika" },
      },
    ]);
  }
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} className={styles.userPhoto} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};
export default Users;
sss;
