import { FC } from 'react';
import Main from './components/Main';

const App: FC = () => {
  console.log('yaa');

  return (
    <div className="grid grid-cols-2">
      <div className="bg-purple-900">
        <p className="">タイムラインが表示される</p>
      </div>
      <Main />
    </div>
  );
};

export default App;
