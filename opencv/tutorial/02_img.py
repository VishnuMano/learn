import cv2
import random

img = cv2.imread('assets/img2.jpeg')

# Images are represented as a numpy array
print(type(img))
print(img)

# Image Shape: (height, width, channels)
# Channels: # of values representing each pixels
# In opencv, 3 values rep every pixel (therefore, 3 channels): Blue, Green, Red
# Example Pixel: [255, 0, 0] -> a fully blue pixel (max val is 255)
print(img.shape)

for row in range(img.shape[0]):
    for column in range(img.shape[1]):
        img[row][column] = [random.randint(0, 255), random.randint(0, 255), random.randint(0, 255)]

cv2.imshow('Random', img)

cv2.waitKey(0)
cv2.destroyAllWindows()