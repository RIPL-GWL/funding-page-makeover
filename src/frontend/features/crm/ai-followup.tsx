import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { draftFollowupMessage } from "@/lib/programme.functions";

const sel = "rounded-md border bg-background px-2 py-1.5 text-sm text-foreground";

export function AiFollowupDraft({ dealId }: { dealId: string }) {
  const [channel, setChannel] = useState<"whatsapp" | "email" | "sms">("whatsapp");
  const [language, setLanguage] = useState<"hinglish" | "english" | "hindi">("hinglish");
  const [context, setContext] = useState("");
  const [text, setText] = useState("");
  const [busy, setBusy] = useState(false);

  async function draft() {
    setBusy(true);
    try {
      const res = await draftFollowupMessage({ data: { dealId, channel, language, context } });
      if (res.ok) setText(res.text); else toast.error(res.error);
    } catch { toast.error("Message tayyar nahi ho paya."); }
    setBusy(false);
  }

  return (
    <section className="space-y-3 rounded-lg border bg-card p-4">
      <h2 className="font-semibold text-foreground">AI follow-up message</h2>
      <p className="text-sm text-muted-foreground">Deal details aur pichhli baatcheet ke basis par customer ke liye personalised message.</p>
      <div className="flex flex-wrap gap-2">
        <select aria-label="Channel" className={sel} value={channel} onChange={(e) => setChannel(e.target.value as typeof channel)}><option value="whatsapp">WhatsApp</option><option value="email">Email</option><option value="sms">SMS</option></select>
        <select aria-label="Language" className={sel} value={language} onChange={(e) => setLanguage(e.target.value as typeof language)}><option value="hinglish">Hinglish</option><option value="english">English</option><option value="hindi">Hindi</option></select>
      </div>
      <textarea aria-label="Extra details" className="w-full rounded-md border bg-background p-2 text-sm text-foreground" rows={2} maxLength={2000} value={context} onChange={(e) => setContext(e.target.value)} placeholder="Extra jaankari (jaise: customer ne price par sochne ka time maanga)" />
      <Button onClick={draft} disabled={busy}>{busy ? "Tayyar ho raha hai…" : "Message tayyar karein"}</Button>
      {text && <div className="space-y-2"><textarea aria-label="Draft message" className="w-full rounded-md border bg-background p-2 text-sm text-foreground" rows={6} value={text} onChange={(e) => setText(e.target.value)} /><Button variant="outline" onClick={() => { navigator.clipboard.writeText(text); toast.success("Copy ho gaya"); }}>Copy</Button></div>}
    </section>
  );
}
