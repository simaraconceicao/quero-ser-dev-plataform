import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Logo } from '../components/Logo'
import { 
  CaretRight, 
  InstagramLogo, 
  LinkedinLogo, 
  SpotifyLogo, 
  YoutubeLogo,
  List,
  TelegramLogo,
  Book
} from 'phosphor-react'
import foto from '../assets/foto.svg'
import { Footer } from '../components/Footer'
import styles from './menu.module.css'

export function Home() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  function handleMenu() {
    open ? setOpen(false) :  setOpen(true)
  }

  function goToEvent() {
    navigate('/event')
  }

  return(
    <>
      <nav>
        <List size={32} onClick={handleMenu} className={styles.hamburguer} />
        <ul className={open ? styles.hamburguerOpen : styles.menu}>
          <li className={open ? styles.itemOpen : styles.item}>
            <a className={open ? styles.linkOpen : styles.link} href="#inicio">Início</a>
          </li>
          <li className={open ? styles.itemOpen : styles.item}>
            <a className={open ? styles.linkOpen : styles.link} href="#about">Sobre</a>
          </li>
          <li className={open ? styles.itemOpen : styles.item}>
            <a className={open ? styles.linkOpen : styles.link} href="#conteudos">Conteúdos</a>
          </li>
          <li className={open ? styles.itemOpen : styles.item}>
            <a className={open ? styles.linkOpen : styles.link} href="#comunidade">Comunidade</a>
          </li>
          <button 
            onClick={goToEvent}
            className="m-2 p-6 items-center bg-blue-500 uppercase rounded font-bold text-sm hover:bg-blue-700 transition-colors flex justify-between"
          >
            Reactjs para iniciantes
          </button>
        </ul>
      </nav>
      <div id="inicio">
        <div className="bg-blur  bg-cover bg-no-repeat flex flex-col items-center lg:flex lg:justify-center lg:items-center lg:flex-row pt-20">
          <div className="flex justify-center flex-col items-center lg:flex lg:justify-center lg:items-center lg:flex-row lg:gap-72">
            <div className="max-w-[768px] flex justify-center flex-col items-center">
              <Logo />
              <h1 className="max-w-[350px] text-center text-5xl font-bold lg:max-w-[768px]">
                Uma comunidade para quem é iniciante na programação.
              </h1>
              <p className="max-w-[370px] mt-4 mb-10 text-gray-200 text-2xl leading-relaxed text-center p-6 lg:max-w-[768px]">
                Conteúdos descomplicados, que realmente funcionam pra quem quer ser dev, mas tem medo ou não sabe por onde começar.
              </p>
            </div>
          </div>
          
        </div>
      </div>
      <div id="about" className="pt-20">
        <div>
          <span className="text-center font-bold text-4xl m-10 pt-10 border-gray-400 flex justify-center">
            Vem conhecer um pouquinho sobre mim
          </span>
          <div className={styles.containerCard}>
            <img className="m-10" src={foto} />
            <div className="m-10">
              <strong className="max-w-[370px] text-3xl  block">Simara Conceição</strong>
              <div className="flex flex-col">
                <span className="max-w-[370px] text-gray-200 text-xl leading-relaxed lg:max-w-[768px]">👩🏾‍💻Dev na @thoughtworksbr</span> 
                <span className="max-w-[370px] text-gray-200 text-xl leading-relaxed lg:max-w-[768px]">💟Instrutora na @reprogramabr e na @pretalab_</span>
                <span className="max-w-[370px] text-gray-200 text-xl leading-relaxed lg:max-w-[768px]">✊🏾Por mais mulheres pretas em tech</span>
                <span className="max-w-[370px] text-gray-200 text-xl leading-relaxed lg:max-w-[768px]">🗣Criadora de conteúdo no podcast e canal quero ser dev</span>
              </div>
            </div>
            <p className="w-[100%] mt-4 text-gray-200 text-2xl leading-relaxed text-center p-6 lg:w-[60%]">
              Sou baiana, moro em São Paulo, tenho 33 anos, meu background é em marketing digital, mas em 2019 fiz a migração de carreira para área de tecnologia. 
              Sou desenvolvedora full stack na Thoughtworks.  E  instrutora de programação para iniciantes em instituições que visam reduzir o gap de gênero e raça no mercado de tecnologia.
            </p>
            <p className="w-[100%] mt-4 text-gray-200 text-2xl leading-relaxed text-center p-6 lg:w-[60%]">
              Amo compartilhar conteúdos para ajudar  e inspirar pessoas plurais que estão na transição de carreira para área de tecnologia.
              Dessa forma, ajudo a construir um futuro tecnológico com mais equidade.
            </p>
          </div>
        </div>
    </div>
    <div id="conteudos" className="pt-20 pb-20">
        <div className="flex justify-center flex-col items-center">
          <span className="text-center font-bold text-4xl m-10 pt-10 border-gray-400 flex justify-center">
            Conteúdos
          </span>
          <p className="w-[100%] mt-4 text-gray-200 text-2xl leading-relaxed text-center p-6 lg:w-[60%]">
           Em 2019, enquanto eu estudava para iniciar na carreira de desenvolvedora, decidi compartilhar minha jornada contando as dores e as delícias de migrar de carreira após os 30 anos e vindo de uma área completamente diferente. Iniciei criando conteúdos no Instagram e LinkedIn. E de lá pra cá surgiram também o blog, o podcast no spotify e o canal no Youtube.
          </p>
          <p className="w-[100%] mt-4 text-gray-200 text-2xl leading-relaxed text-center p-6 lg:w-[60%]">
           Em meus canais você vai encontrar muito conteúdo sobre migração de carreira para tecnologia e tutoriais para pessoas iniciantes na programação. O público com mais de 50 mil pessoas chama atenção de algumas marcas correlacionadas e que possuem compromisso com diversidade. Então você vai esbarrar também com campanhas publicitárias, geralmente, pra anúncio de vagas e cursos de tecnologia.
          </p>
        </div>
        <div>
          <div className="grid grid-row-1 gap-4 p-6 lg:gap-8 lg:p-20 lg:grid lg:grid-cols-5">
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
            <a href="https://www.simaraconceicao.com/blog"  target="_blank" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
              <div className="bg-blue-500 h-full p-6 flex items-center">
                <Book size={30} />
              </div>
              <div className="py-6 leading-relaxed">
                <strong className="text-2xl">Visitar o Blog</strong>
                <p>Artigos novos todas as quartas</p>
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
    </div>
      <div id="comunidade" className="pt-20 pb-20 w-[100%]">
        <div className="bg-blur bg-cover bg-no-repeat flex flex-col items-center lg:flex lg:justify-center lg:items-center lg:flex-row pt-20">
          <div className="flex justify-center flex-col items-center lg:flex lg:justify-center lg:items-center lg:flex-row lg:gap-72">
            <div className="flex justify-center flex-col items-center">
              <h1 className="w-[65%] text-center text-4xl font-bold">
                Vem fazer parte da nossa comunidade
              </h1>
              <p className="w-[100%] mt-4 text-gray-200 text-2xl leading-relaxed text-center p-6 lg:w-[60%]">
                Um grupo pra você se inspirar, ajudar e pedir ajuda, com mais de 200 pessoas que estão estudando programação.
                Quem faz parte do grupo recebe primeiro os conteúdos do quero ser dev e podem conversar diretamente comigo.
              </p>
              <a href="https://t.me/queroserdev">
              <button 
                className="mt-2 mb-6 m-4 h-full p-6 items-center bg-blue-500 uppercase rounded font-bold text-sm hover:bg-blue-700 transition-colors disabled:opacity-50 flex justify-between"
              >
                <TelegramLogo size={24} />
                <span>Vem pra nosso grupo no Telegram</span>
              </button>
              </a>
              
            </div>
          </div>
          
        </div>
      </div>
      <Footer />
    </>
  ) 
}