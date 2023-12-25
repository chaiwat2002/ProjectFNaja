

const Page = () => {
    return (
        <div className='flex flex-nowrap justify-center items-center mb-4'>
            <div className='flex gap-1'>
                <button type='button'>
                    <div className='bg-black w-2 h-2 rounded-full' />
                </button>
                <button type='button'>
                    <div className='bg-neutral-400 w-2 h-2 rounded-full' />
                </button>
                <button type='button'>
                    <div className='bg-neutral-400 w-2 h-2 rounded-full' />
                </button>
            </div>
        </div>
    )
}

export default Page