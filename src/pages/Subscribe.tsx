import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Logo } from '../components/Logo'
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
    <div className="bg-blur min-h-screen bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mx-auto mb-20">
        <div className="max-w-[640px]">
          <Logo />
          <h1 className="text-[2.5rem] leading-tight">Quero Ser Dev | Conteúdos de <strong className="bg-blue-500">migração de carreira</strong> para tecnologia e <strong className="bg-blue-500">tutoriais</strong> para iniciantes</h1>
          <p className="mt-4 text-gray-200 leading-relaxed">Criei essa plataforma durante os estudos no evento IgniteLab da Rocketseat. Aqui eu pretendo disponibilizar conteúdos listados e exclusivos do canal quero ser dev com tutoriais para pessoas iniciantes. Para acessar basta se cadastrar ao lado.</p>
        </div>
        <div className="p-8 bg-gray-700 border border-gray-300 rounded">
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
  )
}