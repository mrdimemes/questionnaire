import classNames from "classnames";
import { useState } from "react";
import { useAppSelector } from "src/redux/hooks";
import { Button } from "src/components/UI/Button";
import styles from "./User.module.sass";

const User = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const user = useAppSelector((state) => state.auth.user);
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen)
  }
  // placeholder
  const onClick = () => {
    console.log("user btn onclick");
  }

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
          onClick={onClick}
        />
      )}
    </div>

  )
}

export default User