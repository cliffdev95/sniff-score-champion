import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Twitter, Copy, Share2 } from "lucide-react";

interface ShareModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  hours: number;
  level: string;
  emoji: string;
}

const ShareModal = ({ open, onOpenChange, hours, level, emoji }: ShareModalProps) => {
  const shareText = `My SniffScore: ${level} ${emoji}\nI haven't showered in ${hours} hours! 😂\n\nCheck yours at SniffScore!`;
  const shareUrl = window.location.origin;

  const handleTwitterShare = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(twitterUrl, "_blank", "width=600,height=400");
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${shareText}\n\n${shareUrl}`);
    toast.success("Copied to clipboard! 📋", {
      description: "Now share your funky score with the world!",
    });
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "My SniffScore",
          text: shareText,
          url: shareUrl,
        });
      } catch (error) {
        if ((error as Error).name !== "AbortError") {
          handleCopyLink();
        }
      }
    } else {
      handleCopyLink();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md border-4 border-primary/30 shadow-glow">
        <DialogHeader>
          <DialogTitle className="font-heading text-3xl text-center">
            Share Your Funky Score! 📤
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="p-4 rounded-2xl bg-muted/50 text-center">
            <p className="text-sm text-muted-foreground mb-2">Your Score:</p>
            <p className="text-2xl font-heading">
              {emoji} {level}
            </p>
            <p className="text-lg mt-2">{hours} hours since shower</p>
          </div>

          <div className="grid gap-3">
            <Button
              onClick={handleTwitterShare}
              className="w-full rounded-full font-semibold transition-bouncy hover:scale-105"
              variant="default"
            >
              <Twitter className="mr-2 h-5 w-5" />
              Share on X (Twitter)
            </Button>

            <Button
              onClick={handleNativeShare}
              className="w-full rounded-full font-semibold transition-bouncy hover:scale-105"
              variant="secondary"
            >
              <Share2 className="mr-2 h-5 w-5" />
              Share via...
            </Button>

            <Button
              onClick={handleCopyLink}
              className="w-full rounded-full font-semibold transition-bouncy hover:scale-105"
              variant="outline"
            >
              <Copy className="mr-2 h-5 w-5" />
              Copy to Clipboard
            </Button>
          </div>

          <p className="text-xs text-center text-muted-foreground">
            Share responsibly. Your friends might judge you. 😅
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareModal;
