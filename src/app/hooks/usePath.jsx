import { setPath as setStorePath } from "app/store/baseSlice";
import { useDispatch, useSelector } from "react-redux";

/**
 * @title 현재 선택 메뉴 확인 CustomHook [Path]
 */
function usePath() {
  const dispatch = useDispatch();
  const path = useSelector((state) => state.base.path);

  const setPath = (menuName) => {
    dispatch(setStorePath(menuName));
  };

  return { path, setPath };
}

export default usePath;
