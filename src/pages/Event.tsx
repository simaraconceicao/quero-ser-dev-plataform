import { useParams } from 'react-router-dom'
import foto from '../assets/foto.png'
import { Sidebar } from '../components/Sidebar'
import { Video } from '../components/Video'
import { 
  CaretRight, 
  SpotifyLogo, 
  YoutubeLogo 
} from 'phosphor-react'


export function Event() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <div className="flex flex-col min-h-screen">
      <main className="lg:flex lg:flex-1">
        { slug 
          ? (<Video lessonSlug={slug} />)
          : (
          
            <div className="bg-black flex justify-center items-center flex-col lg:w-[100%] lg:h-[100%]">
              <img className="h-full w-full" src={foto} />
            </div>
          )
         }
        <Sidebar />

      </main>
    </div>
  )
}