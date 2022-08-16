import { DefaultUi, Player, Youtube } from '@vime/react'
import { 
  CaretRight, 
  InstagramLogo, 
  LinkedinLogo, 
  SpotifyLogo, 
  YoutubeLogo 
} from 'phosphor-react'

import '@vime/core/themes/default.css'
import { useGetLessonBySlugQuery } from '../graphql/generated'

interface VideoProps {
  lessonSlug: string
}

export function Video(props: VideoProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: props.lessonSlug
    }
  })

  if (!data || !data.lesson) {
    return (
      <div className="flex-1">
        <p>Carregando...</p>
      </div>
    )
  }

  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h[60vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>
      <div className="max-w-[768px] flex flex-col justify-center items-center m-auto lg:p-8 lg:max-w-[1100px] lg:mx-auto">
        <div className="max-w-[768px] p-8 lg:flex lg:items-start lg:gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">
              {data.lesson.title}
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              {data.lesson.description}
            </p>

            {data.lesson.teacher && (
              <div className="flex items-center gap-4 mt-6">
                <img 
                  className="h-16 items-center rounded-full border-2 border-blue-500"
                  src={data.lesson.teacher.avatarURL}
                  alt="foto-simara"
                />
                <div className="leading-relaxed">
                  <strong className="font-bold text-2xl block">{data.lesson.teacher.name}</strong>
                  <span className="text-gray-200 text-sm block">{data.lesson.teacher.bio}</span>
                </div>
              </div>
            )}
            
          </div>
          <div className="max-w-[768px] flex justify-start items-center flex-row gap-4 mt-5 lg:flex lg:flex-col lg:gap-4">
            <a href="https://www.youtube.com/channel/UCGaPf6u8sp-yd5BvOS3du0g"  target="_blank" className="p-4 text-sm bg-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-600  transition-colors  hover:text-gray-900">
              <YoutubeLogo size={24} />
              Canal no Youtube
            </a>

            <a href="https://open.spotify.com/show/59vCz4TY6tPHXW26qJknh3" className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-100 transition-colors">
              <SpotifyLogo target="_blank" size={24} />
              Podcast no Spotify
            </a>
          </div>
        </div>
        <div className="max-w-[768px] grid grid-row-1 gap-4 m-20 lg:gap-8 lg:mt-20 lg:grid lg:grid-cols-2">
          <a href="https://www.instagram.com/simara_conceicao/" target="_blank" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
            <div className="bg-blue-500 h-full p-6 flex items-center">
              <InstagramLogo size={30} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Seguir no Instagram</strong>
              <p>Acompanhe também os vídeos curtos sobre carreira dev diariamente</p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={30} />
            </div>
          </a>

          <a href="https://www.linkedin.com/in/simaraconceicao/"  target="_blank" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
            <div className="bg-blue-500 h-full p-6 flex items-center">
              <LinkedinLogo size={30} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Seguir no LinkedIn</strong>
              <p>Acompanhe também mais conteúdos sobre carreira dev diariamente</p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={30} />
            </div>
          </a>
          
        </div>
      </div>
    </div>
  )
}