import React from 'react'
import logo from '../../assets/picture/logo.png'

const Page = () => {

  React.useEffect(() => {
    const path = window.location.pathname;
    const hrefs = document.querySelectorAll('a[href]');
    hrefs.forEach(a => {
      if (a.getAttribute('href') === path) {
        a.classList.add('text-white')
      }
    })
  }, [])

  return (
    <nav className='relative h-24 px-24 py-2 overflow-hidden bg-pink'>
      <div className='flex flex-nowrap justify-between items-center gap-10'>
        <div className='flex flex-shrink-0 h-20 w-20'>
          <a href="/home">
            <img src={logo} alt="logo" className='h-full w-full object-contain object-center' />
          </a>
        </div>
        <ul className='flex flex-shrink-0 gap-8 text-base'>
          <li className="hover:text-white duration-150 ease-in-out">
            <a href="/home" className='inline-block overflow-hidden'>หน้าหลัก</a>
          </li>
          <li className="hover:text-white duration-150 ease-in-out">
            <a href="/about" className='inline-block overflow-hidden'>เกี่ยวกับเรา</a>
          </li>
          <li className="hover:text-white duration-150 ease-in-out">
            <a href="/menu" className='inline-block overflow-hidden'>รายการอาหาร</a>
          </li>
          <li className="hover:text-white duration-150 ease-in-out">
            <a href="/dashboard" className='inline-block overflow-hidden'>แดชบอร์ด</a>
          </li>
          <li className="hover:text-white duration-150 ease-in-out">
            <a href="/map" className='inline-block overflow-hidden'>แผนที่</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Page