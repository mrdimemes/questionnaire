import classNames from "classnames";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from "src/redux/hooks";
import { Button } from "src/components/UI/Button";
import styles from "./User.module.sass";

const User = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const user = useAppSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const togglePopup = () => setIsPopupOpen(!isPopupOpen);

  // placeholder
  const onClick = () => {
    console.log("user btn onclick");
  }

  const redirectToAuth = () => navigate("/auth");

  return (
    <div className={styles.body}>
      {user && (
        <>
          <Button
            onClick={togglePopup}
            className={styles.name}
            children={user.name}
          />
          <div className={classNames(
            styles.popup, { [styles.opened]: isPopupOpen }
          )}>
            <Button
              children="Выйти"
              onClick={onClick}
            />
          </div>
        </>
      )}
      {!user && (
        <Button
          children="Войти"
          onClick={redirectToAuth}
        />
      )}
    </div>

  )
}

export default User