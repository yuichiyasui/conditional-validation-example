import { useForm, SubmitHandler } from "react-hook-form";
import { clsx } from "clsx";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormValues, needMessageOption, schema } from "./schema";

type Id = {
  field: string;
  errorMessage: string;
};

const idDict = {
  type: {
    field: "type-field",
    errorMessage: "type-error",
  },
  color: {
    field: "color-field",
    errorMessage: "color-error",
  },
  message: {
    field: "message-field",
    errorMessage: "message-error",
  },
} as const satisfies Record<string, Id>;

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = () => {
    alert("確認画面に遷移します");
  };

  const needMessageValue = watch("needMessage");
  const needMessage = needMessageValue === needMessageOption.yes;

  return (
    <>
      <header className="p-4">
        <h1 className="text-2xl font-bold">Conditional Validation Example</h1>
      </header>

      <main className="p-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-y-2"
        >
          <h2 className="font-bold text-xl mb-2">ギフトの設定</h2>
          <div className="form-control">
            <label htmlFor={idDict.type.field} className="label">
              包装の種類
            </label>
            <select
              {...register("type")}
              defaultValue=""
              id={idDict.type.field}
              aria-errormessage={idDict.type.errorMessage}
              aria-required
              aria-invalid={!!errors.type}
              className={clsx(
                "select",
                "select-bordered",
                "w-full",
                "max-w-xs",
                errors.type && "select-error",
              )}
            >
              <option value="" disabled>
                選択してください
              </option>
              <option value="1">ラッピング</option>
              <option value="2">リボン</option>
            </select>
            <p
              id={idDict.type.errorMessage}
              aria-live="assertive"
              className="text-error text-sm empty:mt-0 mt-2"
            >
              {errors.type && errors.type.message}
            </p>
          </div>
          <div className="form-control">
            <label htmlFor={idDict.color.field} className="label">
              色
            </label>
            <select
              {...register("color")}
              defaultValue=""
              id={idDict.color.field}
              aria-required
              aria-errormessage={idDict.color.errorMessage}
              aria-invalid={!!errors.color}
              className={clsx(
                "select",
                "select-bordered",
                "w-full",
                "max-w-xs",
                errors.color && "select-error",
              )}
            >
              <option value="" disabled>
                選択してください
              </option>
              <option value="1">赤</option>
              <option value="2">青</option>
              <option value="3">黄</option>
            </select>
            <p
              id={idDict.color.errorMessage}
              aria-live="assertive"
              className="text-error text-sm empty:mt-0 mt-2"
            >
              {errors.color && errors.color.message}
            </p>
          </div>
          <fieldset className="form-control">
            <legend className="label">メッセージカードを添付しますか？</legend>
            <div className="flex gap-x-4">
              <label className="flex items-center gap-x-2">
                <input
                  {...register("needMessage")}
                  type="radio"
                  defaultChecked
                  value={needMessageOption.no}
                  className="radio"
                />
                <span className="text-sm">いいえ</span>
              </label>
              <label className="flex items-center gap-x-2">
                <input
                  {...register("needMessage")}
                  type="radio"
                  value={needMessageOption.yes}
                  className="radio"
                />
                <span className="text-sm">はい</span>
              </label>
            </div>
          </fieldset>
          {needMessage && (
            <div className="form-control">
              <label htmlFor={idDict.message.field} className="label">
                メッセージ
              </label>
              <textarea
                {...register("message")}
                id={idDict.message.field}
                aria-required
                aria-errormessage={idDict.message.errorMessage}
                aria-invalid={!!errors.message}
                placeholder="お誕生日おめでとう"
                className={clsx(
                  "textarea",
                  "textarea-bordered",
                  "max-w-xs",
                  "w-full",
                  "placeholder:text-gray-400",
                  "placeholder:text-opacity-50",
                  errors.message && "textarea-error",
                )}
              ></textarea>
              <p
                id={idDict.message.errorMessage}
                aria-live="assertive"
                className="text-error text-sm empty:mt-0 mt-2"
              >
                {errors.message && errors.message.message}
              </p>
            </div>
          )}
          <button
            type="submit"
            className="btn btn-primary w-min whitespace-nowrap mt-4"
          >
            内容を確認する
          </button>
        </form>
      </main>
    </>
  );
}
