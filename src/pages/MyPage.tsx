import MyAchievementContainer from '../components/myPage/MyAchievementContainer';
import MyPhotoNickName from '../components/myPage/MyPhotoNickName';
import MyWorkContainer from '../components/myPage/MyWorkContainer';
import Homebutton from '../components/Homebutton';
import Sidebar from '../components/sidebar';
import { RootState } from '../reducers';
import { useDispatch, useSelector } from 'react-redux';
import { postBringUserInfoThunk } from '../actions/actions';
import { useEffect } from 'react';

export default function MyPage() {
  const state = useSelector((state: RootState) => state.reducer);
  const dispatch = useDispatch();
  const _accessToken = '';
  useEffect(() => {
    if (state.accessToken) {
      const accessToken = _accessToken.concat(state.accessToken);
      dispatch(postBringUserInfoThunk({ userId: null }, accessToken));
    }
    console.log(state.userInfo.data);
  }, []);
  return (
    <>
      <Homebutton />
      <Sidebar />
      <div>
        {state.userInfo.loading && 'now loading...'}
        {state.userInfo.error && 'sorry now Error'}
        {state.userInfo.data && <MyWorkContainer />}
      </div>
      <div>
        <MyAchievementContainer />
      </div>
      <div>
        <MyPhotoNickName />
      </div>
    </>
  );
}
