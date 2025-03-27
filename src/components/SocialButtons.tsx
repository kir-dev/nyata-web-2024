import Facebook from "@/icons/facebook.svg";
import Instagram from "@/icons/instagram.svg";
import Email from "@/icons/email.svg";

export function SocialButtons() {
  return (
    <div className="flex flex-row space-x-9">
      <a
        href="https://www.facebook.com/nyata.szakkoli"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook className="w-[52px] h-[52px] transition-colors text-primary hover:text-secondary" />
      </a>
      <a
        href="https://www.instagram.com/nyata_official/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram className="w-[52px] h-[52px] transition-colors text-primary hover:text-secondary" />
      </a>
      <a href={`mailto:${process.env.NEXT_PUBLIC_LEADERSHIP_EMAIL}`}>
        <Email className="w-[52px] h-[52px] transition-colors text-primary hover:text-secondary" />
      </a>
    </div>
  );
}
