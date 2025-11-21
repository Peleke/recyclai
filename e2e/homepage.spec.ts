import { test, expect } from '@playwright/test'

test.describe('RecyclAI Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('has correct title and heading', async ({ page }) => {
    // Check page title
    await expect(page).toHaveTitle(/RecyclAI - Expert Recycling Guidance/)

    // Check main heading
    const heading = page.getByRole('heading', { name: /expert recycling guidance/i, level: 1 })
    await expect(heading).toBeVisible()
  })

  test('displays hero section with description and CTA', async ({ page }) => {
    // Check hero description
    const description = page.getByText(/get personalized disposal advice for any item/i)
    await expect(description).toBeVisible()

    // Check call-to-action button
    const ctaButton = page.getByRole('button', { name: /start consultation/i })
    await expect(ctaButton).toBeVisible()
    await expect(ctaButton).toHaveClass(/btn-primary/)
  })

  test('shows all three feature cards', async ({ page }) => {
    // AI Expert System card
    const aiCard = page.getByText('AI Expert System')
    await expect(aiCard).toBeVisible()

    const aiDescription = page.getByText(/powered by advanced ai/i)
    await expect(aiDescription).toBeVisible()

    // Location-Aware card
    const locationCard = page.getByText('Location-Aware')
    await expect(locationCard).toBeVisible()

    const locationDescription = page.getByText(/guidance specific to your area/i)
    await expect(locationDescription).toBeVisible()

    // Educational card
    const eduCard = page.getByText('Educational')
    await expect(eduCard).toBeVisible()

    const eduDescription = page.getByText(/learn about environmental impact/i)
    await expect(eduDescription).toBeVisible()
  })

  test('displays development status section', async ({ page }) => {
    const statusSection = page.getByText(/development status/i)
    await expect(statusSection).toBeVisible()

    const nextjsStatus = page.getByText(/next.js 16 with turbopack initialized/i)
    await expect(nextjsStatus).toBeVisible()

    const epicStatus = page.getByText(/epic 1: foundation & infrastructure/i)
    await expect(epicStatus).toBeVisible()
  })

  test('has proper responsive design', async ({ page }) => {
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 })

    const heading = page.getByRole('heading', { name: /expert recycling guidance/i, level: 1 })
    await expect(heading).toBeVisible()

    const ctaButton = page.getByRole('button', { name: /start consultation/i })
    await expect(ctaButton).toBeVisible()

    // Test desktop viewport
    await page.setViewportSize({ width: 1024, height: 768 })

    await expect(heading).toBeVisible()
    await expect(ctaButton).toBeVisible()
  })

  test('has accessible navigation and focus management', async ({ page }) => {
    // Test keyboard navigation
    await page.keyboard.press('Tab')

    // Should focus on the CTA button (first focusable element)
    const ctaButton = page.getByRole('button', { name: /start consultation/i })
    await expect(ctaButton).toBeFocused()

    // Check ARIA attributes
    await expect(ctaButton).toHaveAttribute('type', 'button')
  })

  test('has environmental color scheme', async ({ page }) => {
    // Check that primary colors (greens) are being used
    const ctaButton = page.getByRole('button', { name: /start consultation/i })

    // Verify button has environmental styling classes
    const buttonClass = await ctaButton.getAttribute('class')
    expect(buttonClass).toContain('btn-primary')
  })

  test('loads without console errors', async ({ page }) => {
    const messages: string[] = []

    page.on('console', msg => {
      if (msg.type() === 'error') {
        messages.push(msg.text())
      }
    })

    await page.goto('/')

    // Wait for page to fully load
    await page.waitForLoadState('networkidle')

    // Should have no console errors
    expect(messages).toHaveLength(0)
  })

  test('has proper meta tags for SEO and PWA', async ({ page }) => {
    // Check viewport meta tag
    const viewport = page.locator('meta[name="viewport"]')
    await expect(viewport).toHaveAttribute('content', /width=device-width, initial-scale=1/)

    // Check theme color for PWA
    const themeColor = page.locator('meta[name="theme-color"]')
    await expect(themeColor).toHaveAttribute('content', '#22c55e')

    // Check description meta tag
    const description = page.locator('meta[name="description"]')
    await expect(description).toHaveAttribute('content', /expert recycling guidance/i)
  })

  test('shows proper semantic HTML structure', async ({ page }) => {
    // Check for header landmark
    const header = page.locator('header')
    await expect(header).toBeVisible()

    // Check for main landmark
    const main = page.locator('main')
    await expect(main).toBeVisible()

    // Check for footer landmark
    const footer = page.locator('footer')
    await expect(footer).toBeVisible()

    // Check heading hierarchy (h1, then h2s, then h3s)
    const h1 = page.getByRole('heading', { level: 1 })
    await expect(h1).toBeVisible()

    const h2s = page.getByRole('heading', { level: 2 })
    await expect(h2s).toHaveCount(1) // "Ready to get started?"

    const h3s = page.getByRole('heading', { level: 3 })
    await expect(h3s).toHaveCount(3) // Three feature cards
  })
})