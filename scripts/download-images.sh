#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p public/images

# Download images
curl -o public/images/preventive-care.jpg "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80"
curl -o public/images/digital-xray.jpg "https://plus.unsplash.com/premium_photo-1661764878654-3d0fc2eefcca?w=800&q=80"
curl -o public/images/root-canal.jpg "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80"
curl -o public/images/cosmetic.jpg "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=800&q=80"
curl -o public/images/implants.jpg "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80"
curl -o public/images/emergency.jpg "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&q=80"
curl -o public/images/hero-bg.jpg "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600&q=80"
