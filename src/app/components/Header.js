
export default function Header() {
  return <header className="bg-white w-screen fixed">
      <div className="flex justify-between container mx-auto lg:max-w-300 py-4 bg-white items-center ">
        <img src="logo.svg" />
        <ul className="flex gap-8 text-[13px] text-black font-semibold">
          <li className="hover:text-[#FF7500] active:opacity-50">
            <a href="#">BOSH SAHIFA</a>
          </li>
          <li className="hover:text-[#FF7500] active:opacity-50">
            <a href="#">KITOBLAR</a>
          </li>
          <li className="hover:text-[#FF7500] active:opacity-50">
            <a href="#">AKSIYALAR</a>
          </li>
          <li className="hover:text-[#FF7500] active:opacity-50">
            <a href="#">KONTAKTLAR</a>
          </li>
          <li>
            <a
              className="bg-[#FF7500] p-3 rounded-md text-white hover:opacity-80 active:bg-white active:text-[#FF7500] active:border active:border-[#FF7500] transition ease-in-out duration-50"
              href="#"
            >
              Ro'yxatdan o'tish
            </a>
          </li>
        </ul>
      </div>
    </header>
}
