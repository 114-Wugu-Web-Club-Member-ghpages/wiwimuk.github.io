import NoteCard from "@/components/NoteCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import { useState } from "react";
import studyImage from '@assets/generated_images/Study_notes_thumbnail_3d2a37e8.png';
import mathImage from '@assets/generated_images/Math_notes_image_aaa165c2.png';
import programmingImage from '@assets/generated_images/Programming_notes_image_071eb3a1.png';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const notes = [
    {
      id: 1,
      title: "微積分學習筆記 - 極限與連續",
      excerpt: "深入探討函數極限的定義、性質以及連續函數的概念。包含豐富的例題和解題技巧，幫助理解抽象的數學概念。",
      category: "數學",
      tags: ["微積分", "極限", "連續"],
      date: "2024-11-05",
      readTime: "8 分鐘",
      imageUrl: mathImage,
    },
    {
      id: 2,
      title: "JavaScript ES6+ 新特性整理",
      excerpt: "整理 JavaScript ES6 以後的重要新特性，包括箭頭函數、解構賦值、Promise、async/await 等，附帶實用範例。",
      category: "程式設計",
      tags: ["JavaScript", "ES6", "前端"],
      date: "2024-11-03",
      readTime: "12 分鐘",
      imageUrl: programmingImage,
    },
    {
      id: 3,
      title: "線性代數筆記 - 矩陣運算",
      excerpt: "詳細說明矩陣的基本運算、行列式計算、以及矩陣的應用。包含完整的證明過程和計算步驟。",
      category: "數學",
      tags: ["線性代數", "矩陣"],
      date: "2024-10-28",
      readTime: "10 分鐘",
      imageUrl: studyImage,
    },
    {
      id: 4,
      title: "React Hooks 完整指南",
      excerpt: "從基礎到進階，完整介紹 React Hooks 的使用方式，包括 useState、useEffect、useContext 等常用 Hooks。",
      category: "程式設計",
      tags: ["React", "Hooks", "前端"],
      date: "2024-10-25",
      readTime: "15 分鐘",
      imageUrl: programmingImage,
    },
    {
      id: 5,
      title: "機率統計重點整理",
      excerpt: "整理機率論和統計學的核心概念，包括機率分布、期望值、變異數等重要觀念，適合期末複習使用。",
      category: "數學",
      tags: ["統計", "機率"],
      date: "2024-10-20",
      readTime: "9 分鐘",
      imageUrl: mathImage,
    },
    {
      id: 6,
      title: "Python 資料科學入門",
      excerpt: "使用 Python 進行資料分析的基礎知識，介紹 NumPy、Pandas 等常用套件的使用方法和實際應用。",
      category: "程式設計",
      tags: ["Python", "資料科學"],
      date: "2024-10-15",
      readTime: "11 分鐘",
      imageUrl: studyImage,
    },
  ];

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">學習筆記</h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              歡迎來到我的學習筆記網站！這裡分享我在學習過程中整理的各種筆記，包括數學、程式設計等多個領域。希望這些內容能對你的學習有所幫助。
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px] relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="搜尋筆記標題、內容或標籤..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
                data-testid="input-search"
              />
            </div>
            <Button variant="outline" className="gap-2" data-testid="button-filter">
              <Filter className="w-4 h-4" />
              篩選
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNotes.map((note) => (
              <NoteCard key={note.id} {...note} />
            ))}
          </div>

          {filteredNotes.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">找不到符合的筆記</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
