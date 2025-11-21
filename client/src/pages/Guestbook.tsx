import CommentForm from "@/components/CommentForm";
import CommentCard from "@/components/CommentCard";
import { useState } from "react";

export default function Guestbook() {
  const [comments] = useState([
    {
      id: 1,
      name: "李小明",
      message: "你的筆記整理得非常清楚，對我準備考試很有幫助！特別是微積分的部分，例題很實用。",
      date: "2024-11-06",
    },
    {
      id: 2,
      name: "王美玲",
      message: "JavaScript 的筆記寫得很棒，解釋得很清楚。希望可以看到更多關於 React 進階應用的內容！",
      date: "2024-11-05",
    },
    {
      id: 3,
      name: "張大偉",
      message: "感謝分享這麼棒的學習資源！線性代數的筆記幫助我理解了很多之前不懂的概念。",
      date: "2024-11-04",
    },
    {
      id: 4,
      name: "劉小芳",
      message: "你的筆記不僅內容豐富，排版也很清晰易讀。建議可以加入更多圖解會更好理解。",
      date: "2024-11-02",
    },
    {
      id: 5,
      name: "陳建宏",
      message: "Python 資料科學的筆記很實用！期待看到更多實際應用的案例分享。",
      date: "2024-10-30",
    },
  ]);

  const handleSubmit = (data: { name: string; message: string }) => {
    console.log("New comment:", data);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">留言板</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              歡迎留下您的想法、建議或任何想說的話！您的回饋對我來說非常重要。
            </p>
          </div>

          <CommentForm onSubmit={handleSubmit} />

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">所有留言 ({comments.length})</h2>
            <div className="space-y-4">
              {comments.map((comment) => (
                <CommentCard key={comment.id} {...comment} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
