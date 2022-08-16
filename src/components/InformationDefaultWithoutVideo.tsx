import { Logo } from "./Logo";

export function InformationDefaultWithoutVideo() {
  return (
    <div className="max-w-[768px] bg-blur mx-auto bg-cover bg-no-repeat flex flex-col items-center lg:max-w-full lg:flex-1">
      <div className="flex items-center flex-1 lg:max-w-full lg:flex-1">
        <div className="max-w-[370px] w-full lg:flex lg:flex-1 lg:flex-col">
          <Logo />
          <h1 className="max-w-[300px] text-[1.5rem] mb-10 leading-tight p-2 text-center text-bold lg:max-w-[500px] lg:text-[2rem]">Siga a trilha e dê os primeiros passos em ReactJS!</h1>
        </div>
      </div>
    </div>
  )
}