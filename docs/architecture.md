# RecyclAI Architecture

## Executive Summary

LLM-as-environmental-expert architecture eliminating complex computer vision infrastructure. Progressive enhancement from text-based consultation to vision-enhanced magic, built on Next.js 16 with Turbopack for blazing fast 24-hour development sprint.

## Project Initialization

**First Implementation Story:**
```bash
npx create-next-app@latest recyclai --typescript --eslint --tailwind --app --turbopack
```

This establishes base architecture with TypeScript, Tailwind CSS, ESLint, App Router, and Turbopack stable bundler (5-10x faster development).

## Decision Summary

| Category | Decision | Version | Affects FRs | Rationale |
| -------- | -------- | ------- | ----------- | --------- |
| Framework | Next.js | 16.0+ | All | React framework with SSR, optimal for mobile-first PWA |
| Language | TypeScript | 5.0+ | All | Type safety for complex LLM integration patterns |
| Styling | Tailwind CSS | 3.4+ | UI/UX (FR31-37) | Rapid mobile-first styling with CSS fallback support |
| Build Tool | Turbopack | Stable | All | 5-10x faster builds critical for 24hr sprint |
| LLM Provider | OpenAI API | GPT-4+ | LLM Integration (FR9-14) | Structured output support for expert consultation |
| State Management | React Server Components | Next.js 16 | Session Management (FR38-42) | Server-side state for stateless consultation sessions |
| Animations | Lottie + CSS Fallbacks | Latest | UI Enhancement (FR33-35) | Progressive enhancement for loading states |
| Location Service | Browser Geolocation API | Native | Location-Aware (FR26-30) | ZIP code resolution for municipal disposal rules |

## Project Structure

```
recyclai/
├── app/                          # Next.js 16 App Router
│   ├── globals.css              # Tailwind + custom CSS
│   ├── layout.tsx               # Root layout with PWA setup
│   ├── page.tsx                 # Home - consultation interface
│   ├── api/                     # Server-side API routes
│   │   ├── consult/route.ts     # LLM consultation endpoint
│   │   └── location/route.ts    # ZIP code/city resolution
│   └── components/              # Reusable UI components
│       ├── ConsultationForm.tsx # Main form (FR1-3)
│       ├── ExpertResponse.tsx   # Structured guidance display (FR15-20)
│       ├── LoadingState.tsx     # Lottie animations + fallbacks
│       └── ui/                  # Shared UI primitives
├── lib/                         # Business logic
│   ├── llm-expert.ts           # Expert system prompts (FR9-14)
│   ├── location-service.ts     # Municipal disposal rules (FR26-30)
│   ├── types.ts                # TypeScript interfaces
│   └── utils.ts                # Shared utilities
├── public/                      # Static assets
│   ├── lottie/                 # Animation assets
│   └── icons/                  # PWA icons
└── prompts/                     # LLM system prompts
    ├── expert-consultant.txt   # Environmental expert persona
    └── response-schema.json    # Structured output format
```

## FR Category to Architecture Mapping

| FR Category | Architecture Component | Implementation Location |
| ----------- | ---------------------- | ----------------------- |
| Core Consultation (FR1-8) | ConsultationForm + API | `app/components/ConsultationForm.tsx`, `app/api/consult/` |
| LLM Integration (FR9-14) | Expert System | `lib/llm-expert.ts`, `prompts/` |
| Response Structure (FR15-20) | ExpertResponse Component | `app/components/ExpertResponse.tsx` |
| Progressive Enhancement (FR21-25) | Image Upload + Context | `app/components/ImageUpload.tsx` |
| Location-Aware (FR26-30) | Location Service | `lib/location-service.ts`, `app/api/location/` |
| UI/Interactions (FR31-37) | Component Library | `app/components/ui/`, `app/globals.css` |
| Session Management (FR38-42) | Server State | React Server Components |
| Environmental Education (FR43-46) | Expert Content | `prompts/expert-consultant.txt` |
| Error Handling (FR47-51) | Global Error Boundaries | `app/error.tsx`, `app/not-found.tsx` |

## Technology Stack Details

### Core Technologies

**Next.js 16 with Turbopack:**
- App Router for server-side rendering
- Turbopack bundler for 5-10x faster builds
- React Server Components for stateless sessions
- Built-in performance optimizations

**OpenAI Integration:**
- GPT-4+ for expert environmental consultation
- Structured output mode for consistent JSON responses
- System prompts with variable substitution
- Rate limiting and error handling

**Progressive Web App:**
- Service Worker for offline caching
- Responsive design with mobile-first approach
- Add-to-home-screen functionality

### Integration Points

**LLM Consultation Flow:**
```
User Input → Validation → Expert Prompt → OpenAI API → Structured JSON → UI Display
```

**Location Resolution:**
```
ZIP/City Input → Geocoding → Municipal Rules → Local Resources → Response Enhancement
```

**Image Processing (Phase 2):**
```
Image Upload → Vision API → Context Enhancement → Expert Analysis → Guidance
```

## Implementation Patterns

### Naming Conventions
- **Components:** PascalCase (`ConsultationForm.tsx`)
- **Files:** kebab-case (`llm-expert.ts`)
- **API Routes:** REST conventions (`/api/consult/route.ts`)
- **Types:** PascalCase interfaces (`DisposalGuidance`)

### Code Organization
- **Feature-based:** Group by functionality, not file type
- **Colocation:** Keep related components, styles, and tests together
- **Barrel exports:** Use index files for clean imports

### Error Handling
- **Graceful degradation:** Always provide general disposal guidance
- **Error boundaries:** Catch and display user-friendly messages
- **Retry logic:** Automatic retry for transient LLM failures
- **Confidence scoring:** Display uncertainty levels in responses

### LLM Integration Patterns
- **Structured prompts:** Use template variables for consistency
- **Response validation:** Zod schemas for JSON output
- **Fallback responses:** Cache common disposal guidance
- **Rate limiting:** Implement per-IP request limits

## Data Architecture

### Core Data Models

```typescript
interface DisposalGuidance {
  disposalMethod: 'recycle' | 'compost' | 'trash' | 'special' | 'hazardous'
  instructions: string[]
  localResources: LocalResource[]
  environmentalImpact: string
  confidence: 'high' | 'medium' | 'low'
}

interface LocalResource {
  name: string
  address: string
  phone?: string
  hours: string
  distance?: number
}

interface ConsultationRequest {
  itemDescription: string
  location?: string
  hasImage?: boolean
  imageContext?: string
}
```

### Data Flow
- **Stateless Sessions:** No user data persistence
- **Temporary Image Storage:** Auto-delete after consultation
- **Cache Strategy:** Common disposal guidance cached for performance

## API Contracts

### Consultation Endpoint
```
POST /api/consult
Content-Type: application/json

Request:
{
  "itemDescription": "old smartphone",
  "location": "Seattle, WA",
  "hasImage": false
}

Response:
{
  "guidance": DisposalGuidance,
  "timestamp": "2025-11-21T...",
  "processingTime": 2.3
}
```

### Location Resolution
```
GET /api/location?q=98101
Response:
{
  "city": "Seattle",
  "state": "WA",
  "zipCode": "98101",
  "municipalRules": {...}
}
```

## Security Architecture

- **API Security:** Rate limiting (10 requests/minute per IP)
- **Input Validation:** Sanitize all user inputs before LLM processing
- **API Key Protection:** Server-side only OpenAI integration
- **Content Security:** CSP headers prevent XSS attacks
- **Image Handling:** Temporary processing, no permanent storage

## Performance Considerations

- **LLM Response Time:** <3 seconds target with streaming responses
- **First Contentful Paint:** <2 seconds on 3G connection
- **Animation Performance:** Lottie with CSS fallbacks for 60fps
- **Bundle Size:** Tree-shaking and dynamic imports for core consultation
- **Caching Strategy:** Edge caching for static assets, memory cache for common guidance

## Development Environment

### Prerequisites
- **Node.js:** 18.17+ (for Next.js 16 compatibility)
- **Package Manager:** npm, yarn, pnpm, or bun
- **Environment Variables:** `OPENAI_API_KEY`

### Setup Commands
```bash
# Initialize project
npx create-next-app@latest recyclai --typescript --eslint --tailwind --app --turbopack

# Install additional dependencies
npm install openai zod @lottiefiles/react-lottie-player

# Development server (Turbopack)
npm run dev

# Type checking
npm run type-check

# Build for production
npm run build
```

## Architecture Decision Records (ADRs)

### ADR-001: LLM-as-Expert vs Computer Vision
**Decision:** Use LLM as environmental expert instead of object detection
**Rationale:** Eliminates complex ML infrastructure while providing richer, contextual guidance
**Impact:** Faster development, more educational responses, easier location-aware rules

### ADR-002: Progressive Enhancement Strategy
**Decision:** Text-first with optional image upgrade path
**Rationale:** Reduces Sprint #3 risk while maintaining future vision upgrade potential
**Impact:** Guaranteed MVP delivery with clear Phase 2 enhancement path

### ADR-003: Next.js 16 with Turbopack
**Decision:** Latest Next.js with stable Turbopack bundler
**Rationale:** 5-10x faster builds critical for 24-hour development sprint
**Impact:** Rapid iteration cycles, modern React patterns, production-ready performance

### ADR-004: Stateless Session Architecture
**Decision:** No user accounts or persistent sessions
**Rationale:** Simplifies privacy compliance, reduces infrastructure complexity
**Impact:** Instant access, no registration barriers, GDPR-friendly design

---

_Generated by BMAD Decision Architecture Workflow v1.0_
_Date: 2025-11-21_
_For: Peleke_