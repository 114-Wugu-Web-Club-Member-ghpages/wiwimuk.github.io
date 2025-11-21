import { useRoute } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { Link } from "wouter";
import mathImage from '@assets/generated_images/Math_notes_image_aaa165c2.png';
import programmingImage from '@assets/generated_images/Programming_notes_image_071eb3a1.png';

export default function NoteDetail() {
  const [, params] = useRoute("/note/:id");
  const noteId = params?.id;

  const notes = {
    "1": {
      title: "微積分學習筆記 - 極限與連續",
      category: "數學",
      tags: ["微積分", "極限", "連續"],
      date: "2024-11-05",
      readTime: "8 分鐘",
      imageUrl: mathImage,
      content: `
## 前言

極限是微積分的基礎概念，理解極限對於後續學習導數和積分至關重要。本篇筆記將詳細介紹極限的定義、性質以及連續函數的概念。

## 極限的定義

函數 f(x) 在 x 趨近於 a 時的極限為 L，記作：

lim(x→a) f(x) = L

這表示當 x 無限接近 a（但不等於 a）時，f(x) 的值會無限接近 L。

### 重要性質

1. **唯一性**：如果極限存在，則極限值是唯一的
2. **局部有界性**：如果極限存在，則函數在該點附近必定有界
3. **保號性**：如果極限大於零，則函數在該點附近的值也大於零

## 極限的運算法則

假設 lim(x→a) f(x) = A，lim(x→a) g(x) = B，則：

- **和的極限**：lim(x→a) [f(x) + g(x)] = A + B
- **積的極限**：lim(x→a) [f(x) × g(x)] = A × B
- **商的極限**：lim(x→a) [f(x) / g(x)] = A / B（B ≠ 0）

## 連續函數

如果函數 f(x) 在點 a 處連續，必須滿足三個條件：

1. f(a) 有定義
2. lim(x→a) f(x) 存在
3. lim(x→a) f(x) = f(a)

### 連續函數的性質

- 連續函數的和、差、積、商（分母不為零）仍為連續函數
- 連續函數的複合函數仍為連續函數
- 初等函數在其定義域內都是連續的

## 實用技巧

計算極限時常用的方法：

1. **直接代入法**：當函數連續時，直接將 x = a 代入
2. **因式分解**：處理 0/0 型不定式
3. **有理化**：處理根式極限
4. **洛必達法則**：處理不定式（進階）

## 總結

極限和連續是微積分的基石。掌握這些概念不僅有助於理解導數和積分，也能培養嚴謹的數學思維。建議多做練習題來鞏固理解。
      `,
    },
    "2": {
      title: "JavaScript ES6+ 新特性整理",
      category: "程式設計",
      tags: ["JavaScript", "ES6", "前端"],
      date: "2024-11-03",
      readTime: "12 分鐘",
      imageUrl: programmingImage,
      content: `
## 前言

ES6（ECMAScript 2015）為 JavaScript 帶來了許多強大的新特性，讓程式碼更簡潔、易讀且易於維護。本篇整理了最常用的 ES6+ 特性。

## 變數宣告：let 和 const

\`\`\`javascript
// const：宣告常數，不可重新賦值
const PI = 3.14159;

// let：區塊作用域的變數
let count = 0;
count = 1; // 可以重新賦值
\`\`\`

## 箭頭函數

箭頭函數提供了更簡潔的函數寫法：

\`\`\`javascript
// 傳統函數
function add(a, b) {
  return a + b;
}

// 箭頭函數
const add = (a, b) => a + b;
\`\`\`

## 解構賦值

快速從物件或陣列中提取值：

\`\`\`javascript
// 物件解構
const user = { name: '小明', age: 20 };
const { name, age } = user;

// 陣列解構
const [first, second] = [1, 2, 3];
\`\`\`

## 展開運算子

\`\`\`javascript
// 陣列展開
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

// 物件展開
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
\`\`\`

## Promise 和 async/await

處理非同步操作的現代方式：

\`\`\`javascript
// Promise
fetch('/api/data')
  .then(response => response.json())
  .then(data => console.log(data));

// async/await
async function fetchData() {
  const response = await fetch('/api/data');
  const data = await response.json();
  return data;
}
\`\`\`

## 總結

ES6+ 的新特性大大提升了 JavaScript 的開發體驗。建議在實際專案中多加練習這些特性，讓程式碼更加優雅且易於維護。
      `,
    },
  };

  const note = noteId ? notes[noteId as keyof typeof notes] : null;

  if (!note) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-semibold">找不到此筆記</h1>
          <Link href="/">
            <Button>返回首頁</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          <Link href="/">
            <Button variant="ghost" className="gap-2 mb-4" data-testid="button-back">
              <ArrowLeft className="w-4 h-4" />
              返回筆記列表
            </Button>
          </Link>

          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary" data-testid="text-category">{note.category}</Badge>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="w-3 h-3" />
                <span>{note.date}</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="w-3 h-3" />
                <span>{note.readTime}</span>
              </div>
            </div>

            <h1 className="text-4xl font-bold leading-tight" data-testid="text-title">
              {note.title}
            </h1>

            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b">
              <div className="flex flex-wrap gap-2">
                {note.tags.map((tag) => (
                  <Badge key={tag} variant="outline" data-testid={`badge-tag-${tag}`}>
                    {tag}
                  </Badge>
                ))}
              </div>
              <Button variant="outline" className="gap-2" data-testid="button-share">
                <Share2 className="w-4 h-4" />
                分享
              </Button>
            </div>
          </div>

          {note.imageUrl && (
            <div className="w-full aspect-video overflow-hidden rounded-lg">
              <img
                src={note.imageUrl}
                alt={note.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="prose prose-lg max-w-none">
            {note.content.split('\n').map((line, idx) => {
              if (line.startsWith('## ')) {
                return <h2 key={idx} className="text-2xl font-semibold mt-8 mb-4">{line.slice(3)}</h2>;
              } else if (line.startsWith('### ')) {
                return <h3 key={idx} className="text-xl font-semibold mt-6 mb-3">{line.slice(4)}</h3>;
              } else if (line.startsWith('```')) {
                return null;
              } else if (line.startsWith('- ')) {
                return <li key={idx} className="ml-6 text-muted-foreground leading-relaxed">{line.slice(2)}</li>;
              } else if (line.trim() === '') {
                return <br key={idx} />;
              } else {
                return <p key={idx} className="text-muted-foreground leading-relaxed mb-4">{line}</p>;
              }
            })}
          </div>

          <div className="pt-8 border-t">
            <Link href="/">
              <Button variant="outline" className="gap-2" data-testid="button-back-bottom">
                <ArrowLeft className="w-4 h-4" />
                返回筆記列表
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
