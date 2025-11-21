/**
 * Environment Variables Configuration and Validation
 *
 * Provides type-safe access to environment variables with runtime validation.
 * Ensures all required environment variables are present and properly typed.
 */

import { z } from 'zod'

// Environment variable schema definition
const envSchema = z.object({
  // OpenAI Configuration (required)
  OPENAI_API_KEY: z.string().min(1, 'OpenAI API key is required'),

  // Optional OpenAI Configuration
  OPENAI_API_BASE: z.string().url().optional(),
  OPENAI_ORG_ID: z.string().optional(),

  // Next.js Environment
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),

  // Optional Development Configuration
  PORT: z.string().regex(/^\d+$/).transform(Number).optional(),
})

// Infer TypeScript types from schema
export type Env = z.infer<typeof envSchema>

// Environment variable keys for type safety
export const ENV_KEYS = {
  OPENAI_API_KEY: 'OPENAI_API_KEY',
  OPENAI_API_BASE: 'OPENAI_API_BASE',
  OPENAI_ORG_ID: 'OPENAI_ORG_ID',
  NODE_ENV: 'NODE_ENV',
  PORT: 'PORT',
} as const

/**
 * Validates and returns typed environment variables
 *
 * @throws {Error} If required environment variables are missing or invalid
 * @returns {Env} Validated and typed environment variables
 */
export function validateEnv(): Env {
  try {
    const env = envSchema.parse(process.env)
    return env
  } catch (error) {
    if (error instanceof z.ZodError) {
      const missingVars = error.errors.map(err =>
        `${err.path.join('.')}: ${err.message}`
      ).join('\n')

      throw new Error(
        `Environment validation failed:\n${missingVars}\n\n` +
        `Please check your .env.local file and ensure all required variables are set.\n` +
        `See .env.example for reference.`
      )
    }
    throw error
  }
}

/**
 * Get a specific environment variable with type safety
 *
 * @param key - Environment variable key
 * @returns The environment variable value
 */
export function getEnvVar<K extends keyof Env>(key: K): Env[K] {
  const env = validateEnv()
  return env[key]
}

/**
 * Check if we're in development environment
 */
export function isDevelopment(): boolean {
  return getEnvVar('NODE_ENV') === 'development'
}

/**
 * Check if we're in production environment
 */
export function isProduction(): boolean {
  return getEnvVar('NODE_ENV') === 'production'
}

/**
 * Check if we're in test environment
 */
export function isTest(): boolean {
  return getEnvVar('NODE_ENV') === 'test'
}

// Validate environment on module load (fail fast)
if (typeof window === 'undefined') {
  // Only validate on server-side to avoid exposing env vars to client
  validateEnv()
}