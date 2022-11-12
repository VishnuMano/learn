import cv2 as cv
import numpy as np

cap = cv.VideoCapture(0) # use webcam resource

while True:
    ret, frame = cap.read() # ret (return) shows success of video capture
    
    image = np.zeros(frame.shape, np.uint8) # creates numpy array with all 0s
    smaller_frame = cv.resize(frame, (0, 0), fx=0.5, fy=0.5)
    cv.imshow('frame', image)
    if cv.waitKey(1) == ord('q'): # returns integer of pressed key
        break

cap.release() # release webcam resource