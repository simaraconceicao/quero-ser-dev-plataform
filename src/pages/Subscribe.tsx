import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Logo } from '../components/Logo'
import { About } from '../components/About/About'
import { Footer } from '../components/Footer'
import { List, YoutubeLogo } from 'phosphor-react'
import styles from './menu.module.css'
import { useCreateSubscriberMutation } from '../graphql/generated'

export function Subscribe() {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [open, setOpen] = useState(false)
  const [success, setSuccess] = useState(false)

  function handleMenu() {
    open ? setOpen(false) :  setOpen(true)
  }

  function goToEvent() {
    navigate('/event')
  }
  const [createSubscriber, { loading }] = useCreateSubscriberMutation()

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault()

    await createSubscriber({
      variables: {
        name,
        email,
      }
    })
    setSuccess(true)
    setName('')
    setEmail('')
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
            <a  className={open ? styles.linkOpen : styles.link} href="#degustacao">Playlist secreta grátis</a>
          </li>
        </ul>
      </nav>
      <div id="inicio">
        <div className="bg-blur  bg-cover bg-no-repeat flex flex-col items-center lg:flex lg:justify-center lg:items-center lg:flex-row pt-20">
          <div className="flex justify-center flex-col items-center lg:flex lg:justify-center lg:items-center lg:flex-row lg:gap-72">
            <div className="max-w-[768px] flex justify-center flex-col items-center">
              <Logo />
              <h1 className="max-w-[350px] text-center text-5xl font-bold lg:max-w-[768px]">
                Um guia de ReactJS para iniciantes. Sem enrolação, direto ao ponto.
              </h1>
              <p className="max-w-[370px] mt-4 mb-10 text-gray-200 text-2xl leading-relaxed text-center p-6 lg:max-w-[768px]">
                Tutoriais descomplicados e rápidos, que realmente funcionam pra pessoas que querem entender e praticar os fundamentos de ReactJS, mas têm medo ou não sabem por onde começar.
              </p>
            </div>
            <div className="p-8 bg-gray-700 border border-gray-300 rounded mb-[20px]">
              <strong className="max-w-[370px] text-2xl mb-6 block">ATENÇÃO! Em breve irei lançar um curso de ReactJS para iniciantes com aulas atualizadas e por um baixo custo. E você pode saber com antecedência sobre a data de lançamento. Cadastre-se gratuitamente!</strong>
              <form onSubmit={handleSubscribe} className="flex flex-col w-full gap-2">
                <input 
                  className="bg-gray-900 rounded px-5 h-14"
                  type="text" 
                  placeholder="Seu nome completo" 
                  value={name}
                  onChange={event => setName(event.target.value)}
                />
                <input 
                  className="bg-gray-900 rounded px-5 h-14"
                  type="email" 
                  value={email}
                  placeholder="Digite seu e-mail" 
                  onChange={event => setEmail(event.target.value)}
                />

                <button 
                  type="submit"
                  disabled={loading}
                  className="mt-4 bg-blue-500 uppercase py-4 rounded font-bold text-sm hover:bg-blue-700 transition-colors disabled:opacity-50"
                >
                  Entrar pra lista de espera
                </button>
                {success && <p>Cadastro realizado com sucesso.</p>}
              </form>
            </div>
          </div>
          
        </div>
      </div>
      <div id="about" className="pt-20 pb-20">
        <About />
      </div>
      <div id="degustacao" className="pt-20 pb-20 w-[100%]">
        <div className="bg-blur bg-cover bg-no-repeat flex flex-col items-center lg:flex lg:justify-center lg:items-center lg:flex-row pt-20">
          <div className="flex justify-center flex-col items-center lg:flex lg:justify-center lg:items-center lg:flex-row lg:gap-72">
            <div className="flex justify-center flex-col items-center">
              <h1 className="w-[65%] text-center text-4xl font-bold">
                Vem assistir GRATUITAMENTE algumas das minhas aulas pra saber se curte o que vem por aí
              </h1>
              <p className="w-[80%] mt-4 text-gray-200 text-2xl leading-relaxed text-center p-6">
                Eu gravei essas aulas de ReactJS para iniciantes em novembro de 2021 e disponibilizei numa playlist secreta do canal quero ser dev. São tutoriais de ReactJS com exercícios e projetos. 
              </p>
              <p className="w-[80%] text-gray-200 text-2xl leading-relaxed text-center p-6">
                Lembrando que para o novo curso, ao pagar um baixo custo você terá acesso ao conteúdo atualizado e mais completo que vai te habilitar a criar projetos pessoais do zero ao deploy com ReactJS. Além de alguns bônus: 10 projetos para iniciar o seu portfólio de ReactJS e Roadmap de ReactJS com mapeamento de próximos passos nos estudos.
              </p>
              <button 
                  onClick={goToEvent}
                  type="submit"
                  disabled={loading}
                  className="mt-2 mb-6 m-4 h-full p-6 items-center bg-blue-500 uppercase rounded font-bold text-sm hover:bg-blue-700 transition-colors disabled:opacity-50 flex justify-between"
                >
                  <YoutubeLogo size={24} />
                  Vem assistir grátis
                </button>
            </div>
          </div>
          
        </div>
      </div>
      <Footer />
    </>
  ) 
}