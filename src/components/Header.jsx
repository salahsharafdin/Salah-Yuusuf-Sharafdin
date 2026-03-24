import { useState } from 'react';
import { Link } from 'react-router';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow z-10'>
      <div className='max-w-24xl mx-auto p-4 flex items-center justify-between'>
        <Link to="/" className='text-2xl font-semibold text-black'>Salah Yuusuf Sharafdin</Link>

        <ul className='hidden md:flex justify-between space-x-6 text-black'>
          <Link to="/HomePage" className='hover:text-red-500'>Home</Link>
          <Link to="/AboutPage" className='hover:text-red-500'>About</Link>
          <Link to="/Projucts" className='hover:text-red-500'>Projects</Link>
          <Link to="/MySkillesPage" className='hover:text-red-500'>MySkills</Link>
          <Link to="/Contact" className='hover:text-red-500'>Contact</Link>
        </ul>

        <button
          className='md:hidden flex flex-col space-y-1'
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`block w-6 h-0.5 bg-black transition-transform ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-transform ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {isOpen && (
        <ul className='md:hidden flex flex-col items-center justify-center space-y-4 p-4 bg-white shadow'>
          <Link to="/HomePage" className='hover:text-red-500' onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/AboutPage" className='hover:text-red-500' onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/Projucts" className='hover:text-red-500' onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/MySkillesPage" className='hover:text-red-500' onClick={() => setIsOpen(false)}>MySkills</Link>
          <Link to="/Contact" className='hover:text-red-500' onClick={() => setIsOpen(false)}>Contact</Link>
        </ul>
      )}
    </div>
  );
}

export default Header;