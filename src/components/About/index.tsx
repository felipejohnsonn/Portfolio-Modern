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
            src="https://instagram.ffor1-2.fna.fbcdn.net/v/t51.2885-19/344124458_990962592283338_3113260750401638253_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffor1-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=EANhu1BLAIsAX93xfbz&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfBmRzUgXeoi9DH0qKC2ZlsWxHHRVPAg6lSvJnyB69Qzsw&oe=645690AB&_nc_sid=1527a3"
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
