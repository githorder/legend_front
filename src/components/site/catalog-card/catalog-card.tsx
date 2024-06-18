import Image from "next/image";

import { useTranslation } from "@/lib/i18n";

import { DEFAULT_VIEWPORT_WIDTH } from "@/constants/site";

export default async function CatalogCard({
  width,
  height,
  volume,
  name,
  src,
  alt,
  isEmpty,
  key,
  isMain,
}: {
  width: number;
  height: number;
  volume: string;
  name: string;
  src: string;
  alt: string;
  isEmpty: boolean;
  key?: number | string;
  isMain?: boolean;
}) {
  const { t } = await useTranslation("ru");

  return (
    <div
      key={key}
      className="flex-1 flex flex-col items-center justify-between h-[500px]"
    >
      <div className="relative">
        <Image
          alt={alt}
          src={src}
          width={width}
          height={height}
          className={`w-[${((width / DEFAULT_VIEWPORT_WIDTH) * 100).toFixed(
            2
          )}vw] h-[${((height / DEFAULT_VIEWPORT_WIDTH) * 100).toFixed(2)}vw]`}
        />
        {isEmpty ? (
          <span className="uppercase large-normal absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            {t("Скоро")}
          </span>
        ) : null}
        {isMain ? (
          <>
            <Image
              alt="волна"
              src="/assets/water-flow.png"
              width={381}
              height={276}
              className={`w-[${((381 / DEFAULT_VIEWPORT_WIDTH) * 100).toFixed(
                2
              )}] h-[${((276 / DEFAULT_VIEWPORT_WIDTH) * 100).toFixed(
                2
              )}] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}
            />
            <Image
              alt="тень от бутылки"
              src="/assets/bottle-shadow.svg"
              width={166}
              height={19}
              className={`w-[${((166 / DEFAULT_VIEWPORT_WIDTH) * 100).toFixed(
                2
              )}] h-[${((19 / DEFAULT_VIEWPORT_WIDTH) * 100).toFixed(
                2
              )}] absolute bottom-[0] left-[50%] translate-x-[-50%]`}
            />
          </>
        ) : null}
      </div>
      <div className="flex flex-col items-center gap-[3px]">
        <span className="medium-normal uppercase">{volume}</span>
        <p className="base-medium">{name}</p>
      </div>
    </div>
  );
}
