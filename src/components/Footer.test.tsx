import { describe, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  test('should return the correct text', () => {
    render(<Footer />)

    expect(screen.getByText('Feito com ♡ por Simara | Criei essa plataforma durante os estudos no evento IgniteLab da Rocketseat.')).toBeInTheDocument() 
  })
})