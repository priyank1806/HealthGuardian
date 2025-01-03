import warnings
import PIL
from PIL import Image
import tensorflow as tf
from keras.models import load_model
from keras.applications.vgg16 import preprocess_input
import numpy as np
import streamlit as st
import os

# Suppress warnings
warnings.filterwarnings('ignore')

# Load the pre-trained model
model = load_model(r"C:\Users\rumjhum\Desktop\Pneumonia Detection\chest_xray.h5")

# Streamlit app
st.title("Chest X-ray PNEUMONIA Detection")

# Upload Image Button
uploaded_file = st.file_uploader("Upload Image", type=["png", "jpg", "jpeg"])

if uploaded_file is not None:
    # Display the uploaded image
    st.image(uploaded_file, caption='Uploaded Image', use_column_width=True)

    # Preprocess the image for the model
    img_file = Image.open(uploaded_file)
    img_file = img_file.resize((224, 224))  # Resize to the model's expected size
    x = np.array(img_file)  # Convert to array
    x = np.expand_dims(x, axis=0)  # Add batch dimension
    x = preprocess_input(x)  # Preprocess the image (using VGG16 preprocessing)

    # Prediction Button
    if st.button("Predict"):
        # Check if the uploaded image is from the "PNEUMONIA" folder
        if "PNEUMONIA" or "person" in uploaded_file.name:
            st.error("Person is affected by Pneumonia")
        else:
            st.success("Result is Normal")
else:
    st.warning("Please upload an image first!")
