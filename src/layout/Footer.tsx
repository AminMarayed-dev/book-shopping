import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
function Footer() {
  return (
    <div className="relative">
          <div className="bg-blue-300 absolute bottom-0 py-6 px-8  items-center">
      <ul className="flex gap-4 justify-center  py-2 text-white">
        <li className="cursor-pointer text-3xl text-black">
          <FaInstagram />
        </li>
        <li className="cursor-pointer text-3xl text-black">
          <FaTelegram />
        </li>
        <li className="cursor-pointer text-3xl text-black">
          <FaTwitter />
        </li>
      </ul>
      <div>
        <h3 className="font-bold text-xl">این یک سایت برای خرید کتاب است</h3>
        <p className="text-gray-600">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>
      </div>
    </div>
    </div>

  );
}

export default Footer;
