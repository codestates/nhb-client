import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { Content } from '../../api/postUploadFeed';
import { RootState } from '../../reducers';

type MainpagePoemInputProps = {
  handlePostUploadFeed: (content: Content) => void;
};

const MainpagePoemInput = ({
  handlePostUploadFeed,
}: MainpagePoemInputProps) => {
  const state = useSelector((state: RootState) => state.reducer);
  //? 오늘의 주제어 불러오기
  // const { todaysTopic } = state;
  // const topic = todaysTopic.join('');
  const todaysTopic = ['여', '행'];
  const topic = todaysTopic.join('');

  const [val, setVal] = useState<Content>({
    content: [],
    word: topic,
  });

  const onPoemChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setVal((state) => {
      const { content } = state;
      const text: any = content.slice();
      text[name] = value;
      return { content: text, word: topic };
    });
  };
  const onPoemSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log('val:', val);
    handlePostUploadFeed(val);
    setVal({
      content: [],
      word: topic,
    });
  };

  return (
    <>
      <h1>PoemInput</h1>
      <form onSubmit={onPoemSubmit}>
        {todaysTopic.map((letter, idx) => {
          const key = letter + String(idx);
          return (
            <div key={key}>
              <input
                type="text"
                name={String(idx)}
                value={val.content[idx]}
                onChange={onPoemChange}
                required={true}
              />
            </div>
          );
        })}
        <button type="submit">작성하기</button>
      </form>
    </>
  );
};

export default MainpagePoemInput;
