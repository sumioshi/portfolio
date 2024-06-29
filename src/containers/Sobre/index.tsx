import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis vero
      inventore, quaerat necessitatibus repudiandae ex? Eligendi in impedit,
      illo recusandae distinctio, enim commodi delectus harum tempore suscipit
      dolor nemo nam?
    </Paragrafo>
    <GithubSecao>
      <img
        src="https://github-readme-stats.vercel.app/api?username=sumioshi&theme=dracula&show_icons=true&hide_border=true&count_private=true"
        alt="GitHub Stats"
      />
      <img
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=sumioshi&theme=dracula&show_icons=true&hide_border=true&layout=compact"
        alt="Top Languages"
      />
    </GithubSecao>
  </section>
)

export default Sobre
