import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import PoemInfo from './PoemInfo';
import PoemView from './PoemView';
import PoemButtonGroup from './PoemButtonGroup';

export default function MainpagePoemContainer() {
  const state = useSelector((state: RootState) => state.reducer);
  const { data } = state.userFeeds;

  if (data?.data.userFeeds.length === 0) {
    return <div>오늘 첫 글의 주인공이 되어 볼까요?😉</div>;
  }
  return (
    <>
      <h2>PoemContainer</h2>
      {data?.data.userFeeds.map((feed, idx) => {
        const key = String(feed.feedId) + String(idx);
        return (
          <div key={key}>
            {feed.feedId}
            <PoemInfo />
            <PoemView />
            <PoemButtonGroup />
          </div>
        );
      })}
    </>
  );
}
