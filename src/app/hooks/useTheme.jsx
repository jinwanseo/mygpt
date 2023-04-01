import { setTheme as setStoreTheme } from "app/store/baseSlice";
import { useDispatch, useSelector } from "react-redux";

/**
 * @title Theme Custom Hook
 */
function useTheme() {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.base);
  const setTheme = (theme) => {
    dispatch(setStoreTheme(theme));
  };

  return { theme, setTheme };
}

export default useTheme;
