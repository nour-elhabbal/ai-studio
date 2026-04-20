import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div>
      <h1 className="text-center text-2xl font-bold text-foreground">
        {t("title")}
      </h1>
    </div>
  );
}
