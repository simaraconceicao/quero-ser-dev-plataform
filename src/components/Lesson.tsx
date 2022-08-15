import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom'

interface LessonProps {
  title: string
  slug: string
  availableAt: Date
  type: 'carreira' | 'tutorial'
}

export function Lesson(props: LessonProps) {
  const {slug } = useParams<{ slug: string }>()

  const isLessonAvailable = isPast(props.availableAt)
  const availableDateFormated = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR,
  })

  const isActiveLesson = slug === props.slug

  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-300">
        {availableDateFormated}
      </span>

      <div className={`rounded border border-gray-400 p-4 mt-2 group-hover:border-blue-500 ${isActiveLesson ? 'bg-blue-500 ': ''}`}>
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className={`text-sm text-blue-500 font medium flex items-center gap-2 ${isActiveLesson ? 'text-gray-200': ''}`}>
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font medium flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span className={`text-xs rounded py-[0.125rem] px-2 text-white border border-blue-500 font-bold ${isActiveLesson ? 'border-gray-200': ''}`}>
            {props.type === 'carreira' ? 'CARREIRA' : 'TUTORIAL'}
          </span>
        </header>
        <strong className="text-gray-200 mt-5 block">
         {props.title}
        </strong>
      </div>
    </Link>
  )
}