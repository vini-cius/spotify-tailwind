import Image from 'next/image';
import {
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

export function Footer() {
  return (
    <footer className="flex items-center justify-between px-6 py-4 border-t bg-zinc-800 border-zinc-700">
      <div className="flex items-center gap-3">
        <Image src="/album.jpeg" alt="Capa do álbum CORE do Stone Templo Pilots" width={56} height={56} />
        <div className="flex flex-col">
          <strong className="font-normal">Plush</strong>
          <span className="text-xs text-zinc-400">Stone Temple Pilots</span>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-6">
          <ShuffleIcon className="text-zinc-200" size={20} />
          <SkipBackIcon className="text-zinc-200" size={20} />

          <button className="flex items-center justify-center w-10 h-10 pl-1 ml-auto text-black bg-white rounded-full">
            <PlayIcon />
          </button>

          <SkipForwardIcon className="text-zinc-200" size={20} />
          <RepeatIcon className="text-zinc-200" size={20} />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sx text-zinc-400">0:31</span>
          <div className="h-1 rounded-full w-96 bg-zinc-600">
            <div className="w-40 h-1 rounded-full bg-zinc-200"></div>
          </div>
          <span className="text-sx text-zinc-400">2:18</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Mic2Icon size={20} />
        <LayoutListIcon size={20} />
        <Laptop2Icon size={20} />

        <div className="flex items-center gap-2">
          <VolumeIcon size={20} />
          <div className="w-24 h-1 rounded-full bg-zinc-600">
            <div className="w-10 h-1 rounded-full bg-zinc-200"></div>
          </div>
        </div>

        <Maximize2Icon size={20} />
      </div>
    </footer>
  )
}
