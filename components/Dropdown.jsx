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
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-lg border border-zinc-300 bg-white px-2 py-1 text-l font-regular text-zinc-700  hover:bg-zinc-50">
          Contact
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
        <Menu.Items className="absolute right-0 z-10 mt-4 w-56 origin-top-right divide-y divide-zinc-100 rounded-md bg-white opacity-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link className='text-zinc-700 hover:text-zinc-900 px-4 py-2 text-sm flex hover:bg-zinc-100 hover:text-zinc900 gap-2' href="mailto:anton@stallboerger.de"> 
                  <Mail className='self-center text-xs'/>
                  <p className='text-sm'>
                    Compose Email
                  </p>
                </Link>
                
              )}
            </Menu.Item>
            <CopyToClipboardButton />
            <Menu.Item>
              {({ active }) => (
                <Link className='text-zinc-700 hover:text-zinc-900 px-4 py-2 text-sm flex hover:bg-zinc-100 hover:text-zinc900 gap-2' href="https://twitter.com/AntonStalli"> 
                  <Twitter className='self-center text-xs'/>
                  <p className='text-sm'>
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

