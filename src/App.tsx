export default function App() {
  return (
    <div>
      <header className="p-4">
        <h1 className="text-xl font-bold">Conditional Validation Example</h1>
      </header>

      <main className="p-4">
        <h2>ギフトの設定</h2>
        <form>
          <div>
            <label htmlFor="type">包装の種類</label>
            <select
              id="type"
              className="select select-bordered w-full max-w-xs"
            >
              <option value="" disabled selected>
                選択してください
              </option>
              <option value="1">ラッピング</option>
              <option value="2">リボン</option>
            </select>
          </div>
          <div>
            <label htmlFor="color">色</label>
            <select id="color">
              <option value="" disabled selected>
                選択してください
              </option>
              <option value="1">赤</option>
              <option value="2">青</option>
              <option value="3">黄</option>
            </select>
          </div>
          <div>
            <label htmlFor="needMessage">
              メッセージカードを添付しますか？
            </label>
            <input type="radio" name="" id="" />
            <input type="radio" name="" id="" />
          </div>
          <div>
            <label htmlFor="message">メッセージ</label>
            <textarea id="message"></textarea>
          </div>
        </form>
      </main>
    </div>
  );
}
