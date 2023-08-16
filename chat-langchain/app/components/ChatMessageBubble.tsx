import type { Message } from "ai/react";

export function ChatMessageBubble(props: {
  message: Message;
  aiEmoji?: string;
}) {
  const colorClassName =
    props.message.role === "user" ? "bg-sky-600" : "bg-slate-50 text-black";
  const alignmentClassName =
    props.message.role === "user" ? "mr-auto" : "ml-auto";
  const prefix = props.message.role === "user" ? "🧑" : props.aiEmoji;
  return (
    <div
      className={`${alignmentClassName} ${colorClassName} rounded px-4 py-2 max-w-[80%] mb-8 flex break-words`}
    >
      <div className="mr-2">{prefix}</div>
      <div
        className="whitespace-pre-wrap"
        dangerouslySetInnerHTML={{ __html: props.message.content }}
      ></div>
    </div>
  );
}