import { React } from 'react'
import { Disclosure, Menu } from '@headlessui/react'
import { SunIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

const Navbar = () => {
    return (
        <Disclosure as="nav" className="">
            {({ open }) => (
                <>
                    <div className="px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    <SunIcon className="block h-8 w-auto text-white" />
                                    <h3 className='hidden md:block text-white font-bold ml-3 text-[20px] dancing-font'>Ome Asraf</h3>

                                </div>

                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <Menu as="div" className="ml-3 relative">
                                    <div className="hidden sm:block sm:ml-6">
                                        <div className="flex space-x-4">
                                            {navigation.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className={classNames(
                                                        'text-gray-300 hover:bg-gray-700 hover:text-cyan-300 counter-before',
                                                        'px-3 py-2 rounded-md text-sm font-medium'
                                                    )}

                                                >
                                                    {item.name}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        'text-gray-300 hover:bg-gray-700 hover:text-cyan-300 counter-before',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}

                                >
                                    <p>{item.count}</p> {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export default Navbar

const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
