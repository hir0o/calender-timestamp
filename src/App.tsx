import { FC } from 'react';

const App: FC = () => (
  <div className="grid grid-cols-2">
    <div className="bg-purple-900">
      <p className="">タイムラインが表示される</p>
    </div>
    <main className="bg-red-900">ここにボタン類が表示される</main>
  </div>
);

export default App;
