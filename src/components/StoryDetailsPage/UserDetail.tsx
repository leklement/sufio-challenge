import {APIClient} from "lib/api";
import {IUser} from "lib/api/responseTypes";
import React, {useEffect, useState} from "react";
import styles from "./styles.module.scss";

/* Outer Props
-------------------------------------------------------------------------*/

interface Props {
  userName: string;
}

/* Template
-------------------------------------------------------------------------*/

export const UserDetail: React.FC<Props> = (props) => {
  const {userName} = props;

  // States
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    const getData = async () => {
      if (!userName) {
        return;
      }
      const user = await APIClient.getUser(userName);
      setUser(user);
    };

    getData();
  }, [userName]);

  console.log("user: ", user);

  // Render

  return (
    <a
      href={`https://hacker-news.news/profile/${userName}`}
      target="_blank"
      rel="noreferrer"
      className={styles.UserDetail}
    >
      <div className={styles.avatar}>{userName.length > 8 ? userName[0] : userName}</div>
      <div className={styles.about}>
        <h3>About</h3>
        {user && (
          <div
            className={styles.innerHtml}
            dangerouslySetInnerHTML={{__html: user.about}}
          />
        )}
      </div>
    </a>
  );
};
