import classNames from "classnames";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserNameSelector } from "src/redux/hooks";
import { AuthService } from "src/services";
import { Button } from "src/components/UI/Button";

import styles from "./UserPanel.module.sass";

const UserPanel = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const userName = useUserNameSelector();
  const navigate = useNavigate();
  const togglePopup = () => setIsPopupOpen(!isPopupOpen);
  const redirectToAuth = () => navigate("/auth");

  return (
    <div className={styles.UserPanel}>
      {userName && (
        <>
          <Button
            onClick={togglePopup}
            className={styles.name}
            children={userName}
          />
          <div className={classNames(
            styles.popup, { [styles.opened]: isPopupOpen },
          )}>
            <Button
              children="Выйти"
              onClick={AuthService.logout.bind(AuthService)}
            />
          </div>
        </>
      )}
      {!userName && (
        <Button
          children="Войти"
          onClick={redirectToAuth}
        />
      )}
    </div>

  );
};

export default UserPanel;