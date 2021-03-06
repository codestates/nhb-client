/* eslint-disable @typescript-eslint/await-thenable */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { postBringUserInfoThunk } from '../../actions/actions';
import { RootState } from '../../reducers';

function NavMyPage() {
  const state = useSelector((state: RootState) => state.reducer);
  const dispatch = useDispatch();
  const accessToken = state.accessToken;

  useEffect(() => {
    if (accessToken) {
      dispatch(postBringUserInfoThunk({ userId: null }, accessToken));
    }
  }, []);

  return (
    <div>
      <div>Welcome back!</div>
      <div>
        <Link to="/mypage">Go to Mypage</Link>
      </div>
    </div>
  );
}

export default NavMyPage;
