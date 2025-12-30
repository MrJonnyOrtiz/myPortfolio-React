# Jonny Ortiz Portfolio

A modern React portfolio website showcasing full-stack development projects and professional experience.

## Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS, React Router
- **Backend**: AWS Lambda (Node.js), API Gateway
- **Infrastructure**: AWS (S3, CloudFront, Route53, SNS, SES)
- **Analytics**: Google Analytics, Google reCAPTCHA
- **Deployment**: GitHub Actions CI/CD

## Features

- Responsive design with mobile-first approach
- Project showcase with video demos
- Contact form with serverless backend
- Cookie consent management
- SEO optimized
- Performance optimized with lazy loading

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
VITE_CONTACT_API_URL=your_api_gateway_url
VITE_RECAPTCHA_KEY=your_recaptcha_site_key
VITE_GA=your_google_analytics_id
VITE_GTAG=your_gtag_id

```

## Deployment

Automatic deployment via GitHub Actions on push to master branch:

Builds React app

Syncs to S3 bucket (jonnyortiz.com)

Invalidates CloudFront cache

Contact form backend deployed separately via AWS SAM.

License
© 2024 Jonny Ortiz - All rights reserved
