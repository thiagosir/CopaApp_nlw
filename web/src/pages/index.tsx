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
    <div className="max-w-[1124px] h-screen mx-auto grid grid-cols-2 items-center">
      <main>
        <Image src={logoImg} alt="nlw copa" />

        <h1>Crie seu próprio bolão da copa e compartile entre amigos!</h1>

        <div>
          <Image src={avatarImg} alt="" />
          <strong>
            <span>+12.592</span> pessoas já estão usando
          </strong>
        </div>

        <form>
          <input type="text" required placeholder="Qual nome do seu bolão?"/>
          <button type="submit">Criar meu bolão</button>
        </form>
        <p>Após criar seu bolão, você recebrá um código único que poderá usar para convidar outras pessoas 🚀</p>

        <div>
          <div>
            <Image src={iconCheckImg} alt=""/>
            <div>
              <span>+2.986</span>
              <span>Bolôes criados</span>
            </div>
          </div>
        </div>
        <div>
          <div>
            <Image src={iconCheckImg} alt=""/>
            <div>
              <span>+192.325</span>
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
