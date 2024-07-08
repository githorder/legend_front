import { useTranslation } from "@/lib/i18n";
import Image from "next/image";
import Link from "next/link";

export default async function CampanyCard({
  src,
  alt,
  width,
  height,
  key,
  lang,
  date,
  title,
  text,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  key?: number | string;
  lang: string;
  date: string;
  title: string;
  text: string;
}) {
  const { t } = await useTranslation(lang);

  return (
    <div key={key} className="flex flex-col gap-[20px] w-[25%] max-xs:w-[100%]">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full"
      />

      <div className="flex flex-col max-xs:px-[10px]">
        <span className="small-semibold mb-[10px]">{date}</span>
        <h4 className="small-semibold mb-[10px]">{t(title)}</h4>
        <p className="base-light mb-[24px]">{t(text)}</p>
        <Link className="small-semibold" href="#">
          {t("Подробнее")}
        </Link>
      </div>
    </div>
  );
}
