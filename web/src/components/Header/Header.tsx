import { Fragment } from 'react'

import { Disclosure, Menu, Transition } from '@headlessui/react'

import { NavLink, routes } from '@redwoodjs/router'

const Header = () => {
  return (
    <header>
      {
        <Disclosure as="nav" className="">
          {({ open }) => (
            <>
              <Menu as="div" className="">
                <div>
                  <Menu.Button>
                    <span className="">Open user menu</span>
                    <img alt={'avatar'} />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items>
                    <Menu.Item>
                      {({ active }) => (
                        <NavLink
                          to={routes.myProfile()}
                          onClick={() => {
                            console.log('clicked')
                          }}
                          activeClassName=""
                        >
                          {'my-profile'}
                        </NavLink>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </>
          )}
        </Disclosure>
      }
    </header>
  )
}

export default Header
