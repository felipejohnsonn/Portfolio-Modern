import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi'
import { FooterContainer } from './styles'

export function Footer() {
  return (
    <FooterContainer>
      <h4> &copy; {new Date().getFullYear()} Felipe Johnson</h4>
      <div className="links">
        <Link href={'https://github.com/felipejohnsonn'}>
          <a target="_blank" aria-label="Link para o Github">
            <FiGithub />
          </a>
        </Link>
        <Link href={'https://www.instagram.com/felipejohnsonn/'}>
          <a target="_blank" aria-label="Link para o Instagram">
            <FiInstagram />
          </a>
        </Link>
        <Link href={'https://wa.me/5555859913195'}>
          <a target="_blank" aria-label="Link para entrar em contato via whatsapp">
            <FaWhatsapp />
          </a>
        </Link>
      </div>
    </FooterContainer>
  )
}
