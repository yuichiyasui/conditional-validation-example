import { z } from "zod";

export const needMessageOption = {
  yes: "1",
  no: "0",
} as const;

const baseSchema = z.object({
  type: z.string().min(1, { message: "包装の種類を選択してください" }),
  color: z.string().min(1, {
    message: "色を選択してください",
  }),
  needMessage: z.enum([needMessageOption.yes, needMessageOption.no]),
});

const conditionalSchema = z.discriminatedUnion("needMessage", [
  z.object({
    needMessage: z.literal(needMessageOption.no),
    message: z.undefined(),
  }),
  z.object({
    needMessage: z.literal(needMessageOption.yes),
    message: z.string().min(1, {
      message: "メッセージを入力してください",
    }),
  }),
]);

export const schema = baseSchema.and(conditionalSchema);
export type FormValues = z.infer<typeof schema>;
