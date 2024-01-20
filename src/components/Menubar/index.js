import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faEraser,
  faRotateLeft,
  faRotateRight,
  faFileArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.css"
import { MENU_ITEMS } from "@/contants";
import { menuItemClick, actionItemClick } from "@/slice/menuSlice";

const Menu = () => {
  const dispatch = useDispatch();

  const handleMenuClick = (itemName) => {
    dispatch(menuItemClick(itemName));
  };

  return (
    <div className={styles.menuContainer}>
      <div className={styles.iconwrapper} onClick={() => handleMenuClick(MENU_ITEMS.PENCIL)}>
        <FontAwesomeIcon icon={faPencilAlt} className={styles.icon} />
      </div>
      <div className={styles.iconwrapper} onClick={() => handleMenuClick(MENU_ITEMS.ERASER)}>
        <FontAwesomeIcon icon={faEraser} className={styles.icon} />
      </div>
      <div className={styles.iconwrapper}>
        <FontAwesomeIcon icon={faRotateLeft} className={styles.icon} />
      </div>
      <div className={styles.iconwrapper}>
        <FontAwesomeIcon icon={faRotateRight} className={styles.icon} />
      </div>
      <div className={styles.iconwrapper}>
        <FontAwesomeIcon icon={faFileArrowDown} className={styles.icon} />
      </div>
    </div>
  );
};

export default Menu;
