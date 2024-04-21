import sys
import google.generativeai as genai
import PIL.Image

genai.configure(api_key="AIzaSyA0WBx3-Y12rzKIwNDMlpC_mPlFDSL1xHM")

model = genai.GenerativeModel('gemini-pro-vision')

prompt = "Given this image, describe what you see in this image. Separate objects that you see by commas. Return output as a String: \"object1, object2, object3, etc\""

def get_image(image_path):
    return PIL.Image.open(image_path)

def generate_string_from_image(image_path):
    img = get_image(image_path)
    response = model.generate_content([prompt, img])
    print(response.text)


image_path = sys.argv[1]  # Takes the image path from command-line arguments
generate_string_from_image(image_path)
