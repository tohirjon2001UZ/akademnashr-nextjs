import Main from "./components/Main";

export default function page() {
  return (
    <Main>
      <section className="lg:max-w-300 mx-auto pt-20">
        <div className="flex justify-between">
          <div className="flex flex-col my-20 mr-52">
            <span className="bg-[#FF7500] w-20 h-1"> </span>
            <h1 className="mt-11 text-[40px] font-bold">
              Pythonda dasturlash asoslari
            </h1>
            <p className="mt-6 text-[16px] leading-[150%] tracking-[0.5px]">
              Dasturlash asoslariga oid o‘zbek tilidagi ilk eng mukammal
              qo‘llanma. Kitobning har bir bo‘limi uchun maxsus video darslar
              yozilgan bo‘lib, ularga kitobda ko‘rsatilgan QR kod orqali o‘tish
              mumkin.
            </p>
            <a className="bg-[#FF7500] p-3 w-36 rounded-md mt-8 hover:opacity-80 active:bg-black active:text-[#FF7500] active:border active:border-[#FF7500] transition ease-in-out duration-50">
              Buyurtma berish
            </a>
          </div>
          <img className="rounded-md -mb-10 mt-9" src="python-book.jpg" />
        </div>
      </section>
      <div className="bg-white text-black">
        <section className="bg-white lg:max-w-300 mx-auto py-50">
          <div className="flex flex-col lg:w-[435px] ml-10">
            <span className="bg-[#FF7500] w-20 h-1"> </span>
            <h1 className="mt-6 text-[72px] font-bold">
              Nega aynan Akademnashr?
            </h1>
          </div>
          <ul className="flex mt-18 justify-between">
            <li className="flex flex-col">
              <img className="w-25 h-25" src="feature-icon.svg" />
              <h3 className="mt-8">Oson buyurtma qilish</h3>
              <p className="mt-3">
                Akademnashr.uz saytidan o’zingizga yoqqan kitobni sodda usulda
                buyurtma qila olasiz.
              </p>
            </li>
            <li className="flex flex-col">
              <img className="w-25 h-25" src="feature-icon-second.svg" />
              <h3 className="mt-8">Eng sara kitoblar</h3>
              <p className="mt-3">
                Trenddagi eng ommabop, turli auditoriyalarga mo’ljallangan har
                xil janrdagi kitoblarni topa olasiz.
              </p>
            </li>
            <li className="flex flex-col">
              <img className="w-25 h-25" src="feature-icon-last.svg" />
              <h3 className="mt-8">Tez yetkazib berish</h3>
              <p className="mt-3">
                O’zbekistonning ixtiyoriy hududiga 3 ish kuni ichida, xalqaro
                buyurtmalarni 10 ish kuni ichida yetkazib beriladi.
              </p>
            </li>
          </ul>
        </section>
      </div>

      <section className="bg-black rounded-2xl lg:max-w-300 mx-auto">
        <div className="flex justify-between px-16 ">
          <div className="flex flex-col py-8 mr-52">
            <h1 className="mt-11 text-[40px] font-bold">
              Bolalar kitoblari uchun ajoyib aksiya!
            </h1>
            <p className="mt-6 text-[16px] leading-[150%] tracking-[0.5px]">
              Ertaklar, she’rlar, sarguzasht asarlar, fikrlashni o’stirish uchun
              turli mashq qo’llanmalari va komikslar.
            </p>
            <p className="mt-6 text-[16px] leading-[150%] tracking-[0.5px]">
              Aksiyadagi eng katta to’plamda{" "}
              <b className="text-[#FF7500]">50 ta kitob</b>ni{" "}
              <b className="text-[#FF7500]">350 ming</b> so’mga (aslida 383 ming
              so’m) sotib olishingiz mumkin.
            </p>
            <a className="bg-[#FF7500] p-3 w-36 rounded-md mt-8 hover:opacity-80 active:bg-black active:text-[#FF7500] active:border active:border-[#FF7500] transition ease-in-out duration-50">
              Buyurtma berish
            </a>
          </div>
          <img className="rounded-md mb-18 -mt-10" src="sale-img.jpg" />
        </div>
      </section>
    </Main>
  );
}
