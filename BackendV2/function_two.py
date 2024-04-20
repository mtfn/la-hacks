import google.generativeai as genai

genai.configure(api_key="AIzaSyA0WBx3-Y12rzKIwNDMlpC_mPlFDSL1xHM")

comparison_model = genai.GenerativeModel('gemini-pro')
chat = comparison_model.start_chat(history=[])

def compare_strings(str1, str2):
    response = chat.send_message("Output a percentage describing how similar String 1: " + str1 + " and String 2: " + str2 + " are to each other.")
    return response.text