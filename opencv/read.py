import cv2 as cv

# Reading Images
# img = cv.imread('Photos/img1.jpeg')
# cv.imshow('Dog', img)

# Reading Videos
capture = cv.VideoCapture('Videos/vid1.mp4')
while True:
    isTrue, frame = capture.read()
    cv.imshow('Video', frame)
    if cv.waitKey(20) & 0xFF==ord('d'):
        break

capture.release()
cv.destroyAllWindows()