import sys
import google.generativeai as genai

genai.configure(api_key="AIzaSyA0WBx3-Y12rzKIwNDMlpC_mPlFDSL1xHM")

comparison_model = genai.GenerativeModel('gemini-pro')
chat = comparison_model.start_chat(history=[])

def compare_strings(str1, str2):
    response = chat.send_message("Output on a scale of 1 to 5 describing how similar in meaning String 1: " + str1 + " and String 2: " + str2 + " are to each other, with 5 being exact strings and 1 being no matching similar words between the 2 strings. If you can't decide on a number, just pick a random number between 1 to 5 inclusive. Please do not spell out the number, output an integer instead.")
    print(response.text)
    return response.text

if __name__ == "__main__":
    str1 = sys.argv[1]
    str2 = sys.argv[2]
    compare_strings(str1, str2)
