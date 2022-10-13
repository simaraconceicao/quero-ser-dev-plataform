import { useParams } from 'react-router-dom'
import foto from '../assets/foto.png'
import { About } from '../components/About/About'
import { Sidebar } from '../components/Sidebar'
import { Video } from '../components/Video'


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
              <div className="w-[100%] flex justify-center flex-col items-center lg:flex lg:justify-center lg:items-center lg:flex-col">
                <span className="text-center font-bold text-4xl m-10 border-gray-400 flex justify-center">
                  ReactJS para iniciantes
                </span>
                <p className="w-[80%] mt-4 mb-1 text-gray-200 text-2xl leading-relaxed text-center flex justify-center p-6 lg:w-[70%]">
                  ReactJS é a tecnologia mais usada por pessoas desenvolvedoras experientes e também por pessoas que estão aprendendo a programar, de acordo com a pesquisa do StackOverflow com mais de 70mil pessoas da comunidade tech lançada em maio de 2022.
                </p>
                <p className="w-[80%] mt-4 mb-2 text-gray-200 text-2xl leading-relaxed text-center flex justify-center p-6 lg:w-[70%]">
                  Imagina você aprendendo os passos iniciais de como as grandes plataformas web são criadas nos dias de hoje. Plataformas como Facebook, Instagram, Twitter, TikTok, Netflix, AirBnB, Notion e muitas outras.
                  Isso te abre possibilidades de conseguir sua vaga como dev front-end jr., num dos mercados que mais cresce no Brasil e no mundo, com salários e benefícios atrativos até mesmo para pessoas iniciantes ou estagiárias.
                </p>
              </div>
            </div>
          )
         }
        <Sidebar />

      </main>
    </div>
  )
}