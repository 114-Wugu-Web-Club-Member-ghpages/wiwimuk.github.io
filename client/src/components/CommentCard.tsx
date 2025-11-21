import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar } from "lucide-react";

interface CommentCardProps {
  id: number;
  name: string;
  message: string;
  date: string;
  avatarUrl?: string;
}

export default function CommentCard({
  id,
  name,
  message,
  date,
  avatarUrl,
}: CommentCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <Card className="border-l-4 border-l-primary" data-testid={`card-comment-${id}`}>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <Avatar>
            <AvatarImage src={avatarUrl} alt={name} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h4 className="font-semibold" data-testid={`text-name-${id}`}>{name}</h4>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="w-3 h-3" />
                <span>{date}</span>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed" data-testid={`text-message-${id}`}>
              {message}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
