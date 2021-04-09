import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import SocialLinks from '../components/SocialLinks'
import { MainContent } from '../styles/base'

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <MainContent>
      <h1>Sobre mim</h1>
      <StaticImage
        src="../images/about-photo.png"
        alt="Danilo Sales e sua filha"
        placeholder="blurred"
        layout="fullWidth"
      />
      <p style={{ paddingTop: '5rem' }}>
        Meu nome é Danilo Sales, nasci em Brasília/DF e atualmente moro em Santa
        Catarina, gamer nas horas vagas e amante de boa cerveja, faço da minha
        vida um eterno aprendizado, sempre em busca de coisas novas para
        aprender. Atualmente sou Senior Software Enginneer na Pixeon.
      </p>

      <p>
        Tenho muita facilidade de aprender e estou aprimorando a capacidade de
        compartilhar, como todo bom autodidata, organizo meus estudo de acordo
        com o fluxo da minha carreira.
      </p>

      <p>
        Eu amo trabalhar em equipe e sou bem comunicativo. No meu tempo livre,
        gosto de jogar, passar um tempo com a minha esposa e amigos, esse blog
        nasceu na intenção de compartilhar um pouco do conhecimento que eu tenho
        e assim aprimorar mais minhas skills.
      </p>

      <blockquote>
        <p style={{ fontWeight: 'bold' }}>
          &quot;Insanidade é continuar fazendo sempre a mesma coisa e esperar
          resultados diferentes.&quot;
        </p>
        <p style={{ fontStyle: 'italic' }}>
          <i>Albert Einstein</i>
        </p>
      </blockquote>

      <h2>Contato</h2>

      <p>
        Você pode entrar em contato comigo através de qualquer uma das minhas
        redes sociais.
      </p>
    </MainContent>
    <SocialLinks />
  </Layout>
)

export default AboutPage
