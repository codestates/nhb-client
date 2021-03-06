import { RootState } from '../reducers';
import { useDispatch, useSelector } from 'react-redux';
import {
  postBringUserInfoThunk,
  postBringFeedsThunk,
  postLikeFeedThunk,
  getRankThunk,
  postUploadFeedThunk,
  postBringCommentThunk,
  postSignUpThunk,
  postLogInThunk,
} from '../actions/actions';
import { delRemoveFeedT } from '../api/delRemoveFeed';
import { postLikeCommentT } from '../api/postLikeComment';
import { postUploadCommentT } from '../api/postUploadComment';
import { delRemoveCommentT } from '../api/delRemoveComment';
import { patchEditCommentT } from '../api/patchEditComment';
import { postSendAuthEmailT } from '../api/postSendAuthEmail';
import { patchEditUserInfoT } from '../api/patchEditUserInfo';
import { patchEditTagsT } from '../api/patchEditTag';
import { delUserWithdrawalT } from '../api/delUserWithdrawal';
import { getLogoutT } from '../api/getLogout';
import NavSidebarContainer from '../components/NavSidebar/NavSidebarContainer';
export interface FeedId {
  feedId: number;
}
export default function ApiTestPage() {
  const state = useSelector((state: RootState) => state.reducer);
  const dispatch = useDispatch();
  const postBringUserInfoHandler = () => {
    const _accessToken = '';
    if (state.accessToken) {
      const accessToken = _accessToken.concat(state.accessToken);
      dispatch(postBringUserInfoThunk({ userId: null }, accessToken));
    }
  };

  const postBringFeedsHandler = () => {
    dispatch(postBringFeedsThunk({ topicId: 1, limit: 3, feedId: 2 }));
  };

  const getRankHandler = () => {
    dispatch(getRankThunk());
  };

  const postLikeFeedHandler = () => {
    const _accessToken = '';
    if (state.accessToken) {
      const accessToken = _accessToken.concat(state.accessToken);
      dispatch(postLikeFeedThunk({ feedId: 1 }, accessToken));
    }
  };

  const postUploadFeedHandler = () => {
    const _accessToken = '';
    if (state.accessToken) {
      const accessToken = _accessToken.concat(state.accessToken);
      dispatch(
        postUploadFeedThunk(
          {
            content: ['?????????', '??????'],
            word: '??????',
          },
          accessToken
        )
      );
    }
  };

  const postBringCommentHandler = () => {
    dispatch(postBringCommentThunk({ feedId: 1 }));
  };

  const postSignUpHandler = () => {
    dispatch(postSignUpThunk({ authCode: 'vt7cgin3b7' }));
  };

  const postLoginHandler = () => {
    dispatch(postLogInThunk({ authCode: 't4ddy5hbdni' }));
  };

  const delRemoveFeedHandler = () => {
    const _accessToken = '';
    if (state.accessToken) {
      const accessToken = _accessToken.concat(state.accessToken);
      delRemoveFeedT({ data: { feedId: 1 } }, accessToken)
        .then((x) => console.log(x))
        .catch((e) => console.log(e));
    }
  };

  const postLikeCommentHandler = () => {
    const _accessToken = '';
    if (state.accessToken) {
      const accessToken = _accessToken.concat(state.accessToken);
      postLikeCommentT({ commentId: 15 }, accessToken)
        .then((x) => console.log(x))
        .catch((e) => console.log(e));
    }
  };

  const postUploadCommentHandler = () => {
    const _accessToken = '';
    if (state.accessToken) {
      const accessToken = _accessToken.concat(state.accessToken);
      postUploadCommentT({ comment: 'hello world', feedId: 2 }, accessToken)
        .then((x) => console.log(x))
        .catch((e) => console.log(e));
    }
  };

  const delRemoveCommentHandler = () => {
    const _accessToken = '';
    if (state.accessToken) {
      const accessToken = _accessToken.concat(state.accessToken);
      delRemoveCommentT({ data: { feedId: 2, commentId: 16 } }, accessToken)
        .then((x) => console.log(x))
        .catch((x) => console.log(x));
    }
  };

  const patchEditCommentHandler = () => {
    const _accessToken = '';
    if (state.accessToken) {
      const accessToken = _accessToken.concat(state.accessToken);
      patchEditCommentT({ comment: 'hello', commentId: 1 }, accessToken)
        .then((x) => console.log(x))
        .catch((e) => console.log(e));
    }
  };

  const postSendAuthEmailHandler = () => {
    postSendAuthEmailT({ email: 'ohveloper@gmail.com' })
      .then((x) => console.log(x))
      .catch((e) => console.log(e));
  };

  const patchEditUserInfoHandler = () => {
    const _accessToken = '';
    if (state.accessToken) {
      const accessToken = _accessToken.concat(state.accessToken);
      patchEditUserInfoT(
        {
          avatarUrl: 'urls',
          nickName: '???????????????',
          introduction: '???????????? ????????????',
        },
        accessToken
      )
        .then((x) => console.log(x))
        .catch((e) => console.log(e));
    }
  };

  const patchEditTagsHandler = () => {
    const _accessToken = '';
    if (state.accessToken) {
      const accessToken = _accessToken.concat(state.accessToken);
      patchEditTagsT({ tagId: 1 }, accessToken)
        .then((x) => console.log(x))
        .catch((e) => console.log(e));
    }
  };

  const delUserWithdrawalHandler = () => {
    const _accessToken = '';
    if (state.accessToken) {
      const accessToken = _accessToken.concat(state.accessToken);
      delUserWithdrawalT(accessToken)
        .then((x) => console.log(x))
        .catch((e) => console.log(e));
    }
  };

  const getLogoutHandler = () => {
    getLogoutT()
      .then((x) => {
        console.log(x);
        state.accessToken = '';
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <NavSidebarContainer />
      <div>
        <h1>ApiTestPage</h1>
      </div>
      <h1>redux</h1>
      <div>
        <button onClick={postBringUserInfoHandler}>post bring userInfo</button>
        {state.userInfo.loading && 'post bring userInfo ??????'}
        {state.userInfo.error && 'post bring userInfo ??????'}
        {state.userInfo.data && 'post bring userInfo ??????'}
      </div>
      <div>
        <button onClick={postBringFeedsHandler}>post bring Feeds</button>
        {state.userFeeds.loading && 'post bring Feeds ??????'}
        {state.userFeeds.error && 'post bring Feeds ??????'}
        {state.userFeeds.data && 'post bring Feeds ??????'}
      </div>
      <div>
        <button onClick={getRankHandler}>get Rank</button>
        {state.rank.loading && 'get rank ??????'}
        {state.rank.error && 'get rank ??????'}
        {state.rank.data && 'get rank ??????'}
      </div>
      <div>
        <button onClick={postLikeFeedHandler}>post Like Feed</button>
        {state.likeFeed.loading && 'post likeFeed ??????'}
        {state.likeFeed.error && 'post likeFeed ??????'}
        {state.likeFeed.data && 'post likeFeed ??????'}
      </div>
      <div>
        <button onClick={postUploadFeedHandler}>post Upload Feed</button>
        {state.uploadFeed.loading && 'post uploadFeed ??????'}
        {state.uploadFeed.error && 'post uploadFeed ??????'}
        {state.uploadFeed.data && 'post uploadFeed ??????'}
      </div>
      <div>
        <button onClick={postBringCommentHandler}>post Bring Comment</button>
        {state.comments.loading && 'post bring comments ??????'}
        {state.comments.error && 'post bring comments ??????'}
        {state.comments.data && 'post bring comments ??????'}
      </div>
      <div>
        <button onClick={postSignUpHandler}>post SignUp</button>
        {state.signup.loading && 'post signup ??????'}
        {state.signup.error && 'post signup ??????'}

        {state.signup.data &&
          `?????? : state.signup.data.accessToken :
          ${state.signup.data.accessToken}`}
        <br />
        {state.accessToken && `?????? : state.accessToken : ${state.accessToken}`}
      </div>
      <div>
        <button onClick={postLoginHandler}>post login</button>
        {state.login.loading && 'post login ??????'}
        {state.login.error && 'post login ??????'}
        <br />
        {state.login.data &&
          `?????? : state.login.data.accessToken : ${state.login.data.accessToken}`}
        <br />
        {state.accessToken && `?????? : state.accessToken : ${state.accessToken}`}
      </div>
      <div>
        <h1>axios ?????????</h1>
        <div>
          del RemoveFeedT <button onClick={delRemoveFeedHandler}>??????</button>
        </div>
        <div>
          post LikeCommentT ??????
          <button onClick={postLikeCommentHandler}>??????</button>
        </div>
        <div>
          post UploadCommentT ??????
          <button onClick={postUploadCommentHandler}>??????</button>
        </div>
        <div>
          delete RemoveCommetT ??????
          <button onClick={delRemoveCommentHandler}>??????</button>
        </div>
        <div>
          patch EditCommentT ??????
          <button onClick={patchEditCommentHandler}>??????</button>
        </div>
        <div>
          post SendAuthEmailT ??????
          <button onClick={postSendAuthEmailHandler}>??????</button>
        </div>
        <div>
          patch EditUserInfoT ??????
          <button onClick={patchEditUserInfoHandler}>??????</button>
        </div>
        <div>
          patch EditTagsT ??????
          <button onClick={patchEditTagsHandler}>??????</button>
        </div>
        <div>
          del UserWithdrawalT ??????
          <button onClick={delUserWithdrawalHandler}>??????</button>
        </div>
        <div>
          get getLogoutT ??????
          <button onClick={getLogoutHandler}>??????</button>
        </div>
      </div>
    </div>
  );
}
