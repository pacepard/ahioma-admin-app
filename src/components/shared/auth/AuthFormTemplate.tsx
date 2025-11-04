import Image, { StaticImageData } from "next/image";

type Props = {
  image: StaticImageData | string;
  children: React.ReactNode;
};

export default function AuthFormTemplate({ image, children }: Props) {
  return (
    <section>
      <div className="overflow-hidden p-10">
        <div className="w-full flex  mx-auto px-4  sm:px-8 xl:px-0">
          <div className="hidden lg:block p-16 lg:w-1/2 relative">
            <Image
              src={image}
              alt=""
              placeholder="blur"
              className="h-full rounded-2xl  w-full bg-cover bg-center overflow-hidden relative"
              fill
            />
          </div>

          <div className="max-w-[500px] w-full mx-auto rounded-xl bg-white shadow-1 p-4 sm:p-7.5 xl:p-11">{children}</div>
        </div>
      </div>
    </section>
  );
}
