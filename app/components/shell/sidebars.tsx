import { SignedIn, UserButton } from "@clerk/remix";
import { Link, NavLink } from "@remix-run/react";
import { ComponentType, FunctionComponent, ReactNode } from "react";
import { cn } from "~/lib/utils";

interface IconProps {
  className: string;
  'aria-hidden': string;
}


type PrimNavItem = {
  name: string;
  to: string;
  icon: FunctionComponent<IconProps>;
  end: boolean;
};

type SecNavItem = {
  id: number;
  name: string;
  to: string;
  initial: string;
  end: boolean;
};





export function DesktopSideBar({
  primaryNav, secondaryNav
}: {
  primaryNav: PrimNavItem[],
  secondaryNav: SecNavItem[]
}) {
  return <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
    {/* Sidebar component, swap this element with another sidebar if you like */}
    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6">
      <div className="flex h-16 shrink-0 items-center">
        <img
          alt="Your Company"
          src="https://tailwindui.com/img/logos/mark.svg?color=white"
          className="h-8 w-auto" />
      </div>
      <nav className="flex flex-1 flex-col">
        <ul className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul className="-mx-2 space-y-1">
              {primaryNav.map((item) => (
                <li key={item.name}>
                  <NavLink
                    end={item.end}
                    to={item.to}
                    className={({ isActive }) => cn(
                      isActive
                        ? 'bg-indigo-700 text-white'
                        : 'text-indigo-200 hover:bg-indigo-700 hover:text-white',
                      'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'
                    )}
                  >
                    {({ isActive, isPending }) => (
                      <>
                        <item.icon
                          aria-hidden="true"
                          className={cn(
                            isActive ? 'text-white' : 'text-indigo-200 group-hover:text-white',
                            'h-6 w-6 shrink-0'
                          )} />
                        {item.name}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <div className="text-xs font-semibold leading-6 text-indigo-200">Your teams</div>
            <ul className="-mx-2 mt-2 space-y-1">
              {secondaryNav.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) => cn(
                      isActive
                        ? 'bg-indigo-700 text-white'
                        : 'text-indigo-200 hover:bg-indigo-700 hover:text-white',
                      'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'
                    )}
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white">
                      {link.initial}
                    </span>
                    <span className="truncate">{link.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
          <li className="">

            <div className=" border-slate-100  border-2 py-1" >
              <SignedIn>
                <UserButton showName />
              </SignedIn>
            </div>

          </li>
        </ul>
      </nav>
    </div>
  </div>
}



export function MobileSideBar({
  primaryNav, secondaryNav
}: {
  primaryNav: PrimNavItem[],
  secondaryNav: SecNavItem[]
}) {
  return <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-2">
    <div className="flex h-16 shrink-0 items-center">
      <img
        alt="Your Company"
        src="https://tailwindui.com/img/logos/mark.svg?color=white"
        className="h-8 w-auto" />
    </div>
    <nav className="flex flex-1 flex-col">
      <ul className="flex flex-1 flex-col gap-y-7">
        <li>
          <ul className="-mx-2 space-y-1">
            {primaryNav.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) => cn(
                    isActive
                      ? 'bg-indigo-700 text-white'
                      : 'text-indigo-200 hover:bg-indigo-700 hover:text-white',
                    'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'
                  )}
                >
                  {
                    ({ isActive, isPending }) => (
                      <>
                        <item.icon
                          aria-hidden="true"
                          className={cn(
                            isActive ? 'text-white' : 'text-indigo-200 group-hover:text-white',
                            'h-6 w-6 shrink-0'
                          )} />
                        {item.name}
                      </>
                    )
                  }
                </NavLink>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <div className="text-xs font-semibold leading-6 text-indigo-200">Your teams</div>
          <ul className="-mx-2 mt-2 space-y-1">
            {secondaryNav.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) => cn(
                    isActive
                      ? 'bg-indigo-700 text-white'
                      : 'text-indigo-200 hover:bg-indigo-700 hover:text-white',
                    'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'
                  )}
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white">
                    {link.initial}
                  </span>
                  <span className="truncate">{link.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  </div>
}

