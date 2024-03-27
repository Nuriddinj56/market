import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
  return (
    <header className="flex items-center px-4 md:px-12 py-2 justify-between fixed top-0 w-full z-50 shadow bg-white ">
      <Link href={'/'}>
      <h1 className="text-4xl font-bold ">AZAT.UZ</h1>
      </Link>
      <div className='flex items-center space-x-2.5 text-sm'>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href={'/'} className="mr-5 hover:text-gray-900 ">Home page</Link>
      <Link href={'/poducts'} className="mr-5 hover:text-gray-900 ">All products</Link>
    
    </nav>
        <button className='button bg-blue-500 text-white border-transparent hover:border-blue-500 hover:bg-transparent hover:text-black'>
          Log in
        </button>
        <button className='button bg-blue-500 text-white border-transparent hover:border-blue-500 hover:bg-transparent hover:text-black'>
        Sign up
        </button>

      </div>
    </header>
  )
}

export default Navbar