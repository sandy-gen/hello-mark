#!/bin/bash

# Create directories if they don't exist
mkdir -p public/images/games
mkdir -p public/images/cards
mkdir -p public/images/testimonials

# Download game images
curl -L "https://images.unsplash.com/photo-1511193311914-0346f16efe90?q=80&w=800" --output public/images/games/texas-holdem.webp
curl -L "https://images.unsplash.com/photo-1529539795054-3c162aab037a?q=80&w=800" --output public/images/games/omaha.webp
curl -L "https://images.unsplash.com/photo-1606167668584-78701c57f13d?q=80&w=800" --output public/images/games/seven-card-stud.webp
curl -L "https://images.unsplash.com/photo-1494797262163-102fae527c62?q=80&w=800" --output public/images/games/speed-poker.webp

# Download hero and card images
curl -L "https://images.unsplash.com/photo-1601370690183-1c7796ecec61?q=80&w=800" --output public/images/hero-bg.webp
curl -L "https://images.pexels.com/photos/6762039/pexels-photo-6762039.jpeg?w=800" --output public/images/cards/ace-spades.webp
curl -L "https://images.pexels.com/photos/6762037/pexels-photo-6762037.jpeg?w=800" --output public/images/cards/king-hearts.webp
curl -L "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=800" --output public/images/chips.webp

# Download testimonial images
curl -L "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400" --output public/images/testimonials/player1.webp
curl -L "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400" --output public/images/testimonials/player2.webp
curl -L "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400" --output public/images/testimonials/player3.webp

echo "Images downloaded successfully!" 