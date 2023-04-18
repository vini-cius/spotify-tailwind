import { Footer } from '@/components/Footer';
import { Sidebar } from '@/components/Sidebar';
import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PlayIcon,
  ShuffleIcon,
  SkipBackIcon,
  SkipForwardIcon,
  RepeatIcon,
  Mic2Icon,
  LayoutListIcon,
  Laptop2Icon,
  VolumeIcon,
  Maximize2Icon
} from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6">
          <div className="flex items-center gap-3">
            <button className="p-1 rounded-full bg-black/20">
              <ChevronLeftIcon />
            </button>

            <button className="p-1 rounded-full bg-black/20">
              <ChevronRightIcon />
            </button>
          </div>

          <h1 className="mt-10 text-3xl font-semibold">Good Night</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a href="" className="flex items-center gap-4 overflow-hidden transition-colors rounded group bg-white/10 hover:bg-white/20">
              <Image src="/album.jpeg" alt="Capa do álbum CORE do Stone Templo Pilots" width={104} height={104} />
              <strong>CORE</strong>

              <button className="flex items-center justify-center invisible w-12 h-12 pl-1 ml-auto mr-8 text-black bg-green-400 rounded-full group-hover:visible">
                <PlayIcon />
              </button>
            </a>

            <a href="" className="flex items-center gap-4 overflow-hidden transition-colors rounded group bg-white/10 hover:bg-white/20">
              <Image src="/album.jpeg" alt="Capa do álbum CORE do Stone Templo Pilots" width={104} height={104} />
              <strong>CORE</strong>

              <button className="flex items-center justify-center invisible w-12 h-12 pl-1 ml-auto mr-8 text-black bg-green-400 rounded-full group-hover:visible">
                <PlayIcon />
              </button>
            </a>

            <a href="" className="flex items-center gap-4 overflow-hidden transition-colors rounded group bg-white/10 hover:bg-white/20">
              <Image src="/album.jpeg" alt="Capa do álbum CORE do Stone Templo Pilots" width={104} height={104} />
              <strong>CORE</strong>

              <button className="flex items-center justify-center invisible w-12 h-12 pl-1 ml-auto mr-8 text-black bg-green-400 rounded-full group-hover:visible">
                <PlayIcon />
              </button>
            </a>

            <a href="" className="flex items-center gap-4 overflow-hidden transition-colors rounded group bg-white/10 hover:bg-white/20">
              <Image src="/album.jpeg" alt="Capa do álbum CORE do Stone Templo Pilots" width={104} height={104} />
              <strong>CORE</strong>

              <button className="flex items-center justify-center invisible w-12 h-12 pl-1 ml-auto mr-8 text-black bg-green-400 rounded-full group-hover:visible">
                <PlayIcon />
              </button>
            </a>

            <a href="" className="flex items-center gap-4 overflow-hidden transition-colors rounded group bg-white/10 hover:bg-white/20">
              <Image src="/album.jpeg" alt="Capa do álbum CORE do Stone Templo Pilots" width={104} height={104} />
              <strong>CORE</strong>

              <button className="flex items-center justify-center invisible w-12 h-12 pl-1 ml-auto mr-8 text-black bg-green-400 rounded-full group-hover:visible">
                <PlayIcon />
              </button>
            </a>

            <a href="" className="flex items-center gap-4 overflow-hidden transition-colors rounded group bg-white/10 hover:bg-white/20">
              <Image src="/album.jpeg" alt="Capa do álbum CORE do Stone Templo Pilots" width={104} height={104} />
              <strong>CORE</strong>

              <button className="flex items-center justify-center invisible w-12 h-12 pl-1 ml-auto mr-8 text-black bg-green-400 rounded-full group-hover:visible">
                <PlayIcon />
              </button>
            </a>
          </div>

          <h2 className="mt-10 text-2xl font-semibold">Made for Vinicius</h2>

          <div className="grid grid-cols-8 gap-4 mt-4">
            <a href="" className="flex flex-col gap-2 p-3 rounded-lg bg-white/5 hover:bg-white/10">
              <Image src="/album.jpeg" className="w-full" alt="Capa do álbum CORE do Stone Templo Pilots" width={120} height={120} />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">Slipknot, Pearl Jam, Stone Templo Pilots</span>
            </a>

            <a href="" className="flex flex-col gap-2 p-3 rounded-lg bg-white/5 hover:bg-white/10">
              <Image src="/album.jpeg" className="w-full" alt="Capa do álbum CORE do Stone Templo Pilots" width={120} height={120} />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">Slipknot, Pearl Jam, Stone Templo Pilots</span>
            </a>

            <a href="" className="flex flex-col gap-2 p-3 rounded-lg bg-white/5 hover:bg-white/10">
              <Image src="/album.jpeg" className="w-full" alt="Capa do álbum CORE do Stone Templo Pilots" width={120} height={120} />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">Slipknot, Pearl Jam, Stone Templo Pilots</span>
            </a>

            <a href="" className="flex flex-col gap-2 p-3 rounded-lg bg-white/5 hover:bg-white/10">
              <Image src="/album.jpeg" className="w-full" alt="Capa do álbum CORE do Stone Templo Pilots" width={120} height={120} />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">Slipknot, Pearl Jam, Stone Templo Pilots</span>
            </a>

            <a href="" className="flex flex-col gap-2 p-3 rounded-lg bg-white/5 hover:bg-white/10">
              <Image src="/album.jpeg" className="w-full" alt="Capa do álbum CORE do Stone Templo Pilots" width={120} height={120} />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">Slipknot, Pearl Jam, Stone Templo Pilots</span>
            </a>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}
