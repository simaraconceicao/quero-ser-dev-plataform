import { useParams } from 'react-router-dom'
import { InformationDefaultWithoutVideo } from '../components/InformationDefaultWithoutVideo'
// import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { Video } from '../components/Video'


export function Event() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <div className="flex flex-col min-h-screen">
      {/* <Header /> */}
      <main className="flex flex-1">
        { slug 
          ? <Video lessonSlug={slug} /> 
          : <InformationDefaultWithoutVideo />
        }
        <Sidebar />
      </main>
    </div>
  )
}