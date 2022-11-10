// interface HomeProps {
//   count: number;
// }

import Image from "next/image";
import appPreviewImg from "../assets/app-nlw-copa-preview.png";
import logoImg from "../assets/logo.svg";
import avatarImg from "../assets/users-avatar-example.png";
import iconCheckImg from "../assets/icon-check.svg";

export default function Home() {
  return (
    <div className="max-w-[1124px] h-screen mx-auto grid grid-cols-2 gap-28 items-center">
      <main>
        <Image src={logoImg} alt="nlw copa" />

        <h1 className="mt-14 text-white text-5xl font-bold leading-tight">
          Crie seu próprio bolão da copa e compartile entre amigos!
        </h1>

        <div className="mt-18 flex items-center gap-2">
          <Image src={avatarImg} alt="" />
          <strong className="text-gray-100 text-xl">
            <span className="text-ignite-500">+12.592</span> pessoas já estão
            usando
          </strong>
        </div>

        <form className="mt-10 flex gap-2">
          <input
            className="flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600"
            type="text"
            required
            placeholder="Qual nome do seu bolão?"
          />

          <button
            className="bg-yellow-500 px-6 py-4 rounded text-gray-900 font-bold text-sm uppercase hover:bg-yellow-700"
            type="submit"
          >
            Criar meu bolão
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-300 leading-relaxed">
          Após criar seu bolão, você recebrá um código único que poderá usar
          para convidar outras pessoas 🚀
        </p>

        <div className="mt-10 pt-10 border-t border-gray-600 flex items-center justify-between text-gray-100">
          <div className="flex items-center gap-6">
            <Image src={iconCheckImg} alt="" />
            <div className="flex flex-col">
              <span className="font font-bold text-2xl">+2.986</span>
              <span>Bolôes criados</span>
            </div>
          </div>

          <div className="w-px h-14 bg-gray-600"/>

          <div className="flex items-center gap-6">
            <Image src={iconCheckImg} alt="" />
            <div className="flex flex-col">
              <span className="font font-bold text-2xl">+192.325</span>
              <span>Palpites enviados</span>
            </div>
          </div>
        </div>
      </main>
      <Image src={appPreviewImg} alt="Exibição de celulares" quality={100} />
    </div>
    // <h1 className="text-violet-500 font-bold">Contagem: {props.count}</h1>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3333/pools/count");
  const data = await res.json();

  return {
    props: {
      count: data.count,
    },
  };
};
