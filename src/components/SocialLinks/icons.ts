import { StyledIcon } from '@styled-icons/styled-icon'
import { Github } from '@styled-icons/boxicons-logos/Github'
import { Linkedin } from '@styled-icons/boxicons-logos/Linkedin'
import { Twitter } from '@styled-icons/boxicons-logos/Twitter'
import { StackOverflow } from '@styled-icons/boxicons-logos/StackOverflow'

export type IconsOptions = 'Github' | 'Linkedin' | 'Twitter' | 'StackOverflow'

type IconsProps = {
  [key in IconsOptions]: StyledIcon
}

const Icons: IconsProps = { Github, Linkedin, Twitter, StackOverflow }

export default Icons
