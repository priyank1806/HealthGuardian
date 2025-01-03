import streamlit as st
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn import svm
from sklearn.metrics import accuracy_score

# Load the dataset
data = pd.read_csv(r"C:\Users\rumjhum\Desktop\Parkinsons\parkinsons data.csv")

# Prepare the data
X = data.drop(columns=['name', 'status'], axis=1)
Y = data['status']

# Split data into training and testing sets
X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, random_state=2)

# Standardize the data
scaler = StandardScaler()
scaler.fit(X_train)
X_train = scaler.transform(X_train)
X_test = scaler.transform(X_test)

# Train the model
model = svm.SVC(kernel='linear')
model.fit(X_train, Y_train)

# Check the model's accuracy on the test set
test_accuracy = accuracy_score(Y_test, model.predict(X_test))
st.write(f"Model Accuracy: {test_accuracy * 100:.2f}%")  # Show accuracy in streamlit app

# Define a function for prediction
def predict_parkinsons(inputs):
    inputs = np.asarray(inputs)
    inputs_reshaped = inputs.reshape(1, -1)
    
    # Ensure the input is standardized with the same scaler
    standardized_input = scaler.transform(inputs_reshaped)
    
    prediction = model.predict(standardized_input)
    return prediction[0]

# Streamlit web app
st.title("Parkinson's Disease Prediction")

# Take user inputs for the features
MDVP_Fo_Hz = st.number_input("MDVP:Fo(Hz)", min_value=0.0, max_value=500.0, step=0.01)
MDVP_Fhi_Hz = st.number_input("MDVP:Fhi(Hz)", min_value=0.0, max_value=500.0, step=0.01)
MDVP_Flo_Hz = st.number_input("MDVP:Flo(Hz)", min_value=0.0, max_value=500.0, step=0.01)
MDVP_Jitter_percent = st.number_input("MDVP:Jitter(%)", min_value=0.0, max_value=1.0, step=0.001)
MDVP_Jitter_Abs = st.number_input("MDVP:Jitter(Abs)", min_value=0.0, max_value=1.0, step=0.00001)
MDVP_RAP = st.number_input("MDVP:RAP", min_value=0.0, max_value=1.0, step=0.001)
MDVP_PPQ = st.number_input("MDVP:PPQ", min_value=0.0, max_value=1.0, step=0.001)
Jitter_DDP = st.number_input("Jitter:DDP", min_value=0.0, max_value=1.0, step=0.001)
MDVP_Shimmer = st.number_input("MDVP:Shimmer", min_value=0.0, max_value=1.0, step=0.001)
MDVP_Shimmer_dB = st.number_input("MDVP:Shimmer(dB)", min_value=0.0, max_value=10.0, step=0.01)
Shimmer_APQ3 = st.number_input("Shimmer:APQ3", min_value=0.0, max_value=1.0, step=0.001)
Shimmer_APQ5 = st.number_input("Shimmer:APQ5", min_value=0.0, max_value=1.0, step=0.001)
MDVP_APQ = st.number_input("MDVP:APQ", min_value=0.0, max_value=1.0, step=0.001)
Shimmer_DDA = st.number_input("Shimmer:DDA", min_value=0.0, max_value=1.0, step=0.001)
NHR = st.number_input("NHR", min_value=0.0, max_value=1.0, step=0.001)
HNR = st.number_input("HNR", min_value=0.0, max_value=100.0, step=0.1)
RPDE = st.number_input("RPDE", min_value=0.0, max_value=1.0, step=0.001)
DFA = st.number_input("DFA", min_value=0.0, max_value=1.0, step=0.001)
spread1 = st.number_input("spread1", min_value=-10.0, max_value=0.0, step=0.001)
spread2 = st.number_input("spread2", min_value=0.0, max_value=1.0, step=0.001)
D2 = st.number_input("D2", min_value=0.0, max_value=5.0, step=0.001)
PPE = st.number_input("PPE", min_value=0.0, max_value=1.0, step=0.001)

# Make a prediction when the user clicks "Submit"
if st.button("Submit"):
    input_data = [MDVP_Fo_Hz, MDVP_Fhi_Hz, MDVP_Flo_Hz, MDVP_Jitter_percent, MDVP_Jitter_Abs,
                  MDVP_RAP, MDVP_PPQ, Jitter_DDP, MDVP_Shimmer, MDVP_Shimmer_dB, Shimmer_APQ3,
                  Shimmer_APQ5, MDVP_APQ, Shimmer_DDA, NHR, HNR, RPDE, DFA, spread1, spread2, D2, PPE]
    
    prediction = predict_parkinsons(input_data)
    
    if prediction == 1:
        st.success("You have Parkinson's disease.")
    else:
        st.success("You do not have Parkinson's disease.")
