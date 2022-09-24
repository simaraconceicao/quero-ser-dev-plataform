import { ArrowArcLeft } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
import { useGetLessonsQuery } from '../graphql/generated'
import { Lesson } from './Lesson'

export function Sidebar() {
  let navigate = useNavigate()
  const { data } = useGetLessonsQuery()

  function goBack() {
    navigate('/')
  }

  return (
    <>
      <aside className="max-w-[768px] flex flex-col items-center bg-gray-600 p-6 border-l border-gray-600 lg:flex lg:items-center lg:flex-col">
        <button 
          onClick={goBack}
          className="mt-2 mb-6 p-6 items-center bg-blue-500 uppercase rounded font-bold text-sm hover:bg-blue-700 transition-colors flex justify-between"
        >
          <ArrowArcLeft size={24} />
            Voltar para página inicial
        </button>
        <span className="font-bold text-2xl pb-1 mb-1 border-gray-400 block">
          Playlist secreta
        </span>
        <span className="text-xl pb-6 mb-6 border-b border-gray-400 block">
         Escolha uma aula abaixo
        </span>

        <div className="flex flex-col gap-8">
          {data?.lessons.map(lesson => {
            return (
              <Lesson
                key={lesson.id}
                title={lesson.title}
                slug={lesson.slug}
                availableAt={new Date(lesson.availableAt)}
                type={lesson.lessonType}
              />
            )
          })}
        </div>
      </aside>
    </>
  )
}