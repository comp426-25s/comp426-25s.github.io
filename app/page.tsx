import ScheduleListing from '@/components/widgets/schedule-listing';
import { ScrollText } from 'lucide-react';
import { BookText } from 'lucide-react';
import { Users } from 'lucide-react';
import { Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

import Schedule from '@/components/widgets/schedule';
import Link from 'next/link';
import Assignments from '@/components/widgets/assignments';

export default function Home() {

  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl">
        COMP 426: Modern Web Programming
      </h1>
          
      <p className="leading-7 mt-4 text-base">
        👋 <strong>Hello students, welcome to COMP 426!</strong>
      </p>
      <p className="leading-7  mt-4 text-base">
      This special, pilot section of COMP 426 introduces students to the fundamentals modern, full-stack web development with an emphasis on today’s best practices, modern tooling, and leading industry-prevalent frameworks.
      </p>

      <h2 className="mt-8 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
        Important Links
      </h2>

      <div className="flex flex-row w-full">
        {/* Left column */}
        <div className="flex flex-col w-1/2">
          {/* Syllabus button */}
          <Button variant="ghost" className="mt-2 w-full h-10 pl-2 pr-2">
            <Link href="/syllabus" className='flex flex-row items-center w-full !font-medium  h-6'>
              <ScrollText className="h-5 w-5 stroke-yellow-700" />
              <span className="ml-2  font-semibold">Syllabus</span>
            </Link>
          </Button>
          {/* Extra Resources button */}
          <Button variant="ghost" className="w-full h-10 pl-2 pr-2">
            <Link href="/extra-resources" className='flex flex-row items-center w-full !font-medium  h-6'>
              <BookText className="h-5 w-5 stroke-slate-500" />
              <span className="ml-2  font-semibold">Extra Resources</span>
            </Link>
          </Button>
        </div>
        {/* Right column */}
        <div className="flex flex-col w-1/2">
          {/* Team 426 button */}
          <Button variant="ghost" className="mt-2 w-full h-10 pl-2 pr-2">
            <Link href="/team-426" className='flex flex-row items-center w-full !font-medium  h-6'>
              <Users className="h-5 w-5 stroke-green-700" />
              <span className="ml-2  font-semibold">Team 426</span>
            </Link>
          </Button>
          {/* Office Hours button */}
          <Button variant="ghost" className="w-full h-10 pl-2 pr-2">
            <Link href="/office-hours" className='flex flex-row items-center w-full !font-medium  h-6'>
              <Clock className="h-5 w-5 stroke-violet-500" />
              <span className="ml-2  font-semibold">Office Hours</span>
            </Link>
          </Button>
        </div>
      </div>

      <h2 className="mt-8 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
        Assignments
      </h2>
      <Assignments />

      <h2 className="mt-8 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
        Course Schedule
      </h2>
      <Schedule />
    </>
  );
}
