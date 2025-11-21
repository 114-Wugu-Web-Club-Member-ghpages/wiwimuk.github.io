import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";
import { useState } from "react";

interface CommentFormProps {
  onSubmit?: (data: { name: string; message: string }) => void;
}

export default function CommentForm({ onSubmit }: CommentFormProps) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Comment submitted:", { name, message });
    if (onSubmit) {
      onSubmit({ name, message });
    }
    setName("");
    setMessage("");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>留下您的訊息</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">姓名</Label>
            <Input
              id="name"
              placeholder="請輸入您的姓名"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              data-testid="input-name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">留言內容</Label>
            <Textarea
              id="message"
              placeholder="分享您的想法或建議..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              data-testid="input-message"
            />
          </div>
          <Button type="submit" className="gap-2" data-testid="button-submit">
            <Send className="w-4 h-4" />
            送出留言
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
