import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#f4f6f7] ">
      <div className="flex mt-[70px] flex-col container mx-auto">
        <div className="flex items-center justify-around">
          <img
            className="h-[300px]  w-[270px]"
            src="https://alifshop.uz/_ipx/_/images/illustrations/alifshop-app-uz.png"
            alt="img"
          />

          <div className="flex flex-col gap-[10px] ">
            <h1 className="text-2xl font-bold">
              Ajoyib takliflar har doim <span className="block"></span>{" "}
              yoningizda
            </h1>
            <h1>
              alif shop ilovasi orqali buyurtma qiling, va qulay takliflar
              haqida <span className="block"></span> hammadan tez biling
            </h1>
            <div className="flex gap-[10px] items-center">
              <a href="https://play.google.com/store/apps/details?id=com.aliftech.alifshop&pli=1">
                <img
                  src="https://alifshop.uz/images/play-market-icon.svg"
                  alt="img"
                />
              </a>
              <a href="https://apps.apple.com/uz/app/alifshop-%D0%BC%D0%B0%D1%80%D0%BA%D0%B5%D1%82%D0%BF%D0%BB%D0%B5%D0%B9%D1%81-%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D0%BA%D0%B8/id6443502616">
                <img
                  src="https://alifshop.uz/images/app-store-icon.svg"
                  alt="img"
                />
              </a>
              <a href="https://alifshop.uz/images/app-gallery-icon.svg">
                <img
                  src="https://alifshop.uz/images/app-gallery-icon.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://alifshop.uz/_ipx/f_webp,s_104x104/images/alifshop-qr-code.webp"
              alt="img"
            />
            <p className="text-center">
              Yuklab olish uchun <span className="block"></span> kamerangizni QR
              kodga <span className="block"></span> qarating
            </p>
          </div>
        </div>
      </div>
      <div className=" border-t-[1px] pb-[30px] border-gray-300">
        <div className="container gap-[30px] mx-auto pt-[30px] flex items-center">
          <div className="flex flex-col gap-[10px]">
            <h1 className="font-semibold text-xl">alif shop</h1>
            <p>
              alifshop.uz - xaridorlarga tez va qulay tarzda turli xil
              tovarlarni sotib olish imkoniyatini beradigan marketpleys.
              alifshop.uz saytida smartfon, kompyuter, planshet, televizor,
              aqlli soat va boshqa ko'plab moslamalarni topishingiz mumkin.
            </p>
            <h1 className="text-[#2a8be7]">Barchasini ko'rsatish</h1>
          </div>
          <div className="flex flex-col gap-[10px]">
            <h1 className="font-semibold text-xl">
              Smartfonlar muddatli to'lov asosida
            </h1>
            <p>
              Bugungi kunda yuqori texnologiyalar davrida smartfon kundalik
              hayotimizning ajralmas qismiga aylandi. Zamonaviy telefonlarning
              ilovalari va texnik parametrlari tufayli smartfonlar ko'pincha
              bizning kompyuterlarimiz, kameralarimiz,
            </p>
            <h1 className="text-[#2a8be7]">Barchasini ko'rsatish</h1>
          </div>
          <div className="flex flex-col gap-[10px]">
            <h1 className="font-semibold text-xl">
              {" "}
              Noutbuklar muddatli to'lov asosida
            </h1>
            <p>
              Shaxsiy kompyuterlar bizga o'z ishimizni yuqori sifatli bajarish
              va shu bilan birga bo'sh vaqtimizni unumli o'tkazish imkoniyatini
              beradi. Masalan, noutbuk yordamida tezda dunyoning istalgan
              nuqtasidan, turli xil ishlarni bajarishingiz
            </p>
            <h1 className="text-[#2a8be7]">Barchasini ko'rsatish</h1>
          </div>
          <div className="flex flex-col gap-[10px]">
            <h1 className="font-semibold text-xl">
              {" "}
              Jihozlar muddatli to'lov asosida
            </h1>
            <p>
              Bizning online do'konda elektronikadan tashqari, turli xil maishiy
              texnika mavjud: gaz plitalari, grill tayyorlagichlar,
              muzlatgichlar, kir yuvish mashinalari, dazmollar, konditsionerlar
              va boshqa ko'plab almashtirib bo'lmaydigan narsalar.
            </p>
            <h1 className="text-[#2a8be7]">Barchasini ko'rsatish</h1>
          </div>
        </div>
      </div>
      <div className="bg-[#24272c] h-[400px] ">
        <div className="container mx-auto">
          <div className="flex flex-col">
            <div className="flex justify-between ">
              <div className="flex flex-col gap-[20px] pt-[30px]">
                <h1 className="cursor-pointer text-gray-600">Hujjatlar</h1>
                <h1 className="hover:text-yellow-600 duration-[0.2s] cursor-pointer text-white">
                  Sotish uchun umumiy shartlar
                </h1>
                <h2 className="hover:text-yellow-600 duration-[0.2s] cursor-pointer text-white">
                  Ofertalar arxivi
                </h2>
                <h2 className="hover:text-yellow-600 duration-[0.2s] cursor-pointer text-white">
                  Nizom
                </h2>
                <h2 className="hover:text-yellow-600 duration-[0.2s] cursor-pointer text-white">
                  Guvohnoma
                </h2>
              </div>
              <div className="flex flex-col gap-[20px] pt-[30px]">
                <h1 className="cursor-pointer text-gray-600">Servis</h1>
                <h1 className="hover:text-yellow-600 duration-[0.2s] cursor-pointer text-white">
                  Namoz vaqti
                </h1>
                <h2 className="hover:text-yellow-600 duration-[0.2s] cursor-pointer text-white">
                  Muddatli to'lov islomda
                </h2>
                <h2 className="hover:text-yellow-600 duration-[0.2s] cursor-pointer text-white">
                  alif shopda soting!
                </h2>
                <h2 className="hover:text-yellow-600 duration-[0.2s] cursor-pointer text-white">
                  Qaytarish
                </h2>
              </div>
              <div className="flex flex-col gap-[20px] pt-[30px]">
                <h1 className="cursor-pointer text-gray-600">
                  {" "}
                  Tovarlar katalogi
                </h1>
                <h1 className="hover:text-yellow-600 duration-[0.2s] cursor-pointer text-white">
                  Smartfonlar va telefonlar
                </h1>
                <h2 className="hover:text-yellow-600 duration-[0.2s] cursor-pointer text-white">
                  Gadjetlar
                </h2>
                <h2 className="hover:text-yellow-600 duration-[0.2s] cursor-pointer text-white">
                  Smartfonlar uchun aksessuarlar
                </h2>
                <h2 className="hover:text-yellow-600 duration-[0.2s] cursor-pointer text-white">
                  Tegishli tovarlar
                </h2>
                <h1 className="hover:text-yellow-600 duration-[0.2s] cursor-pointer text-white">
                  Soat va aksessuarlar
                </h1>
              </div>
              <div className="flex flex-col gap-[20px] pt-[30px]">
                <h1 className="cursor-pointer text-gray-600">
                  Biz ijtimoiy axborot vositalarida
                </h1>
                <h1 className="hover:text-yellow-600 duration-[0.2s] cursor-pointer text-white">
                  Smartfonlar va telefonlar
                </h1>
                <h2 className="hover:text-yellow-600 duration-[0.2s] cursor-pointer text-white">
                  Gadjetlar
                </h2>
                <h2 className="hover:text-yellow-600 duration-[0.2s] cursor-pointer text-white">
                  Smartfonlar uchun aksessuarlar
                </h2>
                <h2 className="hover:text-yellow-600 duration-[0.2s] cursor-pointer text-white">
                  Tegishli tovarlar
                </h2>
                <h1 className="hover:text-yellow-600 duration-[0.2s] cursor-pointer text-white">
                  Soat va aksessuarlar
                </h1>
              </div>
              <div className="flex flex-col gap-[20px] pt-[30px]">
                <h1 className="text-gray-600">
                  Biz ijtimoiy axborot vositalarida
                </h1>
                <div className="flex items-center gap-[10px]">
                  <img
                    src="	https://alifshop.uz/_ipx/s_40x40/images/media/instagram.webp"
                    alt=""
                  />
                  <img
                    src="https://alifshop.uz/_ipx/s_40x40/images/media/facebook.svg"
                    alt=""
                  />
                  <img
                    src="	https://alifshop.uz/_ipx/s_40x40/images/media/telegram.svg"
                    alt=""
                  />
                  <img
                    src="	https://alifshop.uz/_ipx/s_40x40/images/media/ok.svg"
                    alt=""
                  />
                  <img
                    src="https://alifshop.uz/_ipx/s_40x40/images/media/tiktok.svg"
                    alt=""
                  />
                </div>
                <h1 className="text-gray-600">Axborot xizmati</h1>
                <h1 className="hover:text-yellow-600 duration-[0.2s] cursor-pointer text-white">
                  @alifshop_uz
                </h1>
                <h1 className="hover:text-yellow-600 duration-[0.2s] cursor-pointer text-white">
                  +998 555 12 12 12
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
