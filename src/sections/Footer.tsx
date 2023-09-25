import { footerLinks } from "../constants";
import icon from "../assets/icons/icon-nav.png";

const Footer = () => {
  return (
    <footer className="max-container">
      <ul className="flex justify-between items-start gap-10 flex-wrap max-lg:flex-col">
        <li>
          <a href='/'>
            <img src={icon} alt='logo' width={50} height={50} className='m-0 w-[50px] h-[50px] rounded-2xl' />
          </a>
        </li>
        {footerLinks.map((section) => (
          <div className="flex-grow">
            <li key={section.title} className="text-3xl">{section.title}</li>
            <ul>
              {section.links.map((item) => (
                <li key={item.name} className="text-gray-300 hover:text-gray-700"><a href={item.link}>{item.name}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </ul>
      <div className="pt-4">&copy; 2023</div>
    </footer>
  )
}

export default Footer;