import { useParams } from 'react-router-dom'
import foto from '../assets/foto.png'
import { Sidebar } from '../components/Sidebar'
import { Video } from '../components/Video'
import { 
  CaretRight, 
  InstagramLogo, 
  LinkedinLogo, 
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
              <div className="grid grid-row-1 gap-4 p-6 lg:gap-8 lg:p-20 lg:grid lg:grid-cols-2">
                <a href="https://www.youtube.com/channel/UCGaPf6u8sp-yd5BvOS3du0g" target="_blank" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                  <div className="bg-blue-500 h-full p-6 flex items-center">
                    <YoutubeLogo size={30} />
                  </div>
                  <div className="py-6 leading-relaxed">
                    <strong className="text-2xl">Se inscrever no Canal</strong>
                    <p>Vídeos novos todas as segundas</p>
                  </div>
                  <div className="h-full p-6 flex items-center">
                    <CaretRight size={30} />
                  </div>
                </a>

                <a href="https://open.spotify.com/show/59vCz4TY6tPHXW26qJknh3"  target="_blank" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                  <div className="bg-blue-500 h-full p-6 flex items-center">
                    <SpotifyLogo size={30} />
                  </div>
                  <div className="py-6 leading-relaxed">
                    <strong className="text-2xl">Seguir no Spotify</strong>
                    <p>Episódios novos todas as sextas</p>
                  </div>
                  <div className="h-full p-6 flex items-center">
                    <CaretRight size={30} />
                  </div>
                </a>
              </div>
            </div>
          )
         }
        <Sidebar />

      </main>
    </div>
  )
}