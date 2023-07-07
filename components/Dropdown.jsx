import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import CopyToClipboardButton from './CopyToClipboard'
import { Mail, Twitter } from 'iconoir-react'
import Link from 'next/link'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      
        <Menu.Button className="inline-flex items-center w-full justify-center rounded-full border-2 border-zinc-200 dark:border-zinc-800 hover:border-zinc-900 dark:hover:border-zinc-100 dark:bg-black bg-white px-4 py-2 text-l font-medium text-zinc-900 dark:text-zinc-100 text-sm">
          Contact
        </Menu.Button>
      

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
      <Menu.Items className="absolute right-0 z-10 mt-4 w-40 origin-top-right divide-y divide-zinc-100 bg-white dark:bg-black opacity-100 shadow-lg ring-1 ring-black dark:ring-zinc-800 ring-opacity-5 focus:outline-none rounded-xl">
        <div className="py-2">
          <Menu.Item>
            {({ active }) => (
              <Link className='text-zinc-900 dark:text-zinc-100 px-3 py-2 mx-2 rounded-md text-sm flex hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc900 gap-2' href="mailto:anton@stallboerger.de"> 
                <Mail className='self-center text-xs stroke-2'/>
                <p className='text-sm font-medium'>
                  Compose
                </p>
              </Link>
              
            )}
          </Menu.Item>
          <CopyToClipboardButton />
          <Menu.Item>
            {({ active }) => (
              <Link className='text-zinc-900 dark:text-zinc-100 px-3 py-2 mx-2 rounded-md text-sm flex hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc900 gap-2' href="https://twitter.com/stallboerger"> 
                <Twitter className='self-center text-xs stroke-2'/>
                <p className='text-sm font-medium'>
                  Twitter
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

