import { Route, Routes } from 'react-router-dom'
import { Event } from './pages/Event'
import { Home } from './pages/Home'
import { Subscribe } from './pages/Subscribe'
import Playground from './pages/Playground'


export function Router() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course" element={<Subscribe />} />
      <Route path="/event" element={<Event />} />
      <Route path="/event/lesson/:slug" element={<Event />} />
      <Route path="/playground" element={<Playground />} />
    </Routes>
  )
}