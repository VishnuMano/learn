import cv2 as cv

def rescaleFrame(frame, scale=1.5):
    width = int(frame.shape[1] * scale)
    height = int(frame.shape[0] * scale)
    dimensions = (width, height)
    return cv.resize(frame, dimensions, interpolation = cv.INTER_AREA)

capture = cv.VideoCapture('Videos/vid1.mp4')
while True:
    isTrue, frame = capture.read()
    frame_resized = rescaleFrame(frame, scale=1.25)
    cv.imshow('Video', frame)
    cv.imshow('Video Resized', frame_resized)
    if cv.waitKey(20) & 0xFF==ord('d'):
        break

capture.release()
cv.destroyAllWindows()