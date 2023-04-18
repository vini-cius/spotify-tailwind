import {
  HomeIcon,
  SearchIcon,
  LibraryIcon
} from 'lucide-react';

export function Sidebar() {
  return (
    <aside className="p-6 w-72 bg-zinc-950">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-red-500 rounded-full" />
        <div className="w-2 h-2 bg-yellow-500 rounded-full" />
        <div className="w-2 h-2 bg-green-500 rounded-full" />
      </div>

      <nav className="mt-10 space-y-5">
        <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
          <HomeIcon />
          Home
        </a>
        <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
          <SearchIcon />
          Search
        </a>
        <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
          <LibraryIcon />
          Your Library
        </a>
      </nav>

      <nav className="flex flex-col gap-3 pt-6 mt-6 border-t border-zinc-800">
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Thrashers</a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Texas Country Now</a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Tony Hawk&apos;s Pro Skater 4</a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">My Hip Hop</a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist 1</a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist 1</a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist 1</a>
      </nav>
    </aside>

  )
}
