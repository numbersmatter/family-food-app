import { json, redirect, useLoaderData } from "@remix-run/react"
import type { LoaderFunctionArgs } from "@remix-run/node";
import { DesktopSideBar } from "~/components/shell/sidebars";
import UIShell from "~/components/shell/ui-shell";
import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'
import { MobileSideBar } from "~/components/shell/sidebars";
import { getAuth } from "@clerk/remix/ssr.server";
import { testDb } from "~/db/test.server";
import { SectionHeader } from "./components/section-header";
import PageHeader from "./components/page-header";
import { ActiveOpportunitiesList } from "./components/active-opportunities";


const primaryNav = [
  { name: 'Dashboard', to: '/', icon: HomeIcon, end: true },
  { name: 'Team', to: '#', icon: UsersIcon, end: false },
  { name: 'Projects', to: '#', icon: FolderIcon, end: false },
  { name: 'Calendar', to: '#', icon: CalendarIcon, end: false },
  { name: 'Documents', to: '#', icon: DocumentDuplicateIcon, end: false },
  { name: 'Reports', to: '#', icon: ChartPieIcon, end: false },
]
const secondaryNav = [
  { id: 1, name: 'Heroicons', to: '#', initial: 'H', end: false },
  { id: 2, name: 'Tailwind Labs', to: '#', initial: 'T', end: false },
  { id: 3, name: 'Workcation', to: '#', initial: 'W', end: false },
]



export const loader = async (args: LoaderFunctionArgs) => {
  const { userId } = await getAuth(args);
  if (!userId) {
    return redirect('/login');
  }


  const docsQuery = await testDb.collection('/nonprofits/cist/applications').get
    ()

  const docs = docsQuery.docs.map((doc) => doc.data());

  return json({ docs });
};




export default function HomePage() {
  const { docs } = useLoaderData<typeof loader>();


  return (
    <UIShell
      // @ts-expect-error testing
      desktopSideBar={<DesktopSideBar primaryNav={primaryNav} secondaryNav={secondaryNav} />}
      // @ts-expect-error testing

      mobileSideBar={<MobileSideBar primaryNav={primaryNav} secondaryNav={secondaryNav} />}
    >
      <PageHeader />
      <SectionHeader />
      <ActiveOpportunitiesList />
      <div>

        <h1>hello</h1>
        <pre>{JSON.stringify(docs, null, 2)}</pre>
      </div>
    </UIShell>
  )

}