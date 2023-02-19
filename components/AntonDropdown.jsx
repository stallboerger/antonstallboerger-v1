import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Brain, User, BookmarkEmpty, NavArrowDown, Compass} from 'iconoir-react';
import Link from 'next/link';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function AntonDropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center px-4 py-2 text-sm text-zinc-500 hover:text-zinc-900 gap-0.5 font-medium hover:bg-zinc-100 rounded-full">
          Explore
          <NavArrowDown className='self-center text-xs stroke-2'/>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 z-10 mt-4 w-40 origin-top-right divide-y divide-zinc-100 rounded-md bg-white opacity-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link className='text-zinc-700 hover:text-zinc-900 px-4 py-2 mx-1 rounded-md text-sm flex hover:bg-zinc-100 hover:text-zinc900 gap-2' href="/about"> 
                  <User className='self-center text-xs stroke-2'/>
                  <p className='text-sm font-medium'>
                    About
                  </p>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link className='text-zinc-700 hover:text-zinc-900 px-4 py-2 mx-1 text-sm flex rounded-md hover:bg-zinc-100 hover:text-zinc900 gap-2' href="/thoughts"> 
                  <Brain className='self-center text-xs stroke-2'/>
                  <p className='text-sm font-medium'>
                    Thoughts
                  </p>
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}


