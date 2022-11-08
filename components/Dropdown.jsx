import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Link } from 'iconoir-react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md border border-zinc-300 bg-white px-2 py-1 text-l font-regular text-zinc-700  hover:bg-zinc-50 ">
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="mailto:anton@stallboerger.de"
                  className={classNames(
                    active ? 'bg-zinc-100 text-gray-900' : 'text-zinc-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Compose Email
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-zinc-100 text-zinc-900' : 'text-zinc-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Copy Email
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="https://twitter.com/AntonStalli"
                  target="_blank"
                  rel="noreferrer"
                  className={classNames(
                    active ? 'bg-zinc-100 text-zinc-900' : 'text-zinc-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Twitter
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
