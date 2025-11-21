import NoteCard from '../NoteCard'
import studyImage from '@assets/generated_images/Study_notes_thumbnail_3d2a37e8.png'

export default function NoteCardExample() {
  return (
    <div className="max-w-sm">
      <NoteCard
        id={1}
        title="微積分學習筆記 - 極限與連續"
        excerpt="深入探討函數極限的定義、性質以及連續函數的概念。包含豐富的例題和解題技巧。"
        category="數學"
        tags={["微積分", "極限"]}
        date="2024-11-05"
        readTime="8 分鐘"
        imageUrl={studyImage}
      />
    </div>
  )
}
