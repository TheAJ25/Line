import { useSelector } from "react-redux";
import styles from "./index.module.css";
import { COLORS, MENU_ITEMS } from "@/contants"; // Corrected import path

const Toolbox = () => {
  const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);

  const showStrokeToolOption = activeMenuItem === MENU_ITEMS.PENCIL;
  const showBrushToolOption =
    activeMenuItem === MENU_ITEMS.PENCIL ||
    activeMenuItem === MENU_ITEMS.ERASER;

  const updateBrushSize = (e) => {};

  return (
    <div className={styles.toolboxcontainer}>
      {showStrokeToolOption && (
        <div className={styles.toolitems}>
          <h4 className={styles.tooltext}>Stroke Color</h4>
          <div className={styles.itemcontainer}>
            <div
              className={styles.colorbox}
              style={{ backgroundColor: COLORS.BLACK }}
            />
            <div
              className={styles.colorbox}
              style={{ backgroundColor: COLORS.RED }}
            />
            <div
              className={styles.colorbox}
              style={{ backgroundColor: COLORS.GREEN }}
            />
            <div
              className={styles.colorbox}
              style={{ backgroundColor: COLORS.BLUE }}
            />
            <div
              className={styles.colorbox}
              style={{ backgroundColor: COLORS.YELLOW }}
            />
            <div
              className={styles.colorbox}
              style={{ backgroundColor: COLORS.ORANGE }}
            />
          </div>
        </div>
      )}
      {showBrushToolOption && (
        <div className={styles.toolitems}>
          <h4 className={styles.tooltext}>Brush Size</h4>
          <div className={styles.itemcontainer}>
            <input
              type="range"
              min={1}
              max={10}
              step={1}
              onChange={updateBrushSize}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Toolbox;
