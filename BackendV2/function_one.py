import google.generativeai as genai
import PIL.Image

genai.configure(api_key="AIzaSyA0WBx3-Y12rzKIwNDMlpC_mPlFDSL1xHM")

model = genai.GenerativeModel('gemini-pro-vision')

prompt = """Given this image, describe what you see in this image. Separate objects that you see by commas. Return output as a String: "object1, object2, object3, etc"""

def generate_string_from_image(img):
    response = model.generate_content([prompt, img])
    return response.text

