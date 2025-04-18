# German Cookbook Website

A fully interactive and animated website for a German cookbook featuring traditional recipes.

## Features

- **Animated UI**: Modern and interactive interface with animations powered by Framer Motion
- **Recipe Browser**: Browse and filter recipes by category, region, and difficulty
- **Detailed Recipe Pages**: View ingredients, instructions, and cooking tips for each recipe
- **Responsive Design**: Optimized for all device sizes from mobile to desktop
- **German Cuisine Categories**: Explore recipes from different German regions

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- React Intersection Observer

## Getting Started

Follow these instructions to set up the project on your local machine.

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/german-cookbook.git
cd german-cookbook
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

- `/components` - Reusable UI components
- `/pages` - Next.js pages and routes
- `/public` - Static assets including images
- `/styles` - Global CSS and Tailwind configuration

## Customization

### Adding New Recipes

To add new recipes, modify the recipe data in the corresponding page files. In a production environment, you'd typically fetch this data from an API or CMS.

### Styling

The project uses Tailwind CSS for styling. You can customize the theme by editing the `tailwind.config.js` file.

## Deployment

This application can be easily deployed using Vercel:

```bash
npm run build
# or
yarn build
```

Then deploy the generated output to your hosting provider of choice.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Images sourced from Unsplash
- Recipe information based on traditional German cuisine 