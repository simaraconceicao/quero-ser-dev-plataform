import { Logo } from "./Logo";

export function InformationDefaultWithoutVideo() {
  return (
    <div className="bg-blur min-h-screen bg-cover bg-no-repeat flex flex-col items-center flex-1">
      <div className="w-full max-w-[1100px] flex items-center mx-auto mb-20">
        <div className="max-w-[640px] w-full mx-auto">
          <Logo />
          <h1 className="text-[2rem] leading-tight">Escolha o conteúdo ao lado e se jogue! Conteúdos de <strong className="bg-blue-500">migração de carreira</strong> para tecnologia e <strong className="bg-blue-500">tutoriais</strong> para iniciantes</h1>
        </div>
      </div>
    </div>
  )
}