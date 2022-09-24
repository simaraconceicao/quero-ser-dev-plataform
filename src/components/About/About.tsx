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
        <div className="w-[100%] flex justify-center flex-col items-center lg:flex lg:justify-center lg:items-center lg:flex-col lg:gap-1">
          <span className="text-center font-bold text-4xl m-10 border-gray-400 flex justify-center">
            Conteúdo do curso ReactJS para iniciantes
          </span>
          <p className="w-[70%] mt-4 mb-10 text-gray-200 text-2xl leading-relaxed text-center flex justify-center p-6">
            ReactJS é a tecnologia mais usada por pessoas desenvolvedoras experientes e também por pessoas que estão aprendendo a programar, de acordo com a pesquisa do StackOverflow com mais de 70mil pessoas da comunidade tech lançada em maio de 2022.
            Imagina você aprendendo os passos iniciais de como as grandes plataformas web são criadas. Plataformas como Facebook, Instagram, Twitter, TikTok, Netflix, AirBnB, Notion e muitas outras.
            Isso te abre possibilidades de conseguir sua vaga como dev front-end jr., no mercado que mais cresce no Brasil e no mundo, com salários e benefícios atrativos até mesmo para pessoas iniciantes ou estagiárias.
            Se liga aqui embaixo, como tá irado e super completo o conteúdo do curso:
          </p>
        </div>
        
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
        <span className="text-center font-bold text-4xl m-10 border-gray-400 flex justify-center">
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
