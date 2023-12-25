import logo from '../../assets/picture/logo.png'
import delivery from '../../assets/picture/delivery.png'
import send from '../../assets/picture/send.png'
import facebook from '../../assets/picture/facebook.png'
import NavigateButton from './NavigateButton/Page'

const Page = () => {
  return (
    <div className='relative overflow-hidden min-h-full'>
      <div className='bg-cream overflow-hidden p-2'>
        <div className="flex flex-nowrap justify-center items-center h-[35rem] gap-8">
          <div className='flex flex-shrink-0 h-full overflow-hidden'>
            <img src={logo} alt="logo" className='h-full object-center object-contain' />
          </div>
          <div className="relative flex flex-shrink-0 flex-col justify-center items-center gap-8">
            <div className='h-16'>
              <h1 className='uppercase tracking-wide font-bold text-6xl drop-shadow-lg'>Delivery And Takeaway</h1>
            </div>
            <div className='w-3/4 h-20 bg-red-500 rounded-full overflow-hidden'>
              <div className='h-full flex justify-center items-center'>
                <p className='text-white text-2xl'>สั่งกลับบ้าน... อร่อยเหมือนกินอยู่ที่ร้าน</p>
              </div>
            </div>
            <div className='h-16'>
              <p className='h-full flex justify-center items-center font-bold text-4xl drop-shadow-lg'>
                มีทั้งเมนูเส้น ราดข้าว และเป็นกับ
              </p>
            </div>
            <div className='inline-block'>
              <img src={delivery} alt="delivery" className='object-contain object-center' />
            </div>
            <div className='absolute w-80 h-80 -right-32 top-20 overflow-hidden'>
              <img src={send} alt="send" />
            </div>
            <div className='absolute right-14 bottom-4'>
              <a href="https://www.facebook.com/profile.php?id=100063647466956" target='_blank' className='flex justify-center items-center gap-2'>
                <img src={facebook} alt="facebook" className='w-5 h-5' />
                <p className='text-base font-semibold'>ครัวแมมมอธ</p>
              </a>
            </div>
          </div>
        </div>
        {/* Navigate */}
        <NavigateButton />
      </div>
      <div className='h-[50rem]'>
        <div className='flex justify-center items-center'>
          <div className='inline-block'>
            <h1 className='uppercase font-bold text-[10rem] drop-shadow-lg'>Open</h1>
          </div>
        </div>
      </div>
      {/* ... */}
    </div>
  )
}

export default Page