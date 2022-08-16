import { useParams } from 'react-router-dom'
import { InformationDefaultWithoutVideo } from '../components/InformationDefaultWithoutVideo'
import { Sidebar } from '../components/Sidebar'
import { Video } from '../components/Video'


export function Event() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <div className="flex flex-col min-h-screen">
      <main className="lg:flex lg:flex-1">
        { slug 
          ? <Video lessonSlug={slug} /> 
          : <InformationDefaultWithoutVideo />
        }
        <Sidebar />
      </main>
    </div>
  )
}