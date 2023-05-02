/* eslint-disable @next/next/no-img-element */
import { DownloadSimple, User } from 'phosphor-react'
import { Container, Title } from '../../styles/styles'
import { ButtonPrimary } from '../../styles/styles'
import { AboutContainer } from './styles'

export function About() {
  return (
    <Container id="about">
      <Title>
        Sobre
        <span>
          <User /> About
        </span>
      </Title>
      <AboutContainer>
        <div className="AboutImg">
          <img
            className="AboutImg"
            src="https://user-images.githubusercontent.com/128244805/235793196-2a082fd6-ba23-490a-8d9b-993d822fb858.png"
            alt="Imagem de perfil felipe"
          />
        </div>

        <div className="aboutContent">
          <div className="aboutDescription">
            <p>
            Meu nome é Felipe e eu sou um apaixonado por tecnologia que decidiu trilhar o caminho da programação. Sou um desenvolvedor Front-End. que vive em Caucaia-CE, fiz alguns cursos na Alura em desenvolvimento web.
            </p>
            <p>
              Meu interesse e primeiro contato com desenvolvimento web começou
              em 2022, com a criação de um site feito em Html, Css e JavaScript.
            </p>
            <p>
              Atualmente estou estudando Análise e desenvolvimento de sistemas, de modo a
              ampliar meus conhecimentos e assim aprimorar ainda mais as
              habilidades que possuo.
            </p>
          </div>
          
        </div>
      </AboutContainer>
    </Container>
  )
}
