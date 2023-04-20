import Link from 'next/link'
import { Icons } from './styles'
import { FiGithub, FiLinkedin, FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

export function Links() {
  return (
    <>
      <Icons>
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
        <div className="barra"></div>
      </Icons>
    </>
  )
}
