import React from 'react';
const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]
const Navbar = () => {
    return (

        <header className="absolute inset-x-0 top-0 z-50">
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">

                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white-700"
                    // onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>

                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-neutral-300">
                            {item.name}
                        </a>
                    ))}
                </div>

            </nav>

        </header>
    )
}

export default Navbar