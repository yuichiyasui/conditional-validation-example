export default function App() {
  return (
    <div>
      <header className="p-4">
        <h1 className="text-2xl font-bold">Conditional Validation Example</h1>
      </header>

      <main className="p-4">
        <h2 className="font-bold text-xl mb-2">ギフトの設定</h2>
        <form className="flex flex-col gap-y-2">
          <div className="form-control">
            <label htmlFor="type" className="label">
              包装の種類
            </label>
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
          <div className="form-control">
            <label htmlFor="color" className="label">
              色
            </label>
            <select
              id="color"
              className="select select-bordered w-full max-w-xs"
            >
              <option value="" disabled selected>
                選択してください
              </option>
              <option value="1">赤</option>
              <option value="2">青</option>
              <option value="3">黄</option>
            </select>
          </div>
          <fieldset className="form-control">
            <legend className="label">メッセージカードを添付しますか？</legend>
            <div className="flex gap-x-4">
              <label className="flex items-center gap-x-2">
                <input
                  type="radio"
                  name="needMessage"
                  defaultChecked
                  className="radio"
                />
                <span className="text-sm">いいえ</span>
              </label>
              <label className="flex items-center gap-x-2">
                <input type="radio" name="needMessage" className="radio" />
                <span className="text-sm">はい</span>
              </label>
            </div>
          </fieldset>
          <div className="form-control">
            <label htmlFor="message" className="label">
              メッセージ
            </label>
            <textarea
              id="message"
              placeholder="お誕生日おめでとう"
              className="textarea textarea-bordered max-w-xs w-full"
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary w-min whitespace-nowrap mt-4"
          >
            内容を確認する
          </button>
        </form>
      </main>
    </div>
  );
}
