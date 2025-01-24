#!/bin/bash

# Create directories if they don't exist
mkdir -p public/images/games
mkdir -p public/images/cards

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

echo "Images downloaded successfully!" 