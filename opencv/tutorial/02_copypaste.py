import cv2

img = cv2.imread('assets/img2.jpeg')
print(img.shape)

patch = img[200:300, 500:600]
img[0:100, 0:100] = patch;

cv2.imshow('CopyPaste', img)
cv2.waitKey(0)
cv2.destroyAllWindows()