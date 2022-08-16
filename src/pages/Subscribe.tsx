import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Logo } from '../components/Logo'
import { Footer } from '../components/Footer'
import { useCreateSubscriberMutation } from '../graphql/generated'

export function Subscribe() {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [createSubscriber, { loading }] = useCreateSubscriberMutation()

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault()

    await createSubscriber({
      variables: {
        name,
        email,
      }
    })

    navigate('/event')
  }

  return(
    <>
      <div className="bg-blur min-h-screen bg-cover bg-no-repeat flex flex-col items-center lg:flex lg:justify-center lg:items-center lg:flex-row">
        <div className="flex justify-center flex-col items-center lg:flex lg:justify-center lg:items-center lg:flex-row lg:gap-72">
          <div className="max-w-[768px] flex justify-center flex-col items-center">
            <Logo />
            <h1 className="max-w-[350px] text-center text-5xl font-bold lg:max-w-[768px]">
              Tutoriais de ReactJS para iniciantes 
            </h1>
            <p className="max-w-[370px] mt-4 mb-10 text-gray-200 text-2xl leading-relaxed text-center p-6 lg:max-w-[768px]">
              Conteúdos não listados e exclusivos do canal quero ser dev com tutoriais para pessoas iniciantes. Para acessar basta se cadastrar.
            </p>
          </div>
          <div className="p-8 bg-gray-700 border border-gray-300 rounded mb-[20px]">
            <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>
            <form onSubmit={handleSubscribe} className="flex flex-col w-full gap-2">
              <input 
                className="bg-gray-900 rounded px-5 h-14"
                type="text" 
                placeholder="Seu nome completo" 
                onChange={event => setName(event.target.value)}
              />
              <input 
                className="bg-gray-900 rounded px-5 h-14"
                type="email" 
                placeholder="Digite seu e-mail" 
                onChange={event => setEmail(event.target.value)}
              />

              <button 
                type="submit"
                disabled={loading}
                className="mt-4 bg-blue-500 uppercase py-4 rounded font-bold text-sm hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                Acessar o conteúdo
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) 
}