# Personal Website Frontend

This is the frontend for my personal website built with React, TypeScript, Tailwind CSS, and Vite.

## Features

- Responsive design
- Animated sections
- Project showcase with filtering
- Experience timeline
- Skills visualization
- Interactive chatbot

## Development

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/ereinha3/personal-website-frontend.git
cd personal-website-frontend
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory with the following variables:
```
VITE_HUGGINGFACE_API_KEY=your_api_key_here
VITE_CHATBOT_API_URL=https://ereinha3-personal-website-backend.hf.space/query
```

4. Start the development server
```bash
npm run dev
# or
yarn dev
```

## Deployment

This project is deployed on Vercel. To deploy your own version:

1. Fork this repository
2. Create a new project on Vercel
3. Connect your forked repository
4. Add the following environment variables in the Vercel project settings:
   - `VITE_HUGGINGFACE_API_KEY`: Your Hugging Face API key
   - `VITE_CHATBOT_API_URL`: The URL of your chatbot API endpoint

## Environment Variables

The following environment variables are required:

- `VITE_HUGGINGFACE_API_KEY`: Your Hugging Face API key for authentication
- `VITE_CHATBOT_API_URL`: The URL of your chatbot API endpoint

## License

MIT
