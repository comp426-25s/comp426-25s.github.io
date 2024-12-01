import { ScrollText } from 'lucide-react';
import { BookText } from 'lucide-react';
import { Users } from 'lucide-react';
import { Clock } from 'lucide-react';

export default function Home() {
  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl">
        COMP 426: Modern Web Programming
      </h1>

      <blockquote className="mt-6 border-l-2 pl-6 text-slate-500">
        Spring 2025 Section of COMP 426 at UNC-Chapel Hill.
      </blockquote>
          
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
          <div className="flex flex-row items-center p-2 mt-2">
            <ScrollText className="h-5 w-5 stroke-yellow-700" />
            <span className="ml-2 font-medium underline decoration-slate-400">Syllabus</span>
          </div>
          {/* Extra Resources button */}
          <div className="flex flex-row items-center p-2">
            <BookText className="h-5 w-5 stroke-slate-500" />
            <span className="ml-2 font-medium underline decoration-slate-400">Extra Resources</span>
          </div>
        </div>
        {/* Right column */}
        <div className="flex flex-col w-1/2">
          {/* Team 426 button */}
          <div className="flex flex-row items-center p-2 mt-2">
            <Users className="h-5 w-5 stroke-green-700" />
            <span className="ml-2 font-medium underline decoration-slate-400">Team 426</span>
          </div>
          {/* Office Hours button */}
          <div className="flex flex-row items-center p-2">
            <Clock className="h-5 w-5 stroke-violet-500" />
            <span className="ml-2 font-medium underline decoration-slate-400">Office Hours</span>
          </div>
        </div>
      </div>

      <h2 className="mt-8 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
        Assignments
      </h2>

      <h2 className="mt-8 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
        Course Schedule
      </h2>
    </>
  );
}
