import { render, screen } from '@testing-library/react'
import { expect, test, describe } from '@jest/globals'
import HomePage from '../page'

describe('HomePage', () => {
  test('renders main heading with correct text', () => {
    render(<HomePage />)

    const mainHeading = screen.getByRole('heading', {
      name: /expert recycling guidance/i,
      level: 1
    })

    expect(mainHeading).toBeInTheDocument()
  })

  test('displays hero description with environmental focus', () => {
    render(<HomePage />)

    const description = screen.getByText(/get personalized disposal advice for any item/i)

    expect(description).toBeInTheDocument()
  })

  test('shows call-to-action button', () => {
    render(<HomePage />)

    const ctaButton = screen.getByRole('button', {
      name: /start consultation/i
    })

    expect(ctaButton).toBeInTheDocument()
    expect(ctaButton).toHaveClass('btn-primary')
  })

  test('displays feature preview cards with correct content', () => {
    render(<HomePage />)

    // AI Expert System feature
    expect(screen.getByText(/AI Expert System/i)).toBeInTheDocument()
    expect(screen.getByText(/powered by advanced ai/i)).toBeInTheDocument()

    // Location-Aware feature
    expect(screen.getByText(/Location-Aware/i)).toBeInTheDocument()
    expect(screen.getByText(/guidance specific to your area/i)).toBeInTheDocument()

    // Educational feature
    expect(screen.getByText(/Educational/i)).toBeInTheDocument()
    expect(screen.getByText(/learn about environmental impact/i)).toBeInTheDocument()
  })

  test('shows development status indicator', () => {
    render(<HomePage />)

    expect(screen.getByText(/development status/i)).toBeInTheDocument()
    expect(screen.getByText(/next.js 16 with turbopack initialized/i)).toBeInTheDocument()
    expect(screen.getByText(/epic 1: foundation & infrastructure/i)).toBeInTheDocument()
  })

  test('has proper semantic structure with landmarks', () => {
    render(<HomePage />)

    // Check for proper heading hierarchy
    const mainHeading = screen.getByRole('heading', { level: 1 })
    const subHeadings = screen.getAllByRole('heading', { level: 2 })
    const featureHeadings = screen.getAllByRole('heading', { level: 3 })

    expect(mainHeading).toBeInTheDocument()
    expect(subHeadings).toHaveLength(1) // "Ready to get started?"
    expect(featureHeadings).toHaveLength(3) // Three feature cards
  })

  test('uses environmental color scheme classes', () => {
    render(<HomePage />)

    const ctaButton = screen.getByRole('button', { name: /start consultation/i })

    expect(ctaButton).toHaveClass('btn-primary')
  })

  test('is accessible with proper ARIA attributes', () => {
    render(<HomePage />)

    // Check that button is properly labeled
    const ctaButton = screen.getByRole('button', { name: /start consultation/i })
    expect(ctaButton).toBeInTheDocument()

    // Check heading structure is logical
    const headings = screen.getAllByRole('heading')
    expect(headings.length).toBeGreaterThan(0)
  })
})