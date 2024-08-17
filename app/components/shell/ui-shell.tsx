import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, TransitionChild } from '@headlessui/react'
import {
  Bars3Icon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { Link, NavLink } from '@remix-run/react'
import { cn } from '~/lib/utils'
import { SignedIn, UserButton } from '@clerk/remix'





export default function UIShell({
  children,
  mobileSideBar,
  desktopSideBar,
}: {
  children: React.ReactNode,
  mobileSideBar: React.ReactNode,
  desktopSideBar: React.ReactNode,
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div>
        <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 flex">
            <DialogPanel
              transition
              className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
            >
              <TransitionChild>
                <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                  <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon aria-hidden="true" className="h-6 w-6 text-white" />
                  </button>
                </div>
              </TransitionChild>
              {/* Sidebar component, swap this element with another sidebar if you like */}
              {mobileSideBar}
            </DialogPanel>
          </div>
        </Dialog>

        {/* Static sidebar for desktop */}
        {desktopSideBar}

        {/* Mobile menu bar */}

        <MobileMenuBar setSidebarOpen={setSidebarOpen} />

        {/* Content area */}

        {/* <main className="py-10 lg:pl-72">
          <div className="px-4 sm:px-6 lg:px-8">
           Your content 
           </div>
        </main> */}
        <div className='py-10 lg:pl-72'>

          {children}
        </div>
      </div>
    </>
  )
}


function MobileMenuBar({ setSidebarOpen }: { setSidebarOpen: (open: boolean) => void }) {
  return <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-indigo-600 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
    <button type="button" onClick={() => setSidebarOpen(true)} className="-m-2.5 p-2.5 text-indigo-200 lg:hidden">
      <span className="sr-only">Open sidebar</span>
      <Bars3Icon aria-hidden="true" className="h-6 w-6" />
    </button>
    <div className="flex-1 text-sm font-semibold leading-6 text-white">Dashboard</div>
    <SignedIn>

      <UserButton />
    </SignedIn>
  </div>
}



