export default function Footer() {
  return (
    <footer className="bg-[#F8F8F8] text-black">
      <section className="lg:max-w-300 mx-auto pt-14">
        <div className="flex justify-between mb-14">
          <img src="logo.svg" />
          <ul className="flex gap-4">
            <li>
              <a className="hover:opacity-70 active:opacity-50"  href="#">
                <img src="telegram.svg" />
              </a>
            </li>
            <li>
              <a className="hover:opacity-70 active:opacity-50"  href="#">
                <img src="facebook.svg" />
              </a>
            </li>
            <li>
              <a className="hover:opacity-70 active:opacity-50"  href="#">
                <img src="instagram.svg" />
              </a>
            </li>
          </ul>
        </div>

        <hr />

        <div className="flex justify-between text-[#252420] mt-16 pb-14">
          <section className="flex flex-col gap-4">
            <a className="hover:opacity-70 active:opacity-50" href="#">Bosh sahifa</a>
            <a className="hover:opacity-70 active:opacity-50" href="#">Kitoblar</a>
            <a className="hover:opacity-70 active:opacity-50" href="#">Aksiyalar</a>
            <a className="hover:opacity-70 active:opacity-50" href="#">yangiliklar</a>
            <a className="hover:opacity-70 active:opacity-50" href="#">Kontaktlar</a>
          </section>
          <section className="flex flex-col gap-4">
            <a className="hover:opacity-70 active:opacity-50" href="#">Ilmiy nashrlar</a>
            <a className="hover:opacity-70 active:opacity-50" href="#">Ilmiy-ommabop nashrlar</a>
            <a className="hover:opacity-70 active:opacity-50" href="#">Ma’rifiy nashrlar</a>
            <a className="hover:opacity-70 active:opacity-50" href="#">Lug’atlar</a>
            <a className="hover:opacity-70 active:opacity-50" href="#">Adabiy-badiiy nashrlar</a>
            <a className="hover:opacity-70 active:opacity-50" href="#">Abituriyentlar uchun</a>
            <a className="hover:opacity-70 active:opacity-50" href="#">Bolalar uchun</a>
          </section>
          <section className="flex flex-col gap-4">
            <a className="hover:opacity-70 active:opacity-50" href="#">Ko’p so’raladigan savollar</a>
            <a className="hover:opacity-70 active:opacity-50" href="#">Yetkazib berish haqida</a>
            <a className="hover:opacity-70 active:opacity-50" href="#">To’lov usullari haqida</a>
          </section>
          <section className="flex flex-col gap-4">
            <a className="hover:opacity-70 active:opacity-50" href="#">Bo’sh ish o’rinlari</a>
            <a className="hover:opacity-70 active:opacity-50" href="#">Biz bilan bog’lanish</a>
            <a className="hover:opacity-70 active:opacity-50" href="#">Maxfiylik nizomi</a>
          </section>
        </div>
      </section>
    </footer>
  );
}
