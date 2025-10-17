import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Twitter, Copy, Share2, MessageCircle, Instagram } from "lucide-react";

interface ShareModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  hours: number;
  level: string;
  emoji: string;
}

const ShareModal = ({ open, onOpenChange, hours, level, emoji }: ShareModalProps) => {
  const shareText = `I haven't showered in ${hours} hours! My SniffScore: "${level}" ${emoji} \n\nHaving fun with SniffCheck — it's just for laughs!\n\nCheck your score at SniffCheck.`;
  const shareUrl = window.location.origin;

  const handleTwitterShare = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(twitterUrl, "_blank", "width=600,height=400");
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${shareText}\n\n${shareUrl}`);
    toast.success("Copied to clipboard! 📋", {
    description: "Now share your SniffScore with the world!",
    });
  };

  const handleWhatsAppShare = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${shareText}\n\n${shareUrl}`)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleInstagramShare = () => {
    // Instagram doesn't have direct web share, so copy to clipboard with instructions
    navigator.clipboard.writeText(`${shareText}\n\n${shareUrl}`);
    toast.success("Copied for Instagram! 📸", {
      description: "Open Instagram and paste in your story or DM!",
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
      <DialogContent className="sm:max-w-md border-4 border-primary/30 shadow-glow max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl sm:text-3xl text-center">
            Share Your SniffScore 📤
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="p-4 rounded-2xl bg-muted/50 text-center animate-pulse">
            <p className="text-sm text-muted-foreground mb-2">Your Score:</p>
            <p className="text-3xl sm:text-4xl font-heading">
              {emoji} {level}
            </p>
            <p className="text-lg sm:text-xl mt-2 font-semibold">{hours} hours since shower</p>
          </div>

          <div className="grid gap-3">
            <Button
              onClick={handleWhatsAppShare}
              className="w-full rounded-full font-semibold transition-bouncy hover:scale-105 bg-[#25D366] hover:bg-[#20BA5A] text-white"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Share on WhatsApp
            </Button>

            <Button
              onClick={handleInstagramShare}
              className="w-full rounded-full font-semibold transition-bouncy hover:scale-105 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white"
            >
              <Instagram className="mr-2 h-5 w-5" />
              Share on Instagram
            </Button>

            <Button
              onClick={handleTwitterShare}
              className="w-full rounded-full font-semibold transition-bouncy hover:scale-105 bg-black hover:bg-gray-900 text-white"
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
              More Options...
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
            <p className="text-xs text-center text-muted-foreground animate-fade-in">
            💡 Share your score and have a laugh with friends!<br/>
            <span className="text-[10px]">(Keep it friendly and respectful.)</span>
          </p>

          <div className="mt-3">
            <Button
              onClick={() => { window.location.href = '/contact'; }}
              variant="ghost"
              className="w-full rounded-full font-semibold"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Report inappropriate content
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareModal;
