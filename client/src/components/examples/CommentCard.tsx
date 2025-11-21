import CommentCard from '../CommentCard'

export default function CommentCardExample() {
  return (
    <div className="max-w-2xl">
      <CommentCard
        id={1}
        name="李小明"
        message="你的筆記整理得非常清楚，對我準備考試很有幫助！特別是微積分的部分，例題很實用。"
        date="2024-11-06"
      />
    </div>
  )
}
