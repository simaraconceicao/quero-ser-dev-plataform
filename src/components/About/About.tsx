import { nanoid } from 'nanoid'
import { 
  CaretRight, 
  InstagramLogo, 
  LinkedinLogo, 
  SpotifyLogo, 
  YoutubeLogo 
} from 'phosphor-react'
import foto from '../../assets/foto.svg'
import styles from './about.module.css'

const conteudos = [
  {
    id: nanoid(),
    title: 'Preparando seu computador para estudar ReactJS'
  },
  {
    id: nanoid(),
    title: 'O que é e quem usa ReactJS'
  },
  {
    id: nanoid(),
    title: 'Hello World com ReactJS'
  },
  {
    id: nanoid(),
    title: 'Componentes e JSX'
  },
  {
    id: nanoid(),
    title: 'Props e estado'
  },
  {
    id: nanoid(),
    title: 'Listas e keys'
  },
  {
    id: nanoid(),
    title: 'Introdução aos hooks e eventos'
  },
  {
    id: nanoid(),
    title: 'useEffect e useState'
  },
  {
    id: nanoid(),
    title: 'Rotas no ReactJS'
  },
  {
    id: nanoid(),
    title: 'Introdução aos testes unitários'
  },
  {
    id: nanoid(),
    title: '10 projetos para iniciar o seu portfólio de ReactJS'
  },
  {
    id: nanoid(),
    title: 'Roadmap de ReactJS com mapeamento de próximos passos nos estudos'
  }
]

export function About() {
  return (
    <>
      <div>
        <span className="font-bold text-4xl m-10 border-gray-400 flex justify-center">
          Conteúdo do curso ReactJS para iniciantes
        </span>
        <div className={styles.containerCard}>
          {conteudos.map(lesson => {
            return (
              <div className="w-[350px] h-[100px] rounded border border-gray-400 p-4 m-2 bg-blue-500">
                <strong className="text-gray-200 mt-5 block">
                {lesson.title}
                </strong>
              </div>
            )
          })}
        </div>
      </div>
      <div>
        <span className="font-bold text-4xl m-10 border-gray-400 flex justify-center">
          Vem conhecer um pouquinho sobre mim
        </span>
        <div className={styles.containerCard}>
          <img src={foto} />
          <div className="m-10">
          <strong className="max-w-[370px] text-3xl mb-6 block">Simara Conceição</strong>
          <div className="flex flex-col">
            <span className="max-w-[370px] text-gray-200 text-xl leading-relaxed lg:max-w-[768px]">👩🏾‍💻Dev na @thoughtworksbr</span> 
            <span className="max-w-[370px] text-gray-200 text-xl leading-relaxed lg:max-w-[768px]">💟Instrutora na @reprogramabr e na @pretalab_</span>
            <span className="max-w-[370px] text-gray-200 text-xl leading-relaxed lg:max-w-[768px]">✊🏾Por mais mulheres pretas em tech</span>
            <span className="max-w-[370px] text-gray-200 text-xl leading-relaxed lg:max-w-[768px]">🗣Criadora do podcast e canal quero ser dev</span>
        </div>
          </div>
          </div>
        </div>
        <div>
       
        <div className="grid grid-row-1 gap-4 p-6 lg:gap-8 lg:p-20 lg:grid lg:grid-cols-4">
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
          <a href="https://www.instagram.com/simara_conceicao/" target="_blank" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
            <div className="bg-blue-500 h-full p-6 flex items-center">
              <InstagramLogo size={30} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Seguir no Instagram</strong>
              <p>Vídeos curtos diariamente</p>
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
              <p>Conteúdos diariamente</p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={30} />
            </div>
          </a>
        </div>
      </div> 
    </>
  )
}
