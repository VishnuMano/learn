import cv2 as cv

img = cv.imread('Photos/img2.jpeg')
cv.imshow('Dog', img)

capture = cv.VideoCapture('Videos/vid1.mp4')

while True:
    isTrue, frame = capture.read()
    cv.imshow('Video', frame)

cv.waitKey(0)