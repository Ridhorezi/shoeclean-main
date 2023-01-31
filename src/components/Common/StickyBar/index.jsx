import { useEffect } from 'react';
import Link from 'next/link';

const StickyBar = () => {

  useEffect(() => {
    const sticky_bar = document.querySelector('.sticky-bar');
    if (window.pageYOffset > 600) {
      sticky_bar.classList.add("active");
    } else {
      sticky_bar.classList.remove("active");
    }

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 600) {
        sticky_bar.classList.add("active");
      } else {
        sticky_bar.classList.remove("active");
      }
    });
  }, []);

  return (
    <div className="sticky-bar">
      <div className="left-bar">
        <Link href="https://wa.me/6285882920776">
          <a className="contact-butn">
            <span>WhatsApp SC</span>
            <span className="icon ml-10">
              <i className="fab fa-whatsapp"></i>
            </span>
          </a>
        </Link>
      </div>
      <div className="right-bar">
        <div className="social-text fz-13">
          <span className="text">Follow Us</span>
          <a href="https://instagram.com/shoecleandotid"><i className="fab fa-instagram"></i></a>
          <i>/</i>
          <a href="https://wa.me/6285882920776"><i className="fab fa-whatsapp"></i></a>
          <i>/</i>
          <a href="https://facebook.com/Shoecleandotid"><i className="fab fa-facebook"></i></a>
          <i>/</i>
          <a href="https://facebook.com/Shoecleandotid"><i className="fab fa-tiktok"></i></a>
        </div>
      </div>
    </div>
  )
}

export default StickyBar